$('#more').on('click', function () {
  $('body, html').animate({
    scrollTop: $('.about-me').offset().top
  }, 1000)
})

// $(document).on('scroll', function () {

//   const windowHeight = $(window).height()
//   const scrollValue = $(this).scrollTop();
//   const $photo = $('.photo')
//   const fromTop = $photo.offset().top;
//   const photoHeight = $photo.height()

//   if (scrollValue > fromTop + photoHeight - windowHeight - 120) {
//     $photo.addClass('active')
//   }

//   if (scrollValue < 100) {
//     $('div').removeClass('active')
//   }
// })