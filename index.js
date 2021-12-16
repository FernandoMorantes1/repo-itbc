function calculatePrice(itemName, itemPrice) {
  if (isNaN(itemPrice) || itemPrice < 1) {
    return "El precio ingresado no es valido";
  } else {
    let shippingPrice;
    let finalPrice;

    if (itemPrice > 0 && itemPrice <= 2000) shippingPrice = 300;
    else if (itemPrice > 2000 && itemPrice <= 4000) shippingPrice = 500;
    else shippingPrice = 700;

    finalPrice = itemPrice + shippingPrice;

    return `El producto ${itemName} cuesta ${itemPrice}. Su costo de envio es de ${shippingPrice}. Por lo tanto, el precio final es de ${finalPrice}`;
  }
}

console.log(calculatePrice("Macbook", 2500));
console.log(calculatePrice("Celular", 500));
console.log(calculatePrice("Playstation", 4500));
