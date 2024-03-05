export function checkLocalStorage(field: string) {
  if (!localStorage.getItem(field)) {
    localStorage.setItem(field, JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem(field) as string);
}
