//create legends

function createDepressionLegend(){

	if (LegendControl instanceof L.Control)
		 {map.removeControl(LegendControl);}


		 LegendControl = L.control({
	 			position: 'bottomright'});

			LegendControl.onAdd= function (map) {

            // create the control container with a particular class name
            var container = L.DomUtil.create('div', 'legend-control-container');

            //add temporal legend div to container
            $(container).append('<div id="temporal-legend">')

            //SVG elements
            var svg = '<svg id="attribute-legend" width="650px" height="90px">';

            svg +=  '<rect class="title-rect" id="symbol" fill="#000000" fill-opacity="0.8" x="0" y="0" height="30" width ="650"/>' +
                    '<text class="legend-title" x="35" y="20" fill="white" font-weight="bold" font-size="16">Legend</text>'+

                    '<text class="legend-title" x="600" y="80" fill="black" font-weight="bold" font-size="12">> 6.5%</text>'+
                    '<rect class="legend-rect" id="symbol" fill="#081d58" fill-opacity="0.9" x="570" y="50" height="15" width ="50"/>' +

										'<text class="legend-title" x="550" y="80" fill="black" font-weight="bold" font-size="12">6%</text>'+
                    '<rect class="legend-rect" id="symbol" fill="#172976" fill-opacity="0.9" x="510" y="50" height="15" width ="50"/>' +

                    '<text class="legend-title" x="480" y="80" fill="black" font-weight="bold" font-size="12">5.5%</text>'+
                   	'<rect class="legend-rect" id="symbol" fill="#253494" fill-opacity="0.9" x="450" y="50" height="15" width ="50"/>'+

									 	'<text class="legend-title" x="430" y="80" fill="black" font-weight="bold" font-size="12">5%</text>'+
										'<rect class="legend-rect" id="symbol" fill="#225ea8" fill-opacity="0.9" x="390" y="50" height="15" width ="50"/>'+

										'<text class="legend-title" x="360" y="80" fill="black" font-weight="bold" font-size="12">4.5%</text>'+
								 		'<rect class="legend-rect" id="symbol" fill="#1d91c0" fill-opacity="0.9" x="330" y="50" height="15" width ="50"/>'+

								 		'<text class="legend-title" x="310" y="80" fill="black" font-weight="bold" font-size="12">4%</text>'+
										'<rect class="legend-rect" id="symbol" fill="#41b6c4" fill-opacity="0.9" x="270" y="50" height="15" width ="50"/>'+

										'<text class="legend-title" x="240" y="80" fill="black" font-weight="bold" font-size="12">3.5%</text>'+
							 			'<rect class="legend-rect" id="symbol" fill="#7fcdbb" fill-opacity="0.9" x="210" y="50" height="15" width ="50"/>'+

							 			'<text class="legend-title" x="190" y="80" fill="black" font-weight="bold" font-size="12">3%</text>'+
										'<rect class="legend-rect" id="symbol" fill="#c7e9b4" fill-opacity="0.9" x="150" y="50" height="15" width ="50"/>'+

										'<text class="legend-title" x="120" y="80" fill="black" font-weight="bold" font-size="12">2.5%</text>'+
						 				'<rect class="legend-rect" id="symbol" fill="#edf8b1" fill-opacity="0.9" x="90" y="50" height="15" width ="50"/>'+

						 				'<text class="legend-title" x="35" y="80" fill="black" font-weight="bold" font-size="12">No Data</text>'+
										'<rect class="legend-rect" id="symbol" fill="#ffffff" fill-opacity="0.9" x="30" y="50" height="15" width ="50"/>';


            svg += "</svg>";

            //add attribute legend svg to container
            $(container).append(svg);

            return container;
        };
    //map.addControl(new LegendControl());
			LegendControl.addTo(map);
};

