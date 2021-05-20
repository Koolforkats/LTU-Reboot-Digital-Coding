console.log('Hello');

// Single line comment

/*

multiple line comment

*/

var productName = 'Tinned Beans';
let price = '0.40';
const quantity = 1;
var inStock = true;
let discountAmount = 0;

console.log(productName);
console.log(price);
console.log(quantity);
console.log(inStock);
console.log(discountAmount);

function showProductName() 
{
   //code goes here
   console.log(productName);
}

showProductName();

function totalPrice(productPrice,productQuantity){
    console.log(productPrice*productQuantity)
}

totalPrice(10,5);

//function checkAvailability(productInStock){
  //  console.log(productInStock);
//}

// checkAvailability(productInStock){
// console.log(productInStock);
// }

// var checkAvailability = (productInStock) => {
// console.log(productInStock);
// }

var checkAvailability = productInStock => console.log(productInStock);

checkAvailability(5);


var number = 25


function checkNumber(number){
    if (number < 10){
        return number + ' is less than 10';
    } else if (number < 20){
        return number + ' is less than 20 but more than 10';
    } else if (number < 30){
        return number + ' is less than 30 and more than 20';
    } else {
        return number + ' is not less than 30';
    }
}

console.log(checkNumber(8));
console.log(checkNumber(25));
console.log(checkNumber(34));
console.log(checkNumber(14));
console.log(checkNumber(12));