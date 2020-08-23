var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemPrice = Math.floor(Math.random() * 100 + 1);
  let itemObj = {
   "itemName": item,
   'price': itemPrice
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
  } else {
    cartView += "In your cart, you have ";
    while (i < cart.length - 1) {
        cartView += `${cart[i].itemName} at \$${cart[i].price}, `;
        i = i + 1;
    } //end while
    cartView += `and ${cart[i].itemName} at \$${cart[i].price}`;
    }//else if
    return cartView;
    }

function total() {
  let sumOf = 0;
  for(let i = 0; i < cart.length; i++) {
    sumOf += cart[i].price;
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
