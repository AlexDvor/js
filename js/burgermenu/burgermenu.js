let menus = [...document.querySelectorAll('.circular-menu')];

menus.map(menu => {
  let items = menu.querySelectorAll('.circular-menu__item');
  let button = menu.querySelector('.circular-menu__button');
  let active = false;

  console.log(items);

  const length = items.length;
  const arc = 1 * Math.PI * (1 / length);
  const radius = 40;

  button.addEventListener('click', e => {
    e.preventDefault();
    active = !active;
    if (active) {
      button.classList.add('circular-menu__button_active');
      for (let i = 0; i < length; i += 1) {
        const angle = i * arc - 200;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        items[i].style.left = 50 + x + '%';
        items[i].style.top = 50 + y + '%';
      }
    } else {
      button.classList.remove('circular-menu__button_active');
      for (let i = 0; i < length; i += 1) {
        items[i].removeAttribute('style');
      }
    }
  });
});