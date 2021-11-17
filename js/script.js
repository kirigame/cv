$(window).scroll(function() {
    if ($(this).scrollTop()>=400) {
      $('.footer__contacts').fadeIn(900);
    }
    else {
      $('.footer__contacts').fadeOut(900);
    }
  });
              $(".header").fadeIn(2000);
              $("#highlights").on('click', function () {
                  $(".highlights__list").toggle();
              });
              $("#hobbies").on('click', function () {
                  $(".hobbies__list").toggle();
              });
              $("#skills").on('click', function () {
                  $(".skills__list").toggle();
              });
              $("#education").click(function() {
                  let display =  $(".education__list").css("display");
                  if(display == 'none'){
                  $(".education__list").css('display', 'block');
              }
              else{
                  $(".education__list").css('display', 'none');  
              }
              });
              $("#expierence").on('click', function () {
                  $(".expierence__list").toggle();
              });