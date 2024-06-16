/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
let products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const product1 ={
  name: "cherry",
  price: 1,
  quantity: 0,
  productId: 001,
  image: "./images/cherry.jpg"
};

const product2 ={
  name: "orange",
  price: 2,
  quantity: 0,
  productId: 002,
  image: "./images/orange.jpg"
};

const product3 ={
  name: "strawberry",
  price: 3,
  quantity: 0,
  productId: 003,
  image: "./images/strawberry.jpg"
};

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/


// Add product objects to the products array
products.push(product1, product2, product3);


/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

// let cart =[001,001,001,002,003];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
// Finds the product in theproducts  array based on the productId 
function addProductToCart(productId) {
  // Find the product in products array based on productId
  const productToAdd = products.find(product => product.productId === productId);

  // Check if product is already in the cart
  const existingProductIndex = cart.findIndex(item => item.productId === productId);

  if (existingProductIndex !== -1) {
    // Product is already in the cart, increase its quantity
    cart[existingProductIndex].quantity++;
  } else {
    // Product is not in the cart, add it
    const newCartItem = { ...productToAdd, quantity: 1 };
    cart.push(newCartItem);
  }
}



/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  const productIndex = cart.findIndex(item => item.productId === productId);
  if (productIndex !== -1) {
    cart[productIndex].quantity++;
  }
}


/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  const productIndex = cart.findIndex(item => item.productId === productId);
  if (productIndex !== -1) {
    // Do nothing if product exist
    if (cart[productIndex].quantity > 0) {
      cart[productIndex].quantity--;
      if (cart[productIndex].quantity === 0) {
        cart.splice(productIndex, 1); // Remove the product from cart if quantity becomes 0
      }
    }
  }
}


/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/


function removeProductFromCart(productId) {
  const productIndex = cart.findIndex(item => item.productId === productId);
  if (productIndex !== -1) {
    cart[productIndex].quantity = 0;
    cart.splice(productIndex, 1); // Remove the product from cart
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal() {
  let total = 0;
  for (const item of cart) {
    total += item.price * item.quantity;
  }
  return total;
}


/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart = [];
}


/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let totalPaid = 0;

function pay(amount) {
  const total = cartTotal();
  totalPaid += amount; // Add the received amount to the totalPaid
  return totalPaid - total; // Return the difference between totalPaid and cartTotal
}



/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}