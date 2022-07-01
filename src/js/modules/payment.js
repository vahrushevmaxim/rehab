document.addEventListener('DOMContentLoaded', function () {
    let links = document.querySelectorAll(".payment__list-chapter");

    links.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            links.forEach(function (link) {
                link.classList.remove("active-bg");
            });
            link.classList.toggle("active-bg");
        });
    });
});