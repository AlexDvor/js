const listRef = document.querySelector('.list');

listRef.addEventListener('click', a);
function a(e) {
  console.log(e.target.id);
}
