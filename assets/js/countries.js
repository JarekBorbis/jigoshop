"use strict";
var jigoshop_countries = {"AL":{"BER":"Berat","DIB":"Dib\u00ebr","DUR":"Durr\u00ebs","ELB":"Elbasan","FIE":"Fier","GJI":"Gjirokast\u00ebr","KOR":"Kor\u00e7\u00eb","KUK":"Kuk\u00ebs","LEZ":"Lezh\u00eb","SHK":"Shkod\u00ebr","TIR":"Tiran\u00eb","VLO":"Vlor\u00eb"},"AU":{"ACT":"Australian Capital Territory","NSW":"New South Wales","NT":"Northern Territory","QLD":"Queensland","SA":"South Australia","TAS":"Tasmania","VIC":"Victoria","WA":"Western Australia"},"BR":{"AC":"Acre","AL":"Alagoas","AM":"Amazonas","AP":"Amap\u00e1","BA":"Bahia","CE":"Cear\u00e1","DF":"Distrito federal","ES":"Esp\u00edrito santo","GO":"Goi\u00e1s","MA":"Maranh\u00e3o","MG":"Minas gerais","MS":"Mato grosso do sul","MT":"Mato grosso","PA":"Par\u00e1","PB":"Paraiba","PE":"Pernambuco","PI":"Piau\u00ed","PR":"Paran\u00e1","RJ":"Rio de janeiro","RN":"Rio grande do norte","RO":"Rond\u00f4nia","RR":"Roraima","RS":"Rio grande do sul","SC":"Santa catarina","SE":"Sergipe","SP":"S\u00e3o paulo","TO":"Tocantins"},"CA":{"AB":"Alberta","BC":"British Columbia","MB":"Manitoba","NB":"New Brunswick","NL":"Newfoundland","NS":"Nova Scotia","NT":"Northwest Territories","NU":"Nunavut","ON":"Ontario","PE":"Prince Edward Island","QC":"Quebec","SK":"Saskatchewan","YT":"Yukon Territory"},"CH":{"AG":"Aargau","AI":"Appenzell Innerrhoden","AR":"Appenzell Ausserrhoden","BE":"Bern","BL":"Basel-Landschaft","BS":"Basel-Stadt","FR":"Freiburg","GE":"Genf","GL":"Glarus","GR":"Graub\u00fcnden","JU":"Jura","LU":"Luzern","NE":"Neuenburg","NW":"Nidwalden","OW":"Obwalden","SG":"St. Gallen","SH":"Schaffhausen","SO":"Solothurn","SZ":"Schwyz","TG":"Thurgau","TI":"Tessin","UR":"Uri","VD":"Waadt","VS":"Wallis","ZG":"Zug","ZH":"Z\u00fcrich"},"ES":{"AA":"\u00c1lava","AB":"Albacete","AN":"Alicante","AM":"Almer\u00eda","AS":"Asturias","AV":"\u00c1vila","BD":"Badajoz","BL":"Baleares","BR":"Barcelona","BU":"Burgos","CC":"C\u00e1ceres","CD":"C\u00e1diz","CN":"Cantabria","CS":"Castell\u00f3n","CE":"Ceuta","CR":"Ciudad Real","CO":"C\u00f3rdoba","CU":"Cuenca","GN":"Gerona","GD":"Granada","GJ":"Guadalajara","GP":"Guip\u00fazcoa","HL":"Huelva","HS":"Huesca","JA":"Ja\u00e9n","AC":"La Coru\u00f1a","LR":"La Rioja","LP":"Las Palmas","LN":"Le\u00f3n","LD":"L\u00e9rida","LG":"Lugo","MD":"Madrid","MG":"M\u00e1laga","ME":"Melilla","MR":"Murcia","NV":"Navarra","OR":"Orense","PL":"Palencia","PV":"Pontevedra","SL":"Salamanca","SC":"Santa Cruz de Tenerife","SG":"Segovia","SV":"Sevilla","SR":"Soria","TG":"Tarragona","TE":"Teruel","TD":"Toledo","VN":"Valencia","VD":"Valladolid","VZ":"Vizcaya","ZM":"Zamora","ZG":"Zaragoza"},"CZ":{"JC":"Jihocesk\u00fd kraj [South Bohemian Region]","JM":"Jihomoravsk\u00fd kraj [South Moravian Region]","KA":"Karlovarsk\u00fd kraj [Karlovy Vary Region]","KR":"Kr\u00e1lov\u00e9hradeck\u00fd kraj [Hradec Kr\u00e1lov\u00e9 Region]","LI":"Libereck\u00fd kraj [Liberec Region]","MO":"Moravskoslezsk\u00fd kraj [Moravian-Silesian Region]","OL":"Olomouck\u00fd kraj [Olomouc Region]","PA":"Pardubick\u00fd kraj [Pardubice Region]","PL":"Plzensk\u00fd kraj [Plzen Region]","PR":"Praha (Hlavni mesto Praha) [Prague]","ST":"Stredocesk\u00fd kraj [Central Bohemian Region]","US":"\u00dasteck\u00fd kraj [\u00dast\u00ed Region]","VY":"Vysocina","ZL":"Zl\u00ednsk\u00fd kraj [Zl\u00edn Region]"},"DE":{"NDS":"Niedersachsen","BAW":"Baden-W\u00fcrttemberg","BAY":"Bayern","BER":"Berlin","BRG":"Brandenburg","BRE":"Bremen","HAM":"Hamburg","HES":"Hessen","MEC":"Mecklenburg-Vorpommern","NRW":"Nordrhein-Westfalen","RHE":"Rheinland-Pfalz","SAR":"Saarland","SAS":"Sachsen","SAC":"Sachsen-Anhalt","SCN":"Schleswig-Holstein","THE":"Th\u00fcringen"},"FI":{"\u00c5AL":"\u00c5land","EKA":"Etel\u00e4-Karjala [South Karelia]","EPO":"Etel\u00e4-Pohjanmaa [South Ostrobothnia]","ESA":"Etel\u00e4-Savo","KAI":"Kainuu","KHA":"Kanta-H\u00e4me","KPO":"Keski-Pohjanmaa [Central Ostrobothnia]","KSO":"Keski-Suomi [Central Finland]","KYM":"Kymenlaakso (Kymmenedalen)","LAP":"Lappi [Lapland]","PHA":"P\u00e4ij\u00e4t-H\u00e4me","PIR":"Pirkanmaa","POH":"Pohjanmaa [Ostrobothnia]","PKA":"Pohjois-Karjala [North Karelia]","PPO":"Pohjois-Pohjanmaa [North Ostrobothnia]","PSA":"Pohjois-Savo","SAT":"Satakunta","UUS":"Uusimaa (Nyland)","VSS":"Varsinais-Suomi (Egentliga Finland)"},"FR":{"ALS":"Alsace","AQU":"Aquitaine","AUV":"Auvergne","BAS":"Basse-Normandie [Lower Normandy]","BOU":"Bourgogne [Burgundy]","BRE":"Bretagne [Brittany]","CEN":"Centre","CHA":"Champagne - Ardenne","COR":"Corse","FRA":"Franche-Comt\u00e9","HAU":"Haute-Normandie [Upper Normandy]","ILE":"\u00cele-de-France","LAN":"Languedoc - Roussillon","LIM":"Limousin","LOR":"Lorraine","MID":"Midi - Pyr\u00e9n\u00e9es","NOR":"Nord - Pas-de-Calais","PAY":"Pays de la Loire","PIC":"Picardie","POI":"Poitou - Charentes","PRO":"Provence - Alpes - C\u00f4te d'Azur","RHO":"Rh\u00f4ne - Alpes"},"GR":{"AOR":"\u00c1gio \u00d3ros [Mount Athos]","AMT":"Anatolik\u00ed Makedon\u00eda & Thrak\u00ed [East Macedonia & Thrace]","ATT":"Attik\u00ed [Attica]","DEL":"Dytik\u00ed Ell\u00e1da [Western Greece]","DMD":"Dytik\u00ed Makedon\u00eda [West Macedonia]","ION":"I\u00f3nia Nisi\u00e1 [Ionian Islands]","IPI":"\u00cdpiros [Epirus]","KMD":"Kedrik\u00ed Makedon\u00eda [Central Macedonia]","KRI":"Kr\u00edti [Crete]","NAI":"N\u00f3tio Aiga\u00edo [South Aegean]","PEL":"Pelop\u00f3nnisos [Peloponnese]","SEL":"Stere\u00e1 Ell\u00e1da [Central Greece]","THE":"Thessal\u00eda [Thessaly]","VAI":"V\u00f3rio Aiga\u00edo [Northern Aegean]"},"HK":{"HONG KONG":"Hong Kong Island","KOWLOONG":"Kowloong","NEW TERRITORIES":"New Territories"},"HU":{"BAC":"B\u00e1cs-Kiskun","BAR":"Baranya","BEK":"B\u00e9k\u00e9s","BOR":"Borsod-Aba\u00faj-Zempl\u00e9n","BUD":"Budapest","CSO":"Csongr\u00e1d","FEJ":"Fej\u00e9r","GYO":"Gyor-Moson-Sopron","HAJ":"Hajd\u00fa-Bihar","HEV":"Heves","JAS":"J\u00e1sz-Nagykun-Szolnok","KOM":"Kom\u00e1rom-Esztergom","NOG":"N\u00f3gr\u00e1d","PES":"Pest","SOM":"Somogy","SZA":"Szabolcs-Szatm\u00e1r-Bereg","TOL":"Tolna","VAS":"Vas","VES":"Veszpr\u00e9m","ZAL":"Zala"},"IE":{"G":"Galway (incl. Galway City)","LM":"Leitrim","MO":"Mayo","RN":"Roscommon","SO":"Sligo","CW":"Carlow","D":"Dublin","DR":"D\u00fan Laoghaire-Rathdown","FG":"Fingal","KE":"Kildare","KK":"Kilkenny","LS":"Laois","LD":"Longford","LH":"Louth","MH":"Meath","OY":"Offaly","SD":"South Dublin","WH":"Westmeath","WX":"Wexford","WW":"Wicklow","CE":"Clare","C":"Cork (incl. Cork City)","KY":"Kerry","LK":"Limerick (incl. Limerick City)","NT":"North Tipperary","ST":"South Tipperary","WD":"Waterford (incl. Waterford City)","CN":"Cavan","DL":"Donegal","MIN":"Monaghan"},"NL":{"D":"Drenthe","Fl":"Flevoland","Fr":"Friesland","Gld":"Gelderland","Gr":"Groningen","L":"Limburg","N-B":"Noord-Brabant","N-H":"Noord-Holland","O":"Overijssel","U":"Utrecht","Z":"Zeeland","Z-H":"Zuid-Holland"},"NZ":{"AUK":"Auckland","BOP":"Bay of Plenty","CAN":"Canterbury","GIS":"Gisborne","HKB":"Hawke's Bay","MWT":"Manawatu-Wanganui","MBH":"Marlborough","NSN":"Nelson","NTL":"Northland","OTA":"Otago","STL":"Southland","TKI":"Taranaki","TAS":"Tasman","WKO":"Waikato","WGN":"Wellington","WTC":"West Coast"},"PH":{"ABR":"Abra","AGN":"Agusan del Norte","AGS":"Agusan del Sur","AKL":"Aklan","ALB":"Albay","ANT":"Antique","APA":"Apayao","AUR":"Aurora","BAS":"Basilan","BAN":"Bataan","BTN":"Batanes","BTG":"Batangas","BEN":"Benguet","BIL":"Biliran","BOH":"Bohol","BUK":"Bukidnon","BUL":"Bulacan","CAG":"Cagayan","CAN":"Camarines Norte","CAS":"Camarines Sur","CAM":"Camiguin","CAP":"Capiz","CAT":"Catanduanes","CAV":"Cavite","CEB":"Cebu","COM":"Compostela Valley","NCO":"Cotabato","DAV":"Davao del Norte","DAS":"Davao del Sur","DAC":"Davao Occidental","DAO":"Davao Oriental","DIN":"Dinagat Islands","EAS":"Eastern Samar","GUI":"Guimaras","IFU":"Ifugao","ILN":"Ilocos Norte","ILS":"Ilocos Sur","ILI":"Iloilo","ISA":"Isabela","KAL":"Kalinga","LUN":"La Union","LAG":"Laguna","LAN":"Lanao del Norte","LAS":"Lanao del Sur","LEY":"Leyte","MAG":"Maguindanao","MAD":"Marinduque","MAS":"Masbate","MSC":"Misamis Occidental","MSR":"Misamis Oriental","MOU":"Mountain Province","NEC":"Negros Occidental","NER":"Negros Oriental","NSA":"Northern Samar","NUE":"Nueva Ecija","NUV":"Nueva Vizcaya","MDC":"Occidental Mindoro","MDR":"Oriental Mindoro","PLW":"Palawan","PAM":"Pampanga","PAN":"Pangasinan","QUE":"Quezon","QUI":"Quirino","RIZ":"Rizal","ROM":"Romblon","WSA":"Samar","SAR":"Sarangani","SIQ":"Siquijor","SOR":"Sorsogon","SCO":"South Cotabato","SLE":"Southern Leyte","SUK":"Sultan Kudarat","SLU":"Sulu","SUN":"Surigao del Norte","SUR":"Surigao del Sur","TAR":"Tarlac","TAW":"Tawi-Tawi","ZMB":"Zambales","ZAN":"Zamboanga del Norte","ZAS":"Zamboanga del Sur","ZSI":"Zamboanga Sibugay","MNL":"Metro Manila"},"PL":{"DS":"dolno\u015bl\u0105skie","KP":"kujawsko-pomorskie","LU":"lubelskie","LB":"lubuskie","LD":"\u0142\u00f3dzkie","MA":"ma\u0142opolskie","MZ":"mazowieckie","OP":"opolskie","PK":"podkarpackie","PD":"podlaskie","PM":"pomorskie","SL":"\u015bl\u0105skie","SK":"\u015bwi\u0119tokrzyskie","WN":"warmi\u0144sko-mazurskie","WP":"wielkopolskie","ZP":"zachodniopomorskie"},"RO":{"ALB":"Alba","ARA":"Arad","ARG":"Arge\u0219","BAC":"Bac\u0103u","BIH":"Bihor","BIS":"Bistri\u021ba-N\u0103s\u0103ud","BOT":"Boto\u0219ani","BRA":"Br\u0103ila","BRS":"Bra\u0219ov","BUC":"Bucure\u0219ti","BUZ":"Buz\u0103u","CAL":"C\u0103l\u0103ra\u0219i","CAR":"Cara\u0219-Severin","CLU":"Cluj","CON":"Constan\u021ba","COV":"Covasna","DAM":"D\u00e2mbovi\u021ba","DOL":"Dolj","GAL":"Gala\u021bi","GIU":"Giurgiu","GOR":"Gorj","HAR":"Harghita","HUN":"Hunedoara","IAL":"Ialomi\u021ba","IAS":"Ia\u0219i","ILF":"Ilfov","MAR":"Maramure\u0219","MEH":"Mehedin\u021bi","MUR":"Mure\u0219","NEA":"Neam\u021b","OLT":"Olt","PRA":"Prahova","SAL":"S\u0103laj","SAT":"Satu Mare","SIB":"Sibiu","SUC":"Suceava","TEL":"Teleorman","TIM":"Timi\u0219","TUL":"Tulcea","VAL":"V\u00e2lcea","VAS":"Vaslui","VRA":"Vrancea"},"SR":{"BOR":"Bor","BRA":"Branicevo","GBE":"Grad Beograd","JAB":"Jablanica","KOL":"Kolubara","MAC":"Macva","MOR":"Moravica","NIS":"Ni\u0161ava","PCI":"Pcinja","PIR":"Pirot","POD":"Podunavlje [Danube]","POM":"Pomoravlje","RSN":"Rasina","RSK":"Ra\u0161ka","SUM":"\u0160umadija","TOP":"Toplica","ZAJ":"Zajecar","ZLA":"Zlatibor","JBK":"Ju\u017ena Backa","JBN":"Ju\u017eni Banat","SBK":"Severna Backa","SBN":"Severni Banat","SRB":"Srednji Banat","SRE":"Srem","ZBK":"Zapadna Backa [West Backa]"},"SE":{"BLE":"Blekinge l\u00e4n","DAL":"Dalarnas l\u00e4n","GAV":"G\u00e4vleborgs l\u00e4n","GOT":"Gotlands l\u00e4n","HAL":"Hallands l\u00e4n","JAM":"J\u00e4mtlands l\u00e4n","JON":"J\u00f6nk\u00f6pings l\u00e4n","KAL":"Kalmar l\u00e4n","KRO":"Kronobergs l\u00e4n","NOR":"Norrbottens l\u00e4n","ORE":"\u00d6rebro l\u00e4n","OST":"\u00d6sterg\u00f6tlands l\u00e4n","SKA":"Sk\u00e5ne l\u00e4n","SOD":"S\u00f6dermanlands l\u00e4n","STO":"Stockholms l\u00e4n","UPP":"Uppsala l\u00e4n","VAR":"V\u00e4rmlands l\u00e4n","VAS":"V\u00e4sterbottens l\u00e4n","VNL":"V\u00e4sternorrlands l\u00e4n","VML":"V\u00e4stmanlands l\u00e4n","VGO":"V\u00e4stra G\u00f6talands l\u00e4n"},"US":{"AK":"Alaska","AL":"Alabama","AR":"Arkansas","AZ":"Arizona","CA":"California","CO":"Colorado","CT":"Connecticut","DC":"District Of Columbia","DE":"Delaware","FL":"Florida","GA":"Georgia","HI":"Hawaii","IA":"Iowa","ID":"Idaho","IL":"Illinois","IN":"Indiana","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","MA":"Massachusetts","MD":"Maryland","ME":"Maine","MI":"Michigan","MN":"Minnesota","MO":"Missouri","MS":"Mississippi","MT":"Montana","NC":"North Carolina","ND":"North Dakota","NE":"Nebraska","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NV":"Nevada","NY":"New York","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PA":"Pennsylvania","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VA":"Virginia","VT":"Vermont","WA":"Washington","WI":"Wisconsin","WV":"West Virginia","WY":"Wyoming"},"USAF":{"AA":"Americas","AE":"Europe","AP":"Pacific"}};

