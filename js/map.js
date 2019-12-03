var LegendControl;


var depressionLayer = null
var anxietyLayer = null
var bipolarLayer = null
var eatingLayer = null
var schizLayer = null
var substanceLayer = null

//sets map
var map = L.map('map').setView([24, -5], 2.3);

L.esri.basemapLayer('Gray').addTo(map);

//Colors for each illness
function getColorDepression(d) {
	return d > 6.0 ? '#081d58' :
	       d > 5.5  ? '#172976' :
	       d > 5.0  ? '#253494' :
	       d > 4.5  ? '#225ea8' :
	       d > 4.0   ? '#1d91c0' :
	       d > 3.5   ? '#41b6c4' :
	       d > 3.0   ? '#7fcdbb' :
				 d > 2.5   ? '#c7e9b4' :
				 d > 2.0   ? '#edf8b1' :
	                  '#ffffff';
}

function styleDepression(feature) {
	return {
		fillColor: getColorDepression(feature.properties.Depression),
		weight: 2,
		opacity: 1,
		color: 'black',
		fillOpacity: 0.9
	};
}

function getColorAnxiety(d) {
	return d > 6.0 ? '#006837' :
	       d > 5.0  ? '#31a354' :
	       d > 4.0  ? '#78c679' :
	       d > 3.0  ? '#addd8e' :
	       d > 2.0   ? '#d9f0a3' :
	       d > 1.0   ? '#ffffcc' :
	                  '#ffffff';
}

function styleAnxiety(feature) {
	return {
		fillColor: getColorAnxiety(feature.properties.Anxiety),
		weight: 2,
		opacity: 1,
		color: 'black',
		fillOpacity: 0.7
	};
}

function getColorBipolar(d) {
	return d > 1.4 ? '#3f007d' :
	       d > 1.2  ? '#54278f' :
	       d > 1.0  ? '#6a51a3' :
	       d > 0.9  ? '#807dba' :
	       d > 0.8   ? '#9e9ac8' :
	       d > 0.7   ? '#bcbddc' :
	       d > 0.6   ? '#dadaeb' :
				 d > 0.5   ? '#efedf5' :
				 d > 0.4   ? '#fcfbfd' :
	                  '#ffffff';
}

function styleBipolar(feature) {
	return {
		fillColor: getColorBipolar(feature.properties.Bipolar),
		weight: 2,
		opacity: 1,
		color: 'black',
		fillOpacity: 0.9
	};
}

function getColorEating(d) {
	return d > 0.8  ? '#3b1e06' :
	       d > 0.6  ? '#674222' :
	       d > 0.4  ? '#d97904' :
	       d > 0.2   ? '#c9a908' :
	       d > 0.1   ? '#ffe97d' :
				 d > 0.0   ? '#faf0be' :
	                  '#ffffff';
									// d > 1.0 ? '#3b1e06' :
}

function styleEating(feature) {
	return {
		fillColor: getColorEating(feature.properties.Eating),
		weight: 2,
		opacity: 1,
		color: 'black',
		fillOpacity: 0.9
	};
}

function getColorSchiz(d) {
	return d > 0.35  ? '#034e7b' :
	       d > 0.3  ? '#0570b0' :
	       d > 0.25  ? '#3690c0' :
	       d > 0.2  ? '#74a9cf' :
	       d > 0.15   ? '#a6bddb' :
	       d > 0.1   ? '#d0d1e6' :
				 d > 0.05   ? '#ece7f2' :
				 d > 0.0    ? '##fff7fb':
	                  '#ffffff';

										// d > 0.4 ? '#081d58' :
}

function styleSchiz(feature) {
	return {
		fillColor: getColorSchiz(feature.properties.Schizophre),
		weight: 2,
		opacity: 1,
		color: 'black',
		fillOpacity: 0.9
	};
}

function getColorSubstance(d) {
	return d > 6.0 ? '#420909' :
	       d > 5.0  ? '#611010' :
	       d > 4.0  ? '#730808' :
	       d > 3.0  ? '#8f3636' :
	       d > 2.0   ? '#8f3636' :
				 d > 1.0   ? '#ba5252':
				 d > 0.0  ?  '#cf8282':
	                  '#ffffff';
}

function styleSubstance(feature) {
	return {
		fillColor: getColorSubstance(feature.properties.Drugs),
		weight: 2,
		opacity: 1,
		color: 'black',
		fillOpacity: 0.9
	};
}

//Highlights map

