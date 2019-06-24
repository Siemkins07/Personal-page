window.addEventListener('scroll', function () {
  const photo = document.querySelector('.photo');
  const photoHeight = photo.clientHeight;
  const about = document.querySelector('.container');
  const aboutHeight = about.clientHeight;
  const fromTop = photo.offsetTop;
  const windowHeight = window.innerHeight
  const scrollValue = this.window.scrollY

  if (scrollValue > fromTop + aboutHeight - windowHeight - 150) {
    about.classList.add('shown')
  } else if (scrollValue < 120) {
    about.classList.remove('shown')
  }

  if (scrollValue > fromTop + photoHeight - windowHeight - 100) {
    photo.classList.add('active')
  } else if (scrollValue < 170) {
    photo.classList.remove('active')
  }
})