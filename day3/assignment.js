//Question One

function calculateDiscount(price , discount = 10){
     let discountedPrice = (price * (discount/100));
     let finalPrice = price - discountedPrice;
     return finalPrice;
}

console.log(calculateDiscount(200,10));

// Question Second 

function mergeArray(firstArray,secondArray){
let newArray = [...firstArray,...secondArray];
return newArray;
}
console.log(mergeArray([1,3,false],[{names:"Leonel Andres Messi",nationality:"Argentina",profession:"Football player"}]));


// Question Third 
function logArguments(...args){
     let length = args.length;
     for(let i =0;i<length;i++){
          console.log(args[i]);
     }
}
logArguments(2,false,{})

// Question Fourth 
function createMessage(message = "Hello , How are you?",...args){
     
}