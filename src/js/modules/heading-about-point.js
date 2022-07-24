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

        heading.forEach(function (el, index) {
            let id = el.id;
            let headingItem = el.clientHeight;
            let coords = el.getBoundingClientRect();
            let top = coords.top + window.pageYOffset;


            window.addEventListener('scroll', function (e) {

                // console.log();

            });
            function activeContent(index) {
                text.forEach(function (el) {
                    el.classList.remove('show');
                });
                text[index].classList.add('show');
            }
            activeContent(0);

        });
    };
});