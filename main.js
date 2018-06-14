var timeOut;

function scrollToTop(){
  if(document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
    window.scrollBy(0,-50);
    timeOut=setTimeout('scrollToTop()', 10);
  }
  else clearTimeout(timeOut)
}

var nav = document.querySelector('.top');

nav.addEventListener('click', function(){
scrollToTop()
});



var nav = document.querySelector('.fixed');
var position = 0;

// scrollY renvoie le nombre de pixels défilé verticalement

window.addEventListener('scroll', function(){
  if(position < window.scrollY) {
    nav.classList += 'up';
    // on ajoute la class up afin de caché la nav
    position = window.scrollY;
    // on reset la variable position pour lui donné la valeur exacte d'où elle se situe
  } else {
    nav.classList = 'fixed small'
    // on ajoute la class small afin de faire apparaitre la nav
    position = window.scrollY;
    // on reset la variable position pour lui donné la valeur exacte d'où elle se situe
  }
})
