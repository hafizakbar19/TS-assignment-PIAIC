
function factorial(num: number) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
      console.log(result, "*");
    }
    return result;
  }
  factorial(3);