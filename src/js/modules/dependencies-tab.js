document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.psychiatry__information-tabs')) {
        let tabs = document.querySelectorAll('.psychiatry__tab');
        let mobiletab = document.querySelectorAll('.dependencies__btn-inner');
        let content = document.querySelectorAll('.dependencies__links');
        let mobileСontent = document.querySelectorAll('.dependencies__list-576');
        const mediaQuery = window.matchMedia('(max-width: 1024px)');
        for (let i = 0; i < tabs.length; i++) {

            tabs[i].addEventListener("click", function (e) {
                let activeTabAttr = e.target.getAttribute("data-tab");

                for (let j = 0; j < content.length; j++) {
                    let contentAttr = content[j].getAttribute("data-content");

                    if (activeTabAttr === contentAttr) {
                        tabs[j].classList.add("active");
                        content[j].classList.add("show");
                    } else {
                        tabs[j].classList.remove("active");
                        content[j].classList.remove("show");
                    }
                };
            });
        };

        if (mediaQuery.matches) {
            for (let i = 0; i < mobiletab.length; i++) {

                mobiletab[i].addEventListener("click", function (e) {
                    let activeTabAttr = e.target.getAttribute("data-mobiletab");

                    for (let j = 0; j < mobileСontent.length; j++) {
                        let contentAttr = mobileСontent[j].getAttribute("data-mobilecontent");

                        if (activeTabAttr === contentAttr) {-2
                            mobileСontent[j].classList.add("show-2");
                        } else if (activeTabAttr) {
                            mobileСontent[j].classList.remove("show-2");
                        }
                    };
                });
            };
        }
    }
});