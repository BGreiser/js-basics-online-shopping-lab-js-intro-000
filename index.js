var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemPrice = Math.floor(Math.random() * 100)
  let itemObj = {
   "itemName": item,
   "price": itemPrice
 } // end object

  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return cart
} // end addToCart

function viewCart() {
  let cartView = "";
  if (cart.length === 0) {
    cartView += "Your shopping cart is empty.";
    console.log(cartView);
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
