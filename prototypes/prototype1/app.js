// variables :
let num1, num2, solution, operation;
let num1String, num2String;

//Métier
function Calculation(num1, num2, operation){
  let _solution = undefined;
    switch(operation){

      case '+':
        _solution = num1 + num2;
        break;
      case '-':
        _solution = num1 - num2;
        break;

      default: 
        break;
    }

    return _solution;
}