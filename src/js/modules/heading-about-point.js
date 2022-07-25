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

        let sections = document.querySelectorAll('[data-anchor]');
        let start = 4;

        window.addEventListener('scroll', scrollSections);
        function scrollSections() {
            sections.forEach(function (el, i) {
                let item = el.offsetHeight;
                let coords = el.getBoundingClientRect();
                let position = window.pageYOffset;
                let top = coords.top + position;
                let point = window.innerHeight - item / start;
                if ((position > top - point) && position < (top + item)) {
                    txt(i);
                    pointsActive(i)
                }
            });
            function txt(i) {
                text.forEach(function (el) {
                    el.classList.remove('show');
                });
                text[i].classList.add('show');
            }
            function pointsActive(i) {
                points.forEach(function (el) {
                    points.forEach(function (item) {
                        item.classList.remove('active');
                    });
                    points[i].classList.add('active');
                });
            }
        }
    };
});