export function addToCart(amount, id) {
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }

  const newArray = JSON.parse(localStorage.getItem('cart'));
  let newObj;
  const mapedArray = newArray.map((el) => {
    if (el.id === id) {
      el.amount = amount;
    } else {
      newObj = { id, amount };
    }
    return el;
  });

  if (newObj) {
    mapedArray.push(newObj);
  }

  localStorage.setItem('cart', JSON.stringify(mapedArray));
}
