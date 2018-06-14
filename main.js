// Scrool to top

var timeOut;

function scrollToTop() {
  if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
    window.scrollBy(0, -50);
    timeOut = setTimeout('scrollToTop()', 10);
  } else clearTimeout(timeOut)
}

var nav = document.querySelector('.top');

nav.addEventListener('click', function() {
  scrollToTop()
});


// Navigation


var back = document.querySelector('.fixed');
var position = 0;

// scrollY renvoie le nombre de pixels défilé verticalement

window.addEventListener('scroll', function() {
  if (position < window.scrollY) {
    back.classList += 'up';
    // on ajoute la class up afin de caché la nav
    position = window.scrollY;
    // on reset la variable position pour lui donné la valeur exacte d'où elle se situe
  } else {
    back.classList = 'fixed small'
    // on ajoute la class small afin de faire apparaitre la nav
    position = window.scrollY;
    // on reset la variable position pour lui donné la valeur exacte d'où elle se situe
  }
})


// Burger menu


var burgermenu = document.querySelector('.burgermenu');
var menu = document.querySelector('#topbar');
counter = 0

burgermenu.addEventListener('click', function() {
  counter++
  console.log(counter);
  if (counter === 1) {
    menu.style.display = 'flex';
  }
  if (counter === 2) {
    menu.style.display = 'none';
    counter = 0
  }
});