function createAnxietyLegend(){
	if (LegendControl instanceof L.Control)
		 {map.removeControl(LegendControl);}


	LegendControl = L.control({
			position: 'bottomright'});

			LegendControl.onAdd= function (map) {

					// create the control container with a particular class name
					var container = L.DomUtil.create('div', 'legend-control-container');

					//add temporal legend div to container
					$(container).append('<div id="temporal-legend">')

					//SVG elements
					var svg = '<svg id="attribute-legend" width="440px" height="90px">';

					svg +=  '<rect class="title-rect" id="symbol" fill="#000000" fill-opacity="0.8" x="0" y="0" height="30" width ="440"/>' +
									'<text class="legend-title" x="35" y="20" fill="white" font-weight="bold" font-size="16">Legend</text>'+

									'<text class="legend-title" x="410" y="80" fill="black" font-weight="bold" font-size="12">> 6%</text>'+
									'<rect class="legend-rect" id="symbol" fill="#006837" fill-opacity="0.9" x="370" y="50" height="15" width ="50"/>' +

									'<text class="legend-title" x="350" y="80" fill="black" font-weight="bold" font-size="12">5%</text>'+
									'<rect class="legend-rect" id="symbol" fill="#31a354" fill-opacity="0.9" x="310" y="50" height="15" width ="50"/>' +

									'<text class="legend-title" x="290" y="80" fill="black" font-weight="bold" font-size="12">4%</text>'+
									'<rect class="legend-rect" id="symbol" fill="#78c679" fill-opacity="0.9" x="250" y="50" height="15" width ="50"/>'+

									'<text class="legend-title" x="230" y="80" fill="black" font-weight="bold" font-size="12">3%</text>'+
									'<rect class="legend-rect" id="symbol" fill="#addd8e" fill-opacity="0.9" x="190" y="50" height="15" width ="50"/>'+

									'<text class="legend-title" x="170" y="80" fill="black" font-weight="bold" font-size="12">2%</text>'+
									'<rect class="legend-rect" id="symbol" fill="#d9f0a3" fill-opacity="0.9" x="130" y="50" height="15" width ="50"/>'+

                  '<text class="legend-title" x="110" y="80" fill="black" font-weight="bold" font-size="12">1%</text>'+
                  '<rect class="legend-rect" id="symbol" fill="#ffffcc" fill-opacity="0.9" x="70" y="50" height="15" width ="50"/>'+

									'<text class="legend-title" x="15" y="80" fill="black" font-weight="bold" font-size="12">No Data</text>'+
									'<rect class="legend-rect" id="symbol" fill="#ffffff" fill-opacity="0.9" x="10" y="50" height="15" width ="50"/>';


					svg += "</svg>";

					//add attribute legend svg to container
					$(container).append(svg);

					return container;
			};

	// map.addControl(new LegendControl());
	LegendControl.addTo(map);

}

