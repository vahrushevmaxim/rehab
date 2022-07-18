document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.heading-about__points-wrapper')) {
        let points = document.querySelectorAll('.heading-about__point');
        let text = document.querySelectorAll('.heading-about__pointer-wrapper');
        function activeText() {
            text.forEach(function (content) {
                content[3].classList.add('shoy');
            });
        }
        activeText();
        
        points.forEach(function (point) {
            point.addEventListener("click", function (e) {
                e.preventDefault();

                // console.log()


            });

        });



    };
});