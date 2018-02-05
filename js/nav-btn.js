$('.menu-toggle').on('click', function(){
  $('.full-menu').toggleClass('full-menu--open');
})

$('.menu-toggle').click(function() {
  $('.rect-top').toggleClass('transform-active-top');
});

$('.menu-toggle').click(function() {
  $('.rect-middle').toggleClass('transform-active-middle');
});

$('.menu-toggle').click(function() {
  $('.rect-bottom').toggleClass('transform-active-bottom');
});
