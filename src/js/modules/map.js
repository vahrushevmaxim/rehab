document.addEventListener('DOMContentLoaded', function () {

    if (document.querySelector('.contacts__section-1')) {
        let myMap,
            bigMap = false;
        function init() {
            myMap = new ymaps.Map('map-1', {
                center: [56.136649716098695, 37.57158493767343],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'
            });

            let placemark = new ymaps.Placemark([56.13661638949428, 37.571456303448], {}, {

            });
            myMap.geoObjects.add(placemark);
            myMap.geoObjects.add(new ymaps.Placemark([56.13661638949428, 37.571456303448], {
                iconCaption: 'РЕАБИЛИТАЦИОННЫЙ ЦЕНТР'
            }));
        }
        ymaps.ready(init);

        let elMap = document.querySelector('.contacts__righ');
        function toggle() {
            bigMap = !bigMap;

            if (bigMap) {
                elMap.classList.remove('contacts__righ');
            } else {
                elMap.classList.add('contacts__righ');
            }

            myMap.container.fitToViewport();
        }
    }

    if (document.querySelector('.contacts__section-2')) {
        let myMap2;
        function init2() {
            myMap2 = new ymaps.Map('map-2', {
                center: [55.753377068970586, 37.64053350000001],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'
            })

            let placemark2 = new ymaps.Placemark([56.13661638949428, 37.571456303448], {}, {

            });
            myMap2.geoObjects.add(placemark2);
            myMap2.geoObjects.add(new ymaps.Placemark([55.753377068970586, 37.64053350000001], {
                iconCaption: 'АМБУЛАТОРНЫЙ ЦЕНТР'
            }));
        }
        ymaps.ready(init2);

        let elMap2 = document.querySelector('.contacts__left-2');
        function toggle() {
            bigMap = !bigMap;

            if (bigMap) {
                elMap2.classList.remove('contacts__left-2');
            } else {
                elMap2.classList.add('contacts__left-2');
            }
            myMap2.container.fitToViewport();
        }
    }

    if (document.querySelector('.contacts__modal-window')) {
        let myMap3;
        function init3() {
            myMap3 = new ymaps.Map('map-3', {
                center: [55.777288050559015, 37.613395189609115],
                zoom: 11
            }, {
                searchControlProvider: 'yandex#search'

            });
        }
        ymaps.ready(init3);

        let elMap3 = document.querySelector('.contacts__modal-map');
        function toggle() {
            bigMap = !bigMap;

            if (bigMap) {
                elMap3.classList.remove('contacts__modal-map');
            } else {
                elMap3.classList.add('contacts__modal-map');
            }
            myMap3.container.fitToViewport();
        }
    }
})

