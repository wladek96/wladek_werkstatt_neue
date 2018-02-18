$('.menu-toggle').on('click', function() {
  $('.full-menu').toggleClass('full-menu--open');
})

$('.menu-toggle').click(function() {
  $(this).toggleClass('open');
})

$('.link-btn').on('click', function() {
  $('.menu-toggle').toggleClass('open');
});

  var scrollTop = $(".scrollTopBtn");

  $(scrollTop).click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });

  $(scrollTop).tap(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });

$('#btn1').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('active-page').delay(800);
  $('#btn2').removeClass('active-page').delay(800);
  $('#btn3').removeClass('active-page').delay(800);
  $('#btn4').removeClass('active-page').delay(800);
})

$('#btn2').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('active-page').delay(800);
  $('#btn1').removeClass('active-page').delay(800);
  $('#btn3').removeClass('active-page').delay(800);
  $('#btn4').removeClass('active-page').delay(800);
})

$('#btn3').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('active-page').delay(800);
  $('#btn2').removeClass('active-page').delay(800);
  $('#btn1').removeClass('active-page').delay(800);
  $('#btn4').removeClass('active-page').delay(800);
})

$('#btn4').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('active-page').delay(800);
  $('#btn2').removeClass('active-page').delay(800);
  $('#btn3').removeClass('active-page').delay(800);
  $('#btn1').removeClass('active-page').delay(800);
})

$(document).ready(function() {
  $(window).scroll(function() {
    if (window.matchMedia('(min-width: 768px)').matches) {
      $('.right').css('transform', 'translate3d(0,' + $(this).scrollTop() * 2 + 'px, 0)');
    }
  }).scroll();

});
