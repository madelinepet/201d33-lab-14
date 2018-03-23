'use strict';

var catalog = [];


// TODO: Create a "Cart" constructor that holds quantity, item, and an array of items in the cart
var makeCart = function(quantity, itemName){
  this.quantity = quantity;
  this.itemName = itemName;
  makeCart.Cart.push(this);
};
var Cart = [];

//new function to store cart in local storage
var storeCart = function(){
  var saveCart = JSON.stringify(Cart);
  console.log ('cart', Cart);
  localStorage.setItem('accessCart', saveCart);
};


// Product Contructor
function Product (filePath, itemName) {
  this.filePath = filePath;
  this.itemName = itemName;
  Product.allProducts.push(this);
}
Product.allProducts=[];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}
// var storeCatalog = function(){
//   var saveCatalog = JSON.stringify(Product.allProducts);
//   localStorage.setItem('accessCatalog', saveCatalog);
// };

// Initialize the app
// storeCatalog();
// storeCart();
generateCatalog();
