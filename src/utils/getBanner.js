export function getBanner(in_stock) {
  let banner = '';
  switch (in_stock) {
    case 2:
      banner = 'очікується';
      break;

    case 3:
      banner = 'під замовлення';
      break;

    case 0:
      banner = 'немає в наявності';
      break;

    default:
      banner = 'очікується';
  }
  return banner;
}
