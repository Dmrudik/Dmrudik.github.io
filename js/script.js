const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      closeOverlay = document.querySelector('.menu__overlay'),
      closeList = document.querySelectorAll('.menu__link'),
      portfolioActive = document.querySelectorAll('.portfolio__future'),
      portfolioExist = document.querySelectorAll('.exist');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeList.forEach(item  => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

portfolioActive.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); 
    });
});

portfolioExist.forEach(item => {
    item.innerText = 'Click for watching';
});


const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});


$('form').submit(function(e){
    e.preventDefault();
    if($(this).valid()){
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
    
        }).done(function(){
            $(this).find("input").val("");
            $('form').trigger('reset');
        });
    }
});


