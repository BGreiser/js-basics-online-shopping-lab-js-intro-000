var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemPrice = Math.floor(Math.random() * 101)
  let itemObj = {
   "itemName": item,
   "price": itemPrice
 } // end object

  cart.push(itemObj);
  return `${item} has been added to your cart.`;
} // end addToCart

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
