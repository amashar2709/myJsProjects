let textElement = document.querySelector(
  '.loading-text'
);
let bg = document.querySelector('.bg');

let loading = 0;

let int = setInterval(blurring, 100);

function blurring() {
  loading++;

  if (loading > 99) {
    clearInterval(int);
  }

  textElement.textContent =
    'Loading..' + loading + '%';
  bg.style.filter = `blur(${scale(
    load,
    0,
    100,
    30,
    0
  )})`;
}
