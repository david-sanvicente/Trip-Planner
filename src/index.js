console.log('Hello from table 8!');

const mapboxgl = require("mapbox-gl");
const buildMarker = require('../src/marker.js');

mapboxgl.accessToken = "pk.eyJ1IjoiZGF2aWQtc2FuIiwiYSI6ImNrMTZscTdlODAwa3UzY3FwODRkeHNpcGIifQ.6yslc0v2AbZBQrqwDT0iIg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago

console.log(buildMarker);
const marker = buildMarker('restaurant', [-74.009151, 40.705086]);
marker.addTo(map);