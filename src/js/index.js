var lastScrollTop = 0;
var scrollHeader = document.querySelector('.scroll-header');

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    scrollHeader.classList.add('hide');
  } else {
    scrollHeader.classList.remove('hide');
  }

  lastScrollTop = scrollTop;
});
