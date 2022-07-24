document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.heading-about__points-wrapper')) {
        let points = document.querySelectorAll('.heading-about__point-link');
        let text = document.querySelectorAll('.heading-about__pointer-wrapper');

        function activeText(index) {
            text.forEach(function (el) {
                el.classList.remove('show');
            });
            text[index].classList.add('show');
        }
        activeText(0);

        points.forEach(function (point, index) {
            point.addEventListener("click", function (e) {
                if (e.target.classList.contains('heading-about__point-link')) {

                    points.forEach(function (item) {
                        item.classList.remove('active');
                    });
                    point.classList.add('active');
                    activeText(index);
                }
            });
        });

        let heading = document.querySelectorAll('[data-anchor]');
        let start = 4;
        window.addEventListener('scroll', name);
        function activeTe(index) {
            text.forEach(function (el) {
                el.classList.remove('show');
            });
            text[index].classList.add('show');
        }
        activeTe(0);
        function name(params) {
            heading.forEach(function (el, i) {
                let id = el.id;
                let headingItem = el.offsetHeight;
                let coords = el.getBoundingClientRect();
                let position = window.pageYOffset;
                let top = coords.top + position;
                let point = window.innerHeight - headingItem / start;
                console.log();
                if ((position > top - point) && position < (top + headingItem)) {
                    points.forEach(function (point, index) {
                        points.forEach(function (item) {
                            item.classList.remove('active');
                        });
                        point.classList.add('active');
                        activeTe(index)
                        
                    });
                    activeTe(0);
                }
            });
        }
    };
});