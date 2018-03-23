'use strict';
var optionTag = document.getElementById('items');
var newCatalog = document.getElementById('catalog');

function populateForm() {
  // var catalogString = localStorage.getItem('accessCatalog');
  // var usableCatalog = JSON.parse(catalogString);
  // if (saveCatalog && saveCatalog.length){
  //   saveCatalog = usableCatalog;
  //   return;
  // }
//TODO: Add an <option> tag inside the form's select for each product
  for (var i in Product.allProducts) {

    var option = document.createElement('option');


    option.textContent = Product.allProducts[i].itemName;

  
    optionTag.appendChild(option);
    console.log('options tag', optionTag);
  }
}

function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do ALL the things
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();

}

function addSelectedItemToCart() {
  // TODO: Add the selected item and quantity to the cart
  Cart.push
}

function saveCartToLocalStorage() {
  // TODO: Save the cart to Local Storage

}

function updateCounter() {
  // TODO: Update the cart count in the header
}

function updateCartPreview() {
  // TODO: Show the selected item & quantity in the cart div
}

// TODO: Put an event listener on the #catalog so that you can run the "handleSubmit" method when user submits the form (adding an item to their cart)
// populateForm.newCatalog.addEventListener('submit', handleSubmit);
// Start it up ...
populateForm();