function highlightFeature(e) {
	var layer = e.target;

	layer.setStyle({
		weight: 5,
		color: '#ffeb38',
		dashArray: '',
		fillOpacity: 0.7
	});

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	}
}

function resetHighlightDepression(e) {
	depressionLayer.resetStyle(e.target);
}

function resetHighlightAnxiety(e) {
	anxietyLayer.resetStyle(e.target);
}

function resetHighlightBipolar(e) {
	bipolarLayer.resetStyle(e.target);
}

function resetHighlightEating(e) {
	eatingLayer.resetStyle(e.target);
}

function resetHighlightSchiz(e) {
	schizLayer.resetStyle(e.target);
}

function resetHighlightSubstance(e) {
	substanceLayer.resetStyle(e.target);
}
// Updates Map


function updateMap(){
	var mentalIllness = document.getElementById('select').value;

	if(map.hasLayer(depressionLayer)){
		map.removeLayer(depressionLayer);
	};

	if(mentalIllness === 'depression') {
		createDepressionLegend()
		$.getJSON("data/Mental_Illness.geoJson",function(data){
		 depressionLayer=L.geoJson(data,{
			 style:styleDepression,
								onEachFeature: function (feature, layer) {

									if (feature.properties.Depression == 0) {
										layer.bindPopup('<p><b><font size=4>' + feature.properties.COUNTRY + '</font></b><br/>'  + '<font size=3>' + 'No Data'+ '</font><br/>' +
																		'</p>'	);
									}else{
										layer.bindPopup('<p><b><font size=4>' + feature.properties.COUNTRY + '</font></b><br/>'  + '<font size=3>' +(feature.properties.Depression).toFixed(2) + '%'+ '</font><br/>' +
																		'</p>'	);}
										layer.on('mouseover', function (e) {
											this.openPopup();
										});
										layer.on('mouseout', function (e) {
											this.closePopup()
										});
										layer.on({
											mouseover: highlightFeature,
											mouseout: resetHighlightDepression
										});
								}
							}).addTo(map)
		});
	}

	if(map.hasLayer(anxietyLayer)){
		map.removeLayer(anxietyLayer)
	};


	if(mentalIllness === 'anxiety_disorders') {
		createAnxietyLegend()
		$.getJSON("data/Mental_Illness.geoJson",function(data){
		 anxietyLayer=L.geoJson(data,{
			 style:styleAnxiety,
								onEachFeature: function (feature, layer) {
									if (feature.properties.Depression == 0) {
										layer.bindPopup('<p><b><font size=4>' + feature.properties.COUNTRY + '</font></b><br/>'  + '<font size=3>' + 'No Data'+ '</font><br/>' +
																		'</p>'	);
									}else{
										layer.bindPopup('<p><b><font size=4>' + feature.properties.COUNTRY + '</font></b><br/>'  + '<font size=3>' +(feature.properties.Anxiety).toFixed(2) + '%'+ '</font><br/>' +
																		'</p>'	);}
										layer.on('mouseover', function (e) {
											this.openPopup();
										});
										layer.on('mouseout', function (e) {
											this.closePopup()
										});
										layer.on({
											mouseover: highlightFeature,
											mouseout: resetHighlightAnxiety
										});
								}
							}).addTo(map)
		});
	}

	if(map.hasLayer(bipolarLayer)){
		map.removeLayer(bipolarLayer);
	};

	if(mentalIllness === 'bipolar_disorder') {
	createBipolarLegend()
		$.getJSON("data/Mental_Illness.geoJson",function(data){
		 bipolarLayer=L.geoJson(data,{
			 style:styleBipolar,
								onEachFeature: function (feature, layer) {
									if (feature.properties.Depression == 0) {
										layer.bindPopup('<p><b><font size=4>' + feature.properties.COUNTRY + '</font></b><br/>'  + '<font size=3>' + 'No Data'+ '</font><br/>' +
																		'</p>'	);
									}else{
										layer.bindPopup('<p><b><font size=4>' + feature.properties.COUNTRY + '</font></b><br/>'  + '<font size=3>' +(feature.properties.Bipolar).toFixed(2) + '%'+ '</font><br/>' +
																		'</p>'	);}
										layer.on('mouseover', function (e) {
											this.openPopup();
										});
										layer.on('mouseout', function (e) {
											this.closePopup()
										});
										layer.on({
											mouseover: highlightFeature,
											mouseout: resetHighlightBipolar
										});

								}
							}).addTo(map)
		});
	}

	if(map.hasLayer(eatingLayer)){
		map.removeLayer(eatingLayer);
	};

	if(mentalIllness === 'eating_disorders') {
		createEatingLegend()
		$.getJSON("data/Mental_Illness.geoJson",function(data){
		 eatingLayer=L.geoJson(data,{
			 style:styleEating,
								onEachFeature: function (feature, layer) {
									if (feature.properties.Depression == 0) {
										layer.bindPopup('<p><b><font size=4>' + feature.properties.COUNTRY + '</font></b><br/>'  + '<font size=3>' + 'No Data'+ '</font><br/>' +
																		'</p>'	);
									}else{
										layer.bindPopup('<p><b><font size=4>' + feature.properties.COUNTRY + '</font></b><br/>'  + '<font size=3>' +(feature.properties.Eating).toFixed(2) + '%'+ '</font><br/>' +
																		'</p>'	);}

										layer.on('mouseover', function (e) {
											this.openPopup();
										});
										layer.on('mouseout', function (e) {
											this.closePopup()
										});
										layer.on({
											mouseover: highlightFeature,
											mouseout: resetHighlightEating
										});
								}
							}).addTo(map)
		});
	}

	if(map.hasLayer(schizLayer)){
		map.removeLayer(schizLayer);
	};

	if(mentalIllness === 'schizophrenia') {
		createSchizLegend()
		$.getJSON("data/Mental_Illness.geoJson",function(data){
		 schizLayer=L.geoJson(data,{
			 style:styleSchiz,
								onEachFeature: function (feature, layer) {
									if (feature.properties.Depression == 0) {
										layer.bindPopup('<p><b><font size=4>' + feature.properties.COUNTRY + '</font></b><br/>'  + '<font size=3>' + 'No Data'+ '</font><br/>' +
																		'</p>'	);
									}else{
										layer.bindPopup('<p><b><font size=4>' + feature.properties.COUNTRY + '</font></b><br/>'  + '<font size=3>' +(feature.properties.Schizophre).toFixed(2) + '%'+ '</font><br/>' +
																		'</p>'	);}
										layer.on('mouseover', function (e) {
											this.openPopup();
										});
										layer.on('mouseout', function (e) {
											this.closePopup()
										});
										layer.on({
											mouseover: highlightFeature,
											mouseout: resetHighlightSchiz
										});
								}
							}).addTo(map)
		});
	}

	if(map.hasLayer(substanceLayer)){
		map.removeLayer(substanceLayer);
	};

	if(mentalIllness === 'substance_disorders') {
		createDrugsLegend()
		$.getJSON("data/Mental_Illness.geoJson",function(data){
		 substanceLayer=L.geoJson(data,{
			 style:styleSubstance,
								onEachFeature: function (feature, layer) {
									if (feature.properties.Depression == 0) {
										layer.bindPopup('<p><b><font size=4>' + feature.properties.COUNTRY + '</font></b><br/>'  + '<font size=3>' + 'No Data'+ '</font><br/>' +
																		'</p>'	);
									}else{
										layer.bindPopup('<p><b><font size=4>' + feature.properties.COUNTRY + '</font></b><br/>'  + '<font size=3>' +(feature.properties.Drugs).toFixed(2) + '%'+ '</font><br/>' +
																		'</p>'	);}
										layer.on('mouseover', function (e) {
											this.openPopup();
										});
										layer.on('mouseout', function (e) {
											this.closePopup()
										});
										layer.on({
											mouseover: highlightFeature,
											mouseout: resetHighlightSubstance
										});
								}
							}).addTo(map)
		});
	}

}


MapTitleControl = L.control({
	 position: 'topleft'});

 MapTitleControl.onAdd= function (map) {

			 // create the control container with a particular class name
			 var container = L.DomUtil.create('div', 'map-title-container');

			 //add temporal legend div to container
			 $(container).append('<div id="temporal-title">')

			 //SVG elements
			 var svg = '<svg id="attribute-title" width="480px" height="40px">';

			 svg +=  '<rect class="title-rect" id="symbol" fill="#000000" fill-opacity="0.7" x="0" y="0" height="40" width ="480"/>' +
							 '<text class="map-title" x="35" y="25" fill="white" font-weight="bold" font-size="16">Share of Population with Mental Health Disorder, 2017</text>';


			 svg += "</svg>";

			 //add attribute legend svg to container
			 $(container).append(svg);

			 return container;
	 };
//map.addControl(new LegendControl());
 MapTitleControl.addTo(map);
