

export function formatPrice(price: number){
  var formatter = new Intl.NumberFormat('pt-br', {
    style : "currency",
    currency : "BRL"
  })
  let priceString = formatter.format(price);

  return priceString;
}