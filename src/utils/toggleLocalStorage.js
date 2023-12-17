export function toggleLocalStorage(status, field, id) {
  if (!localStorage.getItem(field)) {
    localStorage.setItem(field, JSON.stringify([]));
  }

  if (status) {
    const newArray = JSON.parse(localStorage.getItem(field)).filter(
      (el) => el !== id,
    );
    localStorage.setItem(field, JSON.stringify(newArray));
    return;
  }
  const newArray = JSON.parse(localStorage.getItem(field));
  if (newArray.find((el) => el === id)) {
    return;
  }
  newArray.push(id);
  localStorage.setItem(field, JSON.stringify(newArray));
}
