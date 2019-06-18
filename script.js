$('#more').on('click', function () {
  $('body, html').animate({
    scrollTop: $('.about-me').offset().top
  }, 1000)
})

$(document).on('scroll', function () {

  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();
  const $photo = $('.photo');
  const fromTop = $photo.offset().top;
  const photoHeight = $photo.height();

  const $about = $('.container')
  const aboutHeight = $about.height();

  if (scrollValue > fromTop + aboutHeight - windowHeight - 250) {
    $about.addClass('shown');
  }
  if (scrollValue < 140) {
    $('div').removeClass('shown');
  }

  if (scrollValue > fromTop + photoHeight - windowHeight - 210) {
    $photo.addClass('active');
    $about.addClass('shown');
  }
  if (scrollValue < 100) {
    $('div').removeClass('active');
    $('div').removeClass('shown');
  }
})