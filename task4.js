// function factorialFind (num:number){
//     let result =1;
//     for (let i = 2;i < num;i++){
//         result *=i;
//     }
//     return result;
// }
// factorialFind(5);
function factorial(num) {
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
factorial(5);
