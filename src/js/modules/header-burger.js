document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.header__mob')) {
        let burger = document.querySelector('.header__mob');
        let burgercontent = document.querySelector('.burger-content');
        let btnClick = document.querySelectorAll('[data-btn]');
        let sublist = document.querySelectorAll('.burger-content__sublist');
        let bgHeader = document.querySelector('.header');
        let grTab = document.querySelectorAll('.burger-content__text');
        let body = document.body;

        burger.addEventListener('click', function (e) {
            burger.classList.toggle('burger--open');
            burgercontent.classList.toggle('burger-content--open');
            bgHeader.classList.toggle('header--burger--bg');
            body.classList.toggle('stop-scroll');
        });

        function activeTab(index) {
            sublist.forEach(function (el) {
                el.classList.remove('burger-content--active');
            });
            sublist[index].classList.add('burger-content--active');
        }

        btnClick.forEach(function (item, index) {
            item.addEventListener('click', function (e) {
                activeTab(index);
                grTab.forEach(function (i, ind) {
                    i.classList.remove('burger--tab--gr');
                });
                item.classList.add('burger--tab--gr');
            });  
        });
    };
});