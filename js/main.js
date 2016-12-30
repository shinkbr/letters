var svg, svgGroup, w, h, render, text;

w = window.outerWidth;
h = window.outerHeight;

svg = d3.select("#svg-canvas");
svgGroup = svg.append("g");

text = svgGroup.append("text").attr({
  "x": w / 2,
  "y": h / 2,
  "text-anchor": "middle"
}).text(d3.select("#text").property("value"));

d3.select("#text").on("input", function(){
  text.text(d3.select("#text").property("value"));
});

var zoom = d3.behavior.zoom().on("zoom", function() {
  svgGroup.attr("transform", "translate(" + d3.event.translate + ")" +
                "scale(" + d3.event.scale + ")");
});
svg.call(zoom);
