/* Спойлер секции faq*/
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.faq__item');
    if(items.length > 0) {
        items.forEach(function(item) {
            const btn = item.querySelector('.faq__btn-wrap');
            btn.addEventListener('click', function() {
                ///console.log(item.querySelector('.faq__item-content'));///
                item.querySelector('.faq__item-content').classList.toggle('faq__active');
                btn.classList.toggle('faq__btn-act');
            });
        })
    }
})




