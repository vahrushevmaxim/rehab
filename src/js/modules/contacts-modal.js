document.addEventListener('DOMContentLoaded', function () {
    if (typeof button !== 'undefined') {
        let close = document.querySelector(".contacts__modal-close");
        let modalWindow = document.querySelector(".contacts__modal-window");
        let button = document.querySelector(".contacts__btn");
        let body = document.querySelector("body");

        button.addEventListener("click", function () {
            modalWindow.classList.toggle("active");
            body.style.overflowY = 'hidden';
        });

        close.addEventListener("click", function () {
            modalWindow.classList.remove("active");
            body.style.overflowY = 'visible';
        });
    }
});