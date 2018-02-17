$('.menu-toggle').on('click', function() {
  $('.full-menu').toggleClass('full-menu--open');
})

$('.menu-toggle').click(function() {
  $(this).toggleClass('open');
})

$('#btn1').click(function(e) {
   e.preventDefault();
  $(this).toggleClass('active-page').delay( 800 );
  $('#btn2').removeClass('active-page').delay( 800 );
  $('#btn3').removeClass('active-page').delay( 800 );
  $('#btn4').removeClass('active-page').delay( 800 );
})

$('#btn2').click(function(e) {
   e.preventDefault();
  $(this).toggleClass('active-page').delay( 800 );
  $('#btn1').removeClass('active-page').delay( 800 );
  $('#btn3').removeClass('active-page').delay( 800 );
  $('#btn4').removeClass('active-page').delay( 800 );
})

$('#btn3').click(function(e) {
   e.preventDefault();
  $(this).toggleClass('active-page').delay( 800 );
  $('#btn2').removeClass('active-page').delay( 800 );
  $('#btn1').removeClass('active-page').delay( 800 );
  $('#btn4').removeClass('active-page').delay( 800 );
})

$('#btn4').click(function(e) {
   e.preventDefault();
  $(this).toggleClass('active-page').delay( 800 );
  $('#btn2').removeClass('active-page').delay( 800 );
  $('#btn3').removeClass('active-page').delay( 800 );
  $('#btn1').removeClass('active-page').delay( 800 );
})

var anim = bodymovin.loadAnimation({
  container: document.getElementById('lottie'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
})

$(document).ready(function() {
  return new Promise(function(resolve) {
    anim.start();
    anim.onComplete = function() {
      resolve(true);
    }
  })
});
