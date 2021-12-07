import products from './products';

const productName: string = products[2].name;
const product = products.filter(prod => prod.name === productName)[0];
//console.log(product);

//converting string to boolean
const preOrder: boolean = Boolean(product.preOrder);
if ( preOrder === true ){
  console.log('Congrats! Your product is on its way.');
} 
else {
  console.log('Sorry, this product is not available for preorder.');
}

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
const shippingAddress: string = 'No. 7 Orange Crescent, Chicago';

//converting string to number
const price:number = Number(product.price);
if(price >= 25){
  shipping = 0;
  console.log('We provide free shipping for products above $25.');
} else {
  shipping = 5;
}

//setting tax percentages
const city: string = 'New York';
if( shippingAddress.match(city)){
  taxPercent = 0.1;
}
else taxPercent = 0.05;

//calculating tax total
taxTotal = price * taxPercent;

//calculating total
total = price + taxTotal + shipping;

//print receipt for customer
console.log(`Product name: ${productName}
Address: ${shippingAddress} 
Product price: $${price}
Tax total: $${taxTotal}
Shipping cost: $${shipping}
Total: $${total}`);
