let activeTill = 1;
let progressWidth = 0;

function onPrev() {
  if (activeTill > 1) {
    document
      .getElementById('element' + activeTill)
      .classList.remove('active');
    progressWidth = progressWidth - 33;
    document.getElementById(
      'progress'
    ).style.width = progressWidth + '%';
    activeTill = activeTill - 1;
  }
}

function onNext() {
  if (activeTill < 4) {
    activeTill = activeTill + 1;
    document
      .getElementById('element' + activeTill)
      .classList.add('active');

    progressWidth = progressWidth + 33;
    document.getElementById(
      'progress'
    ).style.width = progressWidth + '%';
  }
}

function checkPrevDisable() {
  if (activeTill > 1) {
    document
      .getElementById('prev')
      .setAttribute('disabled', false);
  } else if (activeTill === 1) {
    document
      .getElementById('prev')
      .setAttribute('disabled', true);
  }
}
