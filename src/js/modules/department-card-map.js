document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.department-map')) {
        let myMap,
            bigMap = false;
        function init() {
            myMap = new ymaps.Map('map', {
                center: [55.75101703516295,37.63398055035401],
                zoom: 14
            }, {
                searchControlProvider: 'yandex#search'
            })

            let placemark = new ymaps.Placemark([55.75101703516295,37.63398055035401], {}, {

            });
            myMap.geoObjects.add(placemark);
            myMap.geoObjects.add(new ymaps.Placemark([55.75101703516295,37.63398055035401], {
                iconCaption: 'Rehab Family'
            }));
        }
        ymaps.ready(init);

        let elMap = document.querySelector('.department-map__map');
        function toggle() {
            bigMap = !bigMap;

            if (bigMap) {
                elMap.classList.remove('department-map__map');
            } else {
                elMap.classList.add('department-map__map');
            }

            myMap.container.fitToViewport();
        }
    };
});