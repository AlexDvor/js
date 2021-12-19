const sliderLineRef = document.querySelector('.slider-line');
const nextBtnRef = document.querySelector('.slider-next');
const prevBtnRef = document.querySelector('.slider-prev');

let offset = 0; // position from left edge

nextBtnRef.addEventListener('click', () => {
  offset += 256;
  if (offset > 1792) {
    offset = 0;
  }
  sliderLineRef.style.left = -offset + 'px';
});

prevBtnRef.addEventListener('click', () => {
  offset -= 256;
  if (offset < 0) {
    offset = 1792;
  }
  sliderLineRef.style.left = -offset + 'px';
});
