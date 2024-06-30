function headerClick() {
  document
    .querySelector('.accbody')
    .classList.toggle('active');

  if (
    document
      .querySelector('.accbody')
      .classList.contains('active')
  ) {
    document.querySelector(
      '.text'
    ).style.display = 'block';
  } else {
    document.querySelector(
      '.text'
    ).style.display = 'none';
  }
}
