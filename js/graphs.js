// Slide 1


var toCSV = [{
"name": "Major depressive disorder",
"code": "Major depressive disorder",
"parent": "SEASONAL_POP",
"value": "19.9",
"label": "Major depressive disorder",
"children": []
}, {
"name": "Anxiety disorder",
"code": "Anxiety disorder",
"parent": "SEASONAL_POP",
"value": "2.7",
"label": "Anxiety disorder",
"children": []
}, {
"name": "Schizophrenia",
"code": "Schizophrenia",
"parent": "SEASONAL_POP",
"value": "12.6",
"label": "Schizophrenia",
"children": []
}, {
"name": "Bipolar disorder",
"code": "Bipolar disorder",
"parent": "SEASONAL_POP",
"value": "5.7",
"label": "Bipolar disorder",
"children": []
}, {
"name": "Anorexia nervosa",
"code": "Anorexia nervosa",
"parent": "SEASONAL_POP",
"value": "7.6",
"label": "Anorexia nervosa",
"children": []
}, {
"name": "Alcohol dependence",
"code": "Alcohol dependence",
"parent": "SEASONAL_POP",
"value": "9.8",
"label": "Alcohol dependence",
"children": []
}, {
"name": "Opioid dependence",
"code": "Opioid dependence",
"parent": "SEASONAL_POP",
"value": "6.9",
"label": "Opioid dependence",
"children": []
}, {
"name": "Psychostimultant dependence",
"code": "Psychostimultant dependence",
"parent": "SEASONAL_POP",
"value": "8.2",
"label": "Psychostimultant dependence",
"children": []
}];
var margin = {
    top: 30,
    right: 20,
    bottom: 20,
    left: 20
  },
  width = 750,
  height = 450;
var radius = Math.min(width, height) / 4;
var donutWidth = 75;
var color = d3.scaleOrdinal(d3.schemeCategory20);
var count = 0;

var svg = d3.select("#charts").append("svg")
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', 'translate(' + (width / 2) +
    ',' + (height / 2) + ')');


var arc = d3.arc()
  .innerRadius(0)
  .outerRadius(150);

var arcOver = d3.arc()
  .innerRadius(0)
  .outerRadius(200 + 10);

var pie = d3.pie()
  .sort(null)
  .value(function(d) {
    return d.value;
  });
var pcnt = d3.sum(toCSV, function(d) {
  return d.value;
});


// avoiding overlap labels
var getAngle = function(d) {
  return (180 / Math.PI * (d.startAngle + d.endAngle) / 2 - 90);
};
var g = svg.selectAll(".arc")
  .data(pie(toCSV))
  .enter().append("g")
  .attr('class', "arc")
  .on("mouseover", function() {
    tooltip1.style("display", null);
  })
  .on("mousemove", function(d) {
    tooltip1.transition().duration(200)
      .style("opacity", 0.9);
    tooltip1.select("div").html(d.data.name + " <br><strong>" + d.data.value + "%"+"</strong>")
      .style("position", "absolute")
      .style("text-align", "center")
      .style("width", "120px")
      .style("height", "45px")
      .style("padding", "2px")
      .style("font", "12px sans-serif")
      .style("background", "lightsteelblue")
      .style("border", "0px")
      .style("border-radius", "8px")
      .style("left", (d3.event.pageX + 15) + "px")
      .style("top", (d3.event.pageY - 28) + "px");
    d3.select(this.firstChild).transition()
      .attr("d", arcOver);

  })
  .on("mouseout", function() {
    tooltip1.style("display", "none")
    d3.select(this.firstChild).transition()
      .attr("d", arc)
      .attr("stroke", "none");
  })

var tooltip1 = d3.select("body").append("div")
  .attr("class", "tooltip1")
  .style("opacity", 0.5);

tooltip1.append("rect")
  .attr("width", 30)
  .attr("height", 20)
  .attr("fill", "#ffffff")
  .style("opacity", 0.5);

tooltip1.append("div")
  .attr("x", 15)
  .attr("dy", "1.2em")
  .style("text-anchor", "middle")
  .attr("font-size", "1.5em")
  .attr("font-weight", "bold");



g.append("path")
  .attr("d", arc)
  .style("fill", function(d) {
    return color(d.data.name);
  });

count = 0;
//Legend for charts
var legend = svg.selectAll(".legend")
  .data(toCSV).enter()
  .append("g").attr("class", "legend")
  .attr("legend-id", function(d) {
    return count++;
  })
  .attr("transform", function(d, i) {
    return "translate(-40," + (-90 + i * 20) + ")";
  });


legend.append("rect")
  .attr("x", width / 1.9)
  .attr("word-wrap", "break-word")
  .attr("width", 18).attr("height", 18)
  .style("fill", function(d) {
    return color(d.name);
  });
legend.append("text").attr("x", width / 2)
  .attr("y", 9).attr("dy", ".35em")
  .style("fill", "white")
  .style("text-anchor", "end")
  .text(function(d) {
    return d.label;
  });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Slide2
var fileName = "data/depression-by-level-of-education-employment.csv";
var nutritionFields = ["All levels (active) (%)", "All levels (employed) (%)", "All levels (total) (%)", "Below upper secondary (active) (%)", "Below upper secondary (employed) (%)",
                       "Below upper secondary (total) (%)", "Tertiary (active) (%)", "Tertiary (employed) (%)", "Tertiary (total) (%)",
                       "Upper secondary & post-secondary non-tertiary (active) (%)", "Upper secondary & post-secondary non-tertiary (employed) (%)",
                     "Upper secondary & post-secondary non-tertiary (total) (%)"];

