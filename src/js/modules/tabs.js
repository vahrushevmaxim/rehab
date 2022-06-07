document.addEventListener('DOMContentLoaded', function () {
let btns = document.querySelectorAll('.reviews__btn');
let cards = document.querySelectorAll('.reviews__card');
let wrp = document.querySelector('.reviews__card')
let width;
let count = 0;

for (let i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", function(e){
      let activeTabAttr = e.target.getAttribute("data-tab");
  
      for (let j = 0; j < btns.length; j++) {
        let contentAttr = cards[j].getAttribute("data-content");
  
        if (activeTabAttr === contentAttr) {
            btns[j].classList.add("active");
            cards[j].classList.add("shoy"); 
        } else {
            btns[j].classList.remove("active");
            cards[j].classList.remove("shoy");
        }
      };      
    });
  };
})







