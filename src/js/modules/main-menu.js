/* Главное меню*/
document.addEventListener('DOMContentLoaded', function () {
    let arMainItem = document.querySelectorAll('.nav__item');
    if (arMainItem.length > 0) {
        arMainItem.forEach(function (item) {
            let secItemId = item.getAttribute('data-nav');
            let secItem = document.getElementById(secItemId)
            if (secItem) {
                start(item);
            }
            function start(item) {
                item.addEventListener('mouseenter', addClass);
                item.addEventListener('mouseleave', sec);
            }
            function addClass() {
                item.classList.add('nav__hover');
                secItem.classList.add('nav__active');
            }
            function rmClass() {
                item.classList.remove('nav__hover');
                secItem.classList.remove('nav__active');
            }
            function sec() {
                document.addEventListener('mousemove', move)
            }
            function move() {
                if(event.target == secItem){
                    document.removeEventListener('mousemove', move);
                    leaveSec()
                }else{
                    rmClass();
                    document.removeEventListener('mousemove', move);
                }
            }
            function leaveSec () {
                secItem.addEventListener('mouseleave', rmClass);
            }
        })
    }

    
})