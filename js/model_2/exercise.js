// ---------------------------------------------------------------------


const available = 100;
const ordered = 120;
// let message = "";

function checkStorage(available, ordered) {
  // Пиши код ниже этой строки
  let message="";

  if (ordered === 0) {
    message = 'В заказе еще нет товаров';
  } else if (ordered > available) {
    message = 'Слишком большой заказ, на складе недостаточно товаров!';
  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
  }

  return message;
  // Пиши код выше этой строки
  console.log (message)
}