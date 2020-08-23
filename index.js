var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100 + 1);
  let itemObj = {
   "itemName": item,
   'itemPrice': price
 } // end object

  cart.push(itemObj);
  return `${item} has been added to your cart.`;
} // end addToCart

function viewCart() {
  let cartView = "";
  let i = 0;
  if (cart.length === 0) {
    cartView += "Your shopping cart is empty.";
    //console.log(cartView);
    return cartView;
  } else if (car.length === 1){
    cartView += `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}`;
  } else {
    cartView += "In your cart, you have ";
    while (i < cart.length - 1) {
        cartView += `${cart[i].itemName} at \$${cart[i].itemPrice}, `;
        i = i + 1;
    } //end while
    cartView += `and ${cart[i].itemName} at \$${cart[i].itemPrice}`;
    }//else if
    return cartView;
    }

function total() {
  let sumOf = 0;
  for(let i = 0; i < cart.length; i++) {
    sumOf += cart[i].itemPrice;
  }
}

function removeFromCart(item) {
  if (cart.indexOf(item) < 0) {
    return "That item is not in your cart."
  } else {
    delete cart.item;
    return cart;
  };
}

function placeOrder(cardNumber) {
  // write your code here
}
