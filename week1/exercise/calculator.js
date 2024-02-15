function basicCalculator(firstNum, secondNum, operator) {
  switch (operator) {
    case "+":
      return console.log(firstNum + secondNum);
    case "-":
      return console.log(firstNum - secondNum);
    case "*":
      return console.log(firstNum * secondNum);
    case "/":
      return console.log(firstNum / secondNum);
    default:
      return console.log(null);
  }
}

let num1 = 10;
let num2 = 5;
basicCalculator(num1,num2,"+");
basicCalculator(num1,num2,"-");
basicCalculator(num1,num2,"*");
basicCalculator(num1,num2,"/");
