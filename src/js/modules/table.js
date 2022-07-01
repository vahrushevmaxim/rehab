document.addEventListener('DOMContentLoaded', function () {

    const programms = document.querySelectorAll('.art__ban2-wrapper');

    if (programms.length > 0) {
        programms.forEach(function (item) {
            const heading = item.querySelector('.art__ban2'); // Видимая часть, заголовок
            const btn = item.querySelector('.art__ban2-link'); // кнопка
            const btnIcon = btn.querySelector('.art__ban2-icon'); // Иконка кнопки
            const table = item.querySelector('.art__tab'); // выпадающая таблица

            btn.addEventListener('click', function () {
                table.classList.toggle('art__tab-hidden');
                btnIcon.classList.toggle('art__ban2-icon_close');
                heading.classList.toggle('art__ban2-radius');
                let progress = item.querySelectorAll('.art__tab-progress');
                if(progress){
                    progress.forEach(function (el){
                        el.classList.toggle('art__tab-gr-null');
                    })
                }
            })
        })
    }

})