function createBipolarLegend(){

	if (LegendControl instanceof L.Control)
		 {map.removeControl(LegendControl);}


		 LegendControl = L.control({
	 			position: 'bottomright'});

			LegendControl.onAdd= function (map) {

            // create the control container with a particular class name
            var container = L.DomUtil.create('div', 'legend-control-container');

            //add temporal legend div to container
            $(container).append('<div id="temporal-legend">')

            //SVG elements
            var svg = '<svg id="attribute-legend" width="650px" height="90px">';

            svg +=  '<rect class="title-rect" id="symbol" fill="#000000" fill-opacity="0.8" x="0" y="0" height="30" width ="650"/>' +
                    '<text class="legend-title" x="35" y="20" fill="white" font-weight="bold" font-size="16">Legend</text>'+

                    '<text class="legend-title" x="600" y="80" fill="black" font-weight="bold" font-size="12">> 1.4%</text>'+
                    '<rect class="legend-rect" id="symbol" fill="#3f007d" fill-opacity="0.9" x="570" y="50" height="15" width ="50"/>' +

										'<text class="legend-title" x="540" y="80" fill="black" font-weight="bold" font-size="12">1.2%</text>'+
                    '<rect class="legend-rect" id="symbol" fill="#54278f" fill-opacity="0.9" x="510" y="50" height="15" width ="50"/>' +

                    '<text class="legend-title" x="490" y="80" fill="black" font-weight="bold" font-size="12">1%</text>'+
                   	'<rect class="legend-rect" id="symbol" fill="#6a51a3" fill-opacity="0.9" x="450" y="50" height="15" width ="50"/>'+

									 	'<text class="legend-title" x="420" y="80" fill="black" font-weight="bold" font-size="12">0.9%</text>'+
										'<rect class="legend-rect" id="symbol" fill="#807dba" fill-opacity="0.9" x="390" y="50" height="15" width ="50"/>'+

										'<text class="legend-title" x="360" y="80" fill="black" font-weight="bold" font-size="12">0.8%</text>'+
								 		'<rect class="legend-rect" id="symbol" fill="#9e9ac8" fill-opacity="0.9" x="330" y="50" height="15" width ="50"/>'+

								 		'<text class="legend-title" x="300" y="80" fill="black" font-weight="bold" font-size="12">0.7%</text>'+
										'<rect class="legend-rect" id="symbol" fill="#bcbddc" fill-opacity="0.9" x="270" y="50" height="15" width ="50"/>'+

										'<text class="legend-title" x="240" y="80" fill="black" font-weight="bold" font-size="12">0.6%</text>'+
							 			'<rect class="legend-rect" id="symbol" fill="#dadaeb" fill-opacity="0.9" x="210" y="50" height="15" width ="50"/>'+

							 			'<text class="legend-title" x="180" y="80" fill="black" font-weight="bold" font-size="12">0.5%</text>'+
										'<rect class="legend-rect" id="symbol" fill="#efedf5" fill-opacity="0.9" x="150" y="50" height="15" width ="50"/>'+

										'<text class="legend-title" x="120" y="80" fill="black" font-weight="bold" font-size="12">0.4%</text>'+
						 				'<rect class="legend-rect" id="symbol" fill="#fcfbfd" fill-opacity="0.9" x="90" y="50" height="15" width ="50"/>'+

						 				'<text class="legend-title" x="35" y="80" fill="black" font-weight="bold" font-size="12">No Data</text>'+
										'<rect class="legend-rect" id="symbol" fill="#ffffff" fill-opacity="0.9" x="30" y="50" height="15" width ="50"/>';


            svg += "</svg>";

            //add attribute legend svg to container
            $(container).append(svg);

            return container;
        };
    //map.addControl(new LegendControl());
			LegendControl.addTo(map);
};

function createEatingLegend(){
	if (LegendControl instanceof L.Control)
		 {map.removeControl(LegendControl);}


	LegendControl = L.control({
			position: 'bottomright'});

			LegendControl.onAdd= function (map) {

					// create the control container with a particular class name
					var container = L.DomUtil.create('div', 'legend-control-container');

					//add temporal legend div to container
					$(container).append('<div id="temporal-legend">')

					//SVG elements
					var svg = '<svg id="attribute-legend" width="440px" height="90px">';

					svg +=  '<rect class="title-rect" id="symbol" fill="#000000" fill-opacity="0.8" x="0" y="0" height="30" width ="440"/>' +
									'<text class="legend-title" x="35" y="20" fill="white" font-weight="bold" font-size="16">Legend</text>'+

									'<text class="legend-title" x="410" y="80" fill="black" font-weight="bold" font-size="12">> 1%</text>'+
									'<rect class="legend-rect" id="symbol" fill="#3b1e06" fill-opacity="0.9" x="370" y="50" height="15" width ="50"/>' +

									'<text class="legend-title" x="340" y="80" fill="black" font-weight="bold" font-size="12">0.8%</text>'+
									'<rect class="legend-rect" id="symbol" fill="#674222" fill-opacity="0.9" x="310" y="50" height="15" width ="50"/>' +

									'<text class="legend-title" x="280" y="80" fill="black" font-weight="bold" font-size="12">0.6%</text>'+
									'<rect class="legend-rect" id="symbol" fill="#d97904" fill-opacity="0.9" x="250" y="50" height="15" width ="50"/>'+

									'<text class="legend-title" x="220" y="80" fill="black" font-weight="bold" font-size="12">0.4%</text>'+
									'<rect class="legend-rect" id="symbol" fill="#c9a908" fill-opacity="0.9" x="190" y="50" height="15" width ="50"/>'+

									'<text class="legend-title" x="160" y="80" fill="black" font-weight="bold" font-size="12">0.2%</text>'+
									'<rect class="legend-rect" id="symbol" fill="#ffe97d" fill-opacity="0.9" x="130" y="50" height="15" width ="50"/>'+

                  '<text class="legend-title" x="100" y="80" fill="black" font-weight="bold" font-size="12">0.1%</text>'+
                  '<rect class="legend-rect" id="symbol" fill="#faf0be" fill-opacity="0.9" x="70" y="50" height="15" width ="50"/>'+

									'<text class="legend-title" x="15" y="80" fill="black" font-weight="bold" font-size="12">No Data</text>'+
									'<rect class="legend-rect" id="symbol" fill="#ffffff" fill-opacity="0.9" x="10" y="50" height="15" width ="50"/>';


					svg += "</svg>";

					//add attribute legend svg to container
					$(container).append(svg);

					return container;
			};

	// map.addControl(new LegendControl());
	LegendControl.addTo(map);

}

