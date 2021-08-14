//----------------------------------
//METHODS - 1 ----- SIMPLE SHOPPING
//----------------------------------
/* 
const products = [
    {name: 'laptop', price: 2000},
    {name: 'shirt', price: 500},
    {name: 'pants', price: 800},
    {name: 'phone', price: 12800},
    {name: 'watch', price: 1800}
];

let totalPrice = 0;
for (const product of products){
    totalPrice = totalPrice + product.price;
}

console.log(totalPrice); 
*/


//----------------------------------
//METHODS - 2 ----- MEGA SHOPPING
//----------------------------------
const cart = [
    {name: 'laptop', price: 2000, quantity: 1},
    {name: 'shirt', price: 500, quantity: 3},
    {name: 'pants', price: 800, quantity: 2},
    {name: 'phone', price: 12800, quantity: 1},
    {name: 'watch', price: 1800, quantity: 3}
];

let cartTotal = 0;
for(const product of cart){
    console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);