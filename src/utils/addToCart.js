export function addToCart(amount, id, method) {
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }

  const newArray = JSON.parse(localStorage.getItem('cart'));
  let isInArray;
  const mapedArray = newArray.map((el) => {
    if (el.id === id) {
      if (method === 'replace') {
        el.amount = amount;
      }
      if (method === 'add') {
        el.amount += amount;
      }

      isInArray = true;
    }
    return el;
  });

  if (!isInArray) {
    mapedArray.push({ amount, id });
  }

  localStorage.setItem('cart', JSON.stringify(mapedArray));

  return !isInArray;
}
