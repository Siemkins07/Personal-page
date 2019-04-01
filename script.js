$('#more').on('click', function () {
  $('body, html').animate({
    scrollTop: $('#about-me').offset().top
  }, 1000)
})