function createSchizLegend(){

	if (LegendControl instanceof L.Control)
		 {map.removeControl(LegendControl);}


		 LegendControl = L.control({
	 			position: 'bottomright'});

			LegendControl.onAdd= function (map) {

            // create the control container with a particular class name
            var container = L.DomUtil.create('div', 'legend-control-container');

            //add temporal legend div to container
            $(container).append('<div id="temporal-legend">')

            //SVG elements
            var svg = '<svg id="attribute-legend" width="575px" height="90px">';

            svg +=  '<rect class="title-rect" id="symbol" fill="#000000" fill-opacity="0.8" x="0" y="0" height="30" width ="575"/>' +
                    '<text class="legend-title" x="35" y="20" fill="white" font-weight="bold" font-size="16">Legend</text>'+

                    '<text class="legend-title" x="545" y="80" fill="black" font-weight="bold" font-size="12">0.4%</text>'+
                    '<rect class="legend-rect" id="symbol" fill="#034e7b" fill-opacity="0.9" x="510" y="50" height="15" width ="50"/>' +

										'<text class="legend-title" x="475" y="80" fill="black" font-weight="bold" font-size="12">0.35%</text>'+
                    '<rect class="legend-rect" id="symbol" fill="#0570b0" fill-opacity="0.9" x="450" y="50" height="15" width ="50"/>' +

                    '<text class="legend-title" x="420" y="80" fill="black" font-weight="bold" font-size="12">0.3%</text>'+
                   	'<rect class="legend-rect" id="symbol" fill="#3690c0" fill-opacity="0.9" x="390" y="50" height="15" width ="50"/>'+

									 	'<text class="legend-title" x="355" y="80" fill="black" font-weight="bold" font-size="12">0.25%</text>'+
										'<rect class="legend-rect" id="symbol" fill="#74a9cf" fill-opacity="0.9" x="330" y="50" height="15" width ="50"/>'+

										'<text class="legend-title" x="300" y="80" fill="black" font-weight="bold" font-size="12">0.2%</text>'+
								 		'<rect class="legend-rect" id="symbol" fill="#a6bddb" fill-opacity="0.9" x="270" y="50" height="15" width ="50"/>'+

								 		'<text class="legend-title" x="235" y="80" fill="black" font-weight="bold" font-size="12">0.15%</text>'+
										'<rect class="legend-rect" id="symbol" fill="#d0d1e6" fill-opacity="0.9" x="210" y="50" height="15" width ="50"/>'+

										'<text class="legend-title" x="185" y="80" fill="black" font-weight="bold" font-size="12">0.1%</text>'+
							 			'<rect class="legend-rect" id="symbol" fill="#ece7f2" fill-opacity="0.9" x="150" y="50" height="15" width ="50"/>'+

							 			'<text class="legend-title" x="115" y="80" fill="black" font-weight="bold" font-size="12">0.05%</text>'+
										'<rect class="legend-rect" id="symbol" fill="#fff7fb" fill-opacity="0.9" x="90" y="50" height="15" width ="50"/>'+

						 				'<text class="legend-title" x="35" y="80" fill="black" font-weight="bold" font-size="12">No Data</text>'+
										'<rect class="legend-rect" id="symbol" fill="#ffffff" fill-opacity="0.9" x="30" y="50" height="15" width ="50"/>';


            svg += "</svg>";

            //add attribute legend svg to container
            $(container).append(svg);

            return container;
        };
    //map.addControl(new LegendControl());
			LegendControl.addTo(map);
};

