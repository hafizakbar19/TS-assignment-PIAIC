
function discountCalculator (productPrice:number,dPercentage:number){
let discountAmount = productPrice*(dPercentage / 100);
let finalPrice = productPrice - discountAmount;

if (discountAmount >= productPrice / 2){
    console.log("Discount percentage is invalid");
}else{
    console.log(`The original price is ${productPrice} \n Discount amount is ${discountAmount}\n and the final amount is ${finalPrice}`);
}
}

discountCalculator(452,30);