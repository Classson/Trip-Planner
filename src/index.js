const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoibGluZGFzYXJhZ3VybyIsImEiOiJjanI4OTBreWMwNDFhNDNsaDZ2OGJ0aGE3In0.ybegQ1ql9KBynbTJITDmQg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "500px";
markerDomEl.style.height = "500px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

