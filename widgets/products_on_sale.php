<?php

/**
 * Widget which lists products on sale
 * Displays shopping cart widget
 * DISCLAIMER
 * Do not edit or add directly to this file if you wish to upgrade Jigoshop to newer
 * versions in the future. If you wish to customise Jigoshop core for your needs,
 * please use our GitHub repository to publish essential changes for consideration.
 *
 * @package             Jigoshop
 * @category            Widgets
 * @author              Jigoshop
 * @copyright           Copyright © 2011-2014 Jigoshop.
 * @license             GNU General Public License v3
 */
class Jigoshop_Widget_Products_On_Sale extends WP_Widget
{
	/**
	 * Constructor
	 * Setup the widget with the available options
	 * Add actions to clear the cache whenever a post is saved|deleted or a theme is switched
	 */
	public function __construct()
	{
		$options = array(
			'classname' => 'widget_products_on_sale',
			'description' => __('Display a list of products currently onsale', 'jigoshop')
		);

		// Create the widget
		parent::__construct('products-onsale', __('Jigoshop: Products On-Sale', 'jigoshop'), $options);

		// Flush cache after every save
		add_action('save_post', array($this, 'flush_widget_cache'));
		add_action('deleted_post', array($this, 'flush_widget_cache'));
		add_action('switch_theme', array($this, 'flush_widget_cache'));
	}

	/**
	 * Widget
	 * Display the widget in the sidebar
	 * Save output to the cache if empty
	 *
	 * @param  array  sidebar arguments
	 * @param  array  instance
	 */
	public function widget($args, $instance)
	{
		// Get the most recent products from the cache
		$cache = wp_cache_get('widget_recent_products', 'widget');

		// If no entry exists use array
		if (!is_array($cache)) {
			$cache = array();
		}

		// If cached get from the cache
		if (isset($cache[$args['widget_id']])) {
			echo $cache[$args['widget_id']];

			return false;
		}

		// Start buffering
		ob_start();
		extract($args);

		// Set the widget title
		$title = apply_filters(
			'widget_title',
			($instance['title']) ? $instance['title'] : __('Special Offers', 'jigoshop'),
			$instance,
			$this->id_base
		);

		// Set number of products to fetch
		if (!$number = absint($instance['number'])) {
			$number = 5;
		}

		// Set up query
		$query_args = array(
			'posts_per_page' => -1,
			'post_type' => 'product',
			'post_status' => 'publish',
			'orderby' => 'rand',
			'meta_query' => array(
				array(
					'key' => 'visibility',
					'value' => array('catalog', 'visible'),
					'compare' => 'IN',
				),
			)
		);

		$q = new WP_Query($query_args);

		// If there are products
		if ($q->have_posts()) {

			// Print the widget wrapper & title
			echo $before_widget;
			if ($title) {
				echo $before_title.$title.$after_title;
			}

			// Open the list
			echo '<ul class="product_list_widget">';

			// Print out each product
			for ($i = 0; $q->have_posts() && $i < $number;) {
				$q->the_post();
				// Get new jigoshop_product instance
				$_product = new jigoshop_product(get_the_ID());

				// Skip if not on sale
				if (!$_product->is_on_sale()) {
					continue;
				} else {
					$i++;
				}

				echo '<li>';
				// Print the product image & title with a link to the permalink
				echo '<a href="'.get_permalink().'" title="'.esc_attr(get_the_title()).'">';

				// Print the product image
				echo (has_post_thumbnail())
					? the_post_thumbnail('shop_tiny')
					: jigoshop_get_image_placeholder('shop_tiny');

				echo '<span class="js_widget_product_title">'.get_the_title().'</span>';
				echo '</a>';

				// Print the price with html wrappers
				echo '<span class="js_widget_product_price">'.$_product->get_price_html().'</span>';
				echo '</li>';
			}

			echo '</ul>'; // Close the list

			// Print closing widget wrapper
			echo $after_widget;

			// Reset the global $the_post as this query will have stomped on it
			wp_reset_postdata();
		}
		ob_get_flush();
	}

	/**
	 * Update
	 * Handles the processing of information entered in the wordpress admin
	 * Flushes the cache & removes entry from options array
	 *
	 * @param  array  new instance
	 * @param  array  old instance
	 * @return  array  instance
	 */
	public function update($new_instance, $old_instance)
	{
		$instance = $old_instance;

		// Save the new values
		$instance['title'] = strip_tags($new_instance['title']);
		$instance['number'] = absint($new_instance['number']);

		// Flush the cache
		$this->flush_widget_cache();

		// Remove the cache entry from the options array
		$alloptions = wp_cache_get('alloptions', 'options');
		if (isset($alloptions['widget_recent_products'])) {
			delete_option('widget_recent_products');
		}

		return $instance;
	}

	/**
	 * Flush Widget Cache
	 * Flushes the cached output
	 */
	public function flush_widget_cache()
	{
		wp_cache_delete('widget_recent_products', 'widget');
	}

	/**
	 * Form
	 * Displays the form for the wordpress admin
	 *
	 * @param  array  instance
	 * @return void
	 */
	public function form($instance)
	{
		// Get instance data
		$title = isset($instance['title']) ? esc_attr($instance['title']) : null;
		$number = isset($instance['number']) ? absint($instance['number']) : 5;

		// Widget Title
		echo "
		<p>
			<label for='{$this->get_field_id('title')}'>".__('Title:', 'jigoshop')."</label>
			<input class='widefat' id='{$this->get_field_id('title')}' name='{$this->get_field_name('title')}' type='text' value='{$title}' />
		</p>";

		// Number of posts to fetch
		echo "
		<p>
			<label for='{$this->get_field_id('number')}'>".__('Number of products to show:', 'jigoshop')."</label>
			<input id='{$this->get_field_id('number')}' name='{$this->get_field_name('number')}' type='number' min='1' value='{$number}' />
		</p>";
	}
}
