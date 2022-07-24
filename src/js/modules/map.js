document.addEventListener('DOMContentLoaded', function () {
    let myMap,
    bigMap = false;
    function init() {
        myMap = new ymaps.Map('map-1', {
            center: [56.136649716098695, 37.57158493767343],
            zoom: 16
        })
        let myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [56.13661638949428,37.571456303448]
            },
            properties: {
                iconContent: 'Реабилитационный центр',
            }
        })  
        myMap.container.fitToViewport();  
    }
    ymaps.ready(init)
    
    
    let myMap2;
    function init2() {
        myMap2 = new ymaps.Map('map-2', {
            center: [55.753377068970586,37.64053350000001],
            zoom: 16
        })
        let myGeoObject2 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.753377068970586,37.64053350000001]
            },
            properties: {
                iconContent: 'Амбулаторный центр',
            }
        })
    }
    ymaps.ready(init2)

    let myMap3;
    function init3() {
        myMap3 = new ymaps.Map('map-3', {
            center: [55.777288050559015,37.613395189609115],
            zoom: 11
        })
    }
    ymaps.ready(init3)

})

