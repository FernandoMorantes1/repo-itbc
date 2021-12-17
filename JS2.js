let productList = require("./modules/productList");

function addIds() {
  productList.map((item, index) => (item["id"] = index + 1));
}

function printProducts() {
  console.log("\n\n\nLISTA COMPLETA\n");
  productList.forEach((item) => console.log(item));
}

function printById(id) {
  console.log(`\n\n\ITEM ID ${id}\n`);
  console.log(productList.find((item) => item.id === id));
}

function printByColor(color) {
  console.log(`\n\n\nLISTA DE COLOR ${color}\n`);
  console.log(productList.filter((item) => item.colors.includes(color)));
}

function printNoColor() {
  console.log("\n\n\nLISTA SIN COLOR\n");
  console.log(productList.filter((item) => item.colors.length === 0));
}

function addProduct(id, name, price, colors, quantity) {
  productList.push({
    id: id,
    name: name,
    price: price,
    quantity: quantity,
    colors: colors,
  });
}

function deleteOutOfStock() {
  productList = productList.filter((item) => item.quantity !== 0);
}

function getAllStock() {
  console.log(
    `\n\nCantidad total de stock: ${productList.reduce(
      (a, b) => a + b.quantity,
      0
    )}`
  );
}

function getProductsOverPrice(price) {
  console.log(`\n\nPRODUCTOS POR ENCIMA DE ${price}\n`);
  console.log(productList.filter((item) => item.price > price));
}

addIds();
printProducts();
printById(3);
printByColor("black");
printNoColor();
addProduct(productList.length, "PS5", 4500, ["white", "red"], 14);
printProducts();
deleteOutOfStock();
printProducts();
getAllStock();
getProductsOverPrice(500);
