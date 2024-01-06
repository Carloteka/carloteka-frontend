export function toggleCartInLocalStorage(status, id) {
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }

  if (status) {
    const newArray = JSON.parse(localStorage.getItem('cart')).filter(
      (el) => el.id !== id,
    );
    localStorage.setItem('cart', JSON.stringify(newArray));
    return;
  }
  const newArray = JSON.parse(localStorage.getItem('cart'));

  newArray.push({ id, amount: 1 });
  localStorage.setItem('cart', JSON.stringify(newArray));
}
