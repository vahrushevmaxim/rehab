document.addEventListener('DOMContentLoaded', function () {
    let items = document.querySelectorAll(".department-card__element");
    let paragraphs = document.querySelectorAll(".department-card__description");
    let container = document.querySelector(".container");
    const mediaQuery = window.matchMedia('(max-width: 576px)');

    items.forEach(function (item) {
        item.addEventListener("click", (e) => {
            const i = e.currentTarget;
            const c = i.querySelector(".department-card__description");
            c.classList.toggle("active");
            i.classList.toggle("shoy");

            if (mediaQuery.matches) {
                i.classList.toggle("shoy");
            }
        });               
    }); 
});