"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var productName = products_1["default"][2].name;
var product = products_1["default"].filter(function (prod) { return prod.name === productName; })[0];
//console.log(product);
//converting string to boolean
var preOrder = Boolean(product.preOrder);
if (preOrder === true) {
    console.log('Congrats! Your product is on its way.');
}
else {
    console.log('Sorry, this product is not available for preorder.');
}
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = 'No. 7 Orange Crescent, Chicago';
//converting string to number
var price = Number(product.price);
if (price >= 25) {
    shipping = 0;
    console.log('We provide free shipping for products above $25.');
}
else {
    shipping = 5;
}
//setting tax percentages
var city = 'New York';
if (shippingAddress.match(city)) {
    taxPercent = 0.1;
}
else
    taxPercent = 0.05;
//calculating tax total
taxTotal = price * taxPercent;
//calculating total
total = price + taxTotal + shipping;
//print receipt for customer
console.log("Product name: ".concat(productName, "\nAddress: ").concat(shippingAddress, " \nProduct price: $").concat(price, "\nTax total: $").concat(taxTotal, "\nShipping cost: $").concat(shipping, "\nTotal: $").concat(total));
