const mapboxgl = require("mapbox-gl");

function buildMarker (type, coordinates) {
  const typeObj = {
    Activity: 'http://i.imgur.com/WbMOfMl.png',
    Hotel: 'http://i.imgur.com/D9574Cu.png',
    Restaurant: 'http://i.imgur.com/cqR6pUI.png',
  }
  const DOMelement = document.createElement('div')
  DOMelement.style.width = '32px';
  DOMelement.style.height = '39px';
  DOMelement.style.backgroundImage = `url(${typeObj[type]})`;

  return new mapboxgl.Marker(DOMelement).setLngLat(coordinates);
}

module.exports = buildMarker;

