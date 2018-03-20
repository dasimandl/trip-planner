const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker.js');

mapboxgl.accessToken = "pk.eyJ1IjoiZHNpbWFuZGwiLCJhIjoiY2plenQ5N2d3MGVkbTMyb2RsYWpjNThibiJ9.p_HmTEFFaogMyqdThhy-kg";


const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const coordinates = [-87.6354, 41.8885]

buildMarker('Activity', coordinates).addTo(map);

