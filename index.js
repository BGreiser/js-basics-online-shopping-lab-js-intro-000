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
  let cartView = "";
  if (cart.length === 0) {
    cartView += "Your shopping cart is empty.";
    return cartView;
  } else {
    cartView += "In your cart, you have ";
    for(let i = 0; i < cart.length; i++) {
        cartView += `${cart[i].itemName} at \$${cart[i].price}, `
    }//end for
    return cartView;
    }//end if else
}//end function

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
