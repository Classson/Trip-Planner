const mapboxgl = require('mapbox-gl')

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const markerFunction = (type, coords) =>{
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "75px";
    markerDomEl.style.height = "75px";
    markerDomEl.style.backgroundRepeat = 'no-repeat';
    if(type === 'hotel'){
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)"
    }
    if(type === 'activity'){
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
    }
    if(type === 'resturant'){
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)"
    }

    return new mapboxgl.Marker(markerDomEl).setLngLat(coords);

}

module.exports = markerFunction