function createDrugsLegend(){

	if (LegendControl instanceof L.Control)
		 {map.removeControl(LegendControl);}


		 LegendControl = L.control({
	 			position: 'bottomright'});

			LegendControl.onAdd= function (map) {

            // create the control container with a particular class name
            var container = L.DomUtil.create('div', 'legend-control-container');

            //add temporal legend div to container
            $(container).append('<div id="temporal-legend">')

            //SVG elements
            var svg = '<svg id="attribute-legend" width="525px" height="90px">';

            svg +=  '<rect class="title-rect" id="symbol" fill="#000000" fill-opacity="0.8" x="0" y="0" height="30" width ="525"/>' +
                    '<text class="legend-title" x="35" y="20" fill="white" font-weight="bold" font-size="16">Legend</text>'+

                    '<text class="legend-title" x="480" y="80" fill="black" font-weight="bold" font-size="12">7.0%</text>'+
                    '<rect class="legend-rect" id="symbol" fill="#420909" fill-opacity="0.9" x="450" y="50" height="15" width ="50"/>' +

										'<text class="legend-title" x="420" y="80" fill="black" font-weight="bold" font-size="12">6.0%</text>'+
                    '<rect class="legend-rect" id="symbol" fill="#611010" fill-opacity="0.9" x="390" y="50" height="15" width ="50"/>' +

                    '<text class="legend-title" x="360" y="80" fill="black" font-weight="bold" font-size="12">5.0%</text>'+
                   	'<rect class="legend-rect" id="symbol" fill="#730808" fill-opacity="0.9" x="330" y="50" height="15" width ="50"/>'+

									 	'<text class="legend-title" x="300" y="80" fill="black" font-weight="bold" font-size="12">4.0%</text>'+
										'<rect class="legend-rect" id="symbol" fill="#8f3636" fill-opacity="0.9" x="270" y="50" height="15" width ="50"/>'+

										'<text class="legend-title" x="240" y="80" fill="black" font-weight="bold" font-size="12">3.0%</text>'+
								 		'<rect class="legend-rect" id="symbol" fill="#8f3636" fill-opacity="0.9" x="210" y="50" height="15" width ="50"/>'+

								 		'<text class="legend-title" x="180" y="80" fill="black" font-weight="bold" font-size="12">2.0%</text>'+
										'<rect class="legend-rect" id="symbol" fill="#ba5252" fill-opacity="0.9" x="150" y="50" height="15" width ="50"/>'+

										'<text class="legend-title" x="120" y="80" fill="black" font-weight="bold" font-size="12">1.0%</text>'+
							 			'<rect class="legend-rect" id="symbol" fill="#cf8282" fill-opacity="0.9" x="90" y="50" height="15" width ="50"/>'+

						 				'<text class="legend-title" x="35" y="80" fill="black" font-weight="bold" font-size="12">No Data</text>'+
										'<rect class="legend-rect" id="symbol" fill="#ffffff" fill-opacity="0.9" x="30" y="50" height="15" width ="50"/>';


            svg += "</svg>";

            //add attribute legend svg to container
            $(container).append(svg);

            return container;
        };
    //map.addControl(new LegendControl());
			LegendControl.addTo(map);
};