jQuery(function($){
	// handle changes to Countries that don't require states and back again
	$('select.country_to_state').on('change init', function(){
		var country = $(this).val();
		var $state = $('#' + $(this).attr('rel'));
		var input_name = $state.attr('name');
		var input_id = $state.attr('id');

		if(jigoshop_countries[country]){
			if($state.is('input')){
				// Change for select
				var required = $state.prev().find('span.required');

				if(required.val() == undefined){
					$state.prev().append(' <span class="required">*</span>');
				}

				$state.replaceWith($(document.createElement('select')).attr('name', input_name).attr('id', input_id));
				$state = $('#'+input_id);
			}

			// Add new states
			$('option', $state).remove();
			$(document.createElement('option')).val('').html(jigoshop_params.select_state_text).appendTo($state);
			for(var state in jigoshop_countries[country]){
				$(document.createElement('option')).val(state).html(jigoshop_countries[country][state]).appendTo($state);
			}

			var selected = jigoshop_params.shipping_state;
			if(input_name == 'calc_shipping_state'){
				selected = $('#calc_shipping_state').val();
			} else if(input_name == 'billing_state'){
				selected = jigoshop_params.billing_state;
			}

			$('option[value='+selected+']', $state).attr('selected', 'selected');
		} else if($state.is('select')){
			var $parent = $state.closest('.form-row');
			$parent.removeClass('jigoshop-validated jigoshop-invalid');
			$state.prev().find('span.required').remove();
			$state.replaceWith(
				$(document.createElement('input')).addClass('input-text').attr('placeholder', jigoshop_params.state_text)
					.attr('name', input_name).attr('id', input_id).attr('type', 'text')
			);
		}

		$(this).trigger('jigoshop.checkout.state_box_changed');
	});
});
