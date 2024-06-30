const panels =
  document.querySelectorAll('.panel');

function panelClick(e) {
  removeAllActive();
  console.log(e.classList);
  if (e) {
    e.classList.add('active');
  }
}

function removeAllActive() {
  //   console.log(panels);
  //   panels.forEach((element) => {
  //     console.log(element);
  //     element.classList.remove('active');
  //   });

  document
    .getElementsByClassName('active')[0]
    .classList.remove('active');
}