d3.csv(fileName, function(error, data) {
    var cerealMap = {};
    data.forEach(function(d) {
        var cereal = d.Entity;
        cerealMap[cereal] = [];
        nutritionFields.forEach(function(field) {
            cerealMap[cereal].push( +d[field] );
        });
    });
    makeVis(cerealMap);
});

var makeVis = function(cerealMap) {
    // Define dimensions of vis
    var margin = { top: 30, right: 50, bottom: 400, left: 100 },
        width  = 700 - margin.left - margin.right,
        height = 800 - margin.top  - margin.bottom;

    // var tooltip3 = d3.select("body").append("div").attr("class", "toolTip3");

    var xScale = d3.scaleBand()
        .domain(nutritionFields)
        .rangeRound([0, width])
        .padding(0.1);

    // Make y scale, the domain will be defined on bar update
    var yScale = d3.scaleLinear()
        .range([height, 0]);


    // Create canvas
    var canvas = d3.select("#economic")
      .append("svg")
        .attr("width",  width  + margin.left + margin.right)
        .attr("height", height + margin.top  + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


      var xAxis = d3.axisBottom()
        .scale(xScale);

    canvas.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("fill", "#ffffff")
        .attr("transform", "rotate(-65)");



    var yAxis = d3.axisLeft()
        .tickFormat(d => d + "%")
        .scale(yScale);


    var yAxisHandleForUpdate = canvas.append("g")
        .attr("class", "y-axis")
        .call(yAxis);

    yAxisHandleForUpdate.append("text")
        .attr("transform", "rotate(-90)")
        .attr("fill","white")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Value");

    var updateBars = function(data) {
        yScale.domain( d3.extent(data) );
        yAxisHandleForUpdate.call(yAxis);

        var bars = canvas.selectAll(".bar").data(data);


        // Add bars for new data
        bars.enter()
          .append("rect")
            .attr("class", "bar")
            .attr("x", function(d,i) { return xScale( nutritionFields[i] ); })
            .attr('width', xScale.bandwidth())
            .attr("y", function(d,i) { return yScale(d); })
            .attr("height", function(d,i) { return height - yScale(d); });
            // .on("mousemove", function(d){
            //     tooltip3
            //       .style("left", d3.event.pageX - 50 + "px")
            //       .style("top", d3.event.pageY - 70 + "px")
            //       .style("display", "inline-block")
            //       .html((+d['Upper secondary & post-secondary non-tertiary (total) (%)']) + '%');
            // })
            // .on("mouseout", function(d){ tooltip3.style("display", "none");});

        // Update old ones, already have x / width from before
        bars
            .transition().duration(250)
            .attr("y", function(d,i) { return yScale(d); })
            .attr("height", function(d,i) { return height - yScale(d); });

        // Remove old ones
        bars.exit().remove();
    };

    // Handler for dropdown value change
    var dropdownChange = function() {
        var newCereal = d3.select(this).property('value'),
            newData   = cerealMap[newCereal];

        updateBars(newData);
    };

    // Get names of cereals, for dropdown
    var cereals = Object.keys(cerealMap).sort();

    var dropdown = d3.select("#economic")
        .insert("select", "svg")
        .attr("class", "select-economic")
        .on("change", dropdownChange);

    dropdown.selectAll("option")
        .data(cereals)
      .enter().append("option")
        .attr("value", function (d) { return d; })
        .text(function (d) {
            return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
        });

    var initialData = cerealMap[ cereals[0] ];
    updateBars(initialData);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////slide 3

var margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 250
  };
var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

var svg = d3.select("#substance-graph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var tooltip2 = d3.select("body").append("div").attr("class", "toolTip2");

var x = d3.scaleLinear()
      .range([0, width]);

var y = d3.scaleBand()
    .range([height, 0]);

var xAxis = d3.axisBottom(x)
    .tickFormat(d => d + "%");
    // .ticks(10, "%");

var yAxis = d3.axisLeft(y);

d3.csv("data/mental-health-as-risk-for-drug-dependency.csv", type, function(error, data) {
  if (error) throw error;

  x.domain([0, d3.max(data, function(d) { return d.Value; })]);

  y.domain(data.map(function(d) { return d.Entity; }))
    .paddingInner(0.1)
    .paddingOuter(0.5);


  svg.append("g")
      .attr("class", "x-axis2")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "translate(" + width + ",0)")
      .attr("y", -5)
      .style("text-anchor", "end");
      // .text("Percentage");

  svg.append("g")
      .attr("class", "y-axis2")
      .call(yAxis);

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar2")
      .attr("x", 0)
      .attr("height", y.bandwidth())
      .attr("y", function(d) { return y(d.Entity); })
      .attr("width", function(d) { return x(d.Value); })
      .on("mousemove", function(d){
    tooltip2
      .style("left", d3.event.pageX - 50 + "px")
      .style("top", d3.event.pageY - 70 + "px")
      .style("display", "inline-block")
      .html((d.Entity) + " " +  (d.Value) + "%");
})
.on("mouseout", function(d){ tooltip2.style("display", "none");});

});

function type(d) {
  d.Value = +d.Value;
  return d;
}
