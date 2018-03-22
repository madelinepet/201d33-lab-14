'use strict';

var Cart = [];

function loadCart() {
  // TODO: Pull the cart (if it exists) from Local Storage and make available to this app
  var cartString = localStorage.getItem('accessCart');
  var usableCart = JSON.parse(cartString);
  if (Cart && Cart.length){
    Cart = usableCart;
    return;
  }
//if nothing in cart
alert('Your cart is empty');
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
makeCart.prototype.showCart = function() {

  // TODO: Find the table
  var cartTable = document.getElementById('cart');

  // TODO: Iterate over the items in the cart
  for (var i=0; i < Cart.length; i++){
    // TODO: Create a TR
    // TODO: Create a TD for the quantity and the item
    // TODO: Add the TR to the TBODY and both TD's to the TR
    var tdElement = document.createElement('td');
    var trElement = document.createElement('tr');
    var tBodyElement = document.createElement('tbody');
    tdElement.appendChild(trElement);
    trElement.appendChild(tBodyElement);
    tBodyElement.appendChild(cartTable);
  }
};

function removeItemFromCart() {
  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  makeCart.cartTable.innerHTML = '';
  // TODO: Save the cart back to local storage
  storeCart();
  // TODO: Re-draw the cart table
  makeCart.prototype.showCart();
}

// TODO: Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked. Where is the delete link in the HTML?


loadCart();

makeCart.prototype.showCart();