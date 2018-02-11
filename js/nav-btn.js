$('.menu-toggle').on('click', function() {
  $('.full-menu').toggleClass('full-menu--open');
})

$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $(this).toggleClass('open');
  });
});

$(document).ready(function() {
  $('.link-btn').on('click', function() {
    $('.menu-toggle').toggleClass('open');
  });
});
