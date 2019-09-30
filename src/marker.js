const mapboxgl = require("mapbox-gl");

module.exports = function (type, coordinates) {
    let url = '';

    if(type === 'activity'){
        url = 'http://i.imgur.com/WbMOfMl.png';
    }
    if(type === 'hotel'){
        url = 'http://i.imgur.com/D9574Cu.png';
    }
    if(type === 'restaurant'){
        url = 'http://i.imgur.com/cqR6pUI.png';
    }

    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${url})`;
    console.log(markerDomEl, type)
    return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
}