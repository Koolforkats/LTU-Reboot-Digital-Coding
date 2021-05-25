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

function drinkOrder(drink,size){
    //console.log(drink);
    //console.log(size);
    let strMessage = 'you have ordered a ' + size;
    blnValidated = true;
    if(size != 'large' && size != 'medium' && size != 'small'){
        blnValidated = false;
        strMessage = 'you have ordered a size we do not sell';
    }
    if(blnValidated){
    switch(drink){
        case 'cola':
            strMessage += ' Coca-Cola';
            break;
        case 'lemon':
            strMessage += ' Schweppes';
            break;
        case 'orange':
            strMessage += ' Tango';
            break;   
        default:
            strMessage = 'You have ordered a drink we do not sell';
            break;         
    }
}
    console.log(strMessage);
}
drinkOrder('cola', 'small');
drinkOrder('lemon', 'small');
drinkOrder('orange', 'seymour');
drinkOrder('orange', 'large');
drinkOrder('coffee', 'seymour');

function calculator(number1,number2,operator){
    let sum;
    let blnValidated = true;
    if(isNaN(number1)){
        blnValidated = false
        sum = 'Number 1 is not a valid number'
    }
    if(isNaN(number2)){
        blnValidated = false;
        sum = 'Number 2 is not a valid number';
    }


if(blnValidated){
    switch(operator){
        case '+':
            sum = number1 + number2;
        break;
        case '-':
            sum = number1 - number2;
        break;
        case '*':
            sum = number1 * number2;
        break;
        case '/':
            sum = number1 / number2;
        break;
        case '%':
            sum = number1 % number2;
        break; 
        default:
            sum = 'operator is not valid';                   
    }
}
    console.log(sum)
}

calculator(10,5,'+');
calculator(10,5,'-');
calculator(10,5,'*');
calculator(10,5,'/');
calculator(10,5,'%');
calculator('alex',5,'+');
calculator(10,'apples','+');
calculator(10,5,'$');