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
      case '*':
        _solution = num1 * num2;
      break;

      case '/':
        _solution = num1 / num2;
        break;

      default: 
        break;
      
    }

    return _solution;
}

// 
function onClickNumber(number){
  if(num1 == undefined){
    if(num1String == undefined) num1String = '';
      num1String += number;
  }

  else {

    if(num2String == undefined) num2String = '';
         num2String += number;
    }

    result();
   
}

function result(number){

  let resultInput  = document.getElementById("result-bar");
  resultInput.value = '';

  if(num1 != undefined && num2 != undefined && operation != undefined){

    resultInput.value = number;
}else{
    if(num1String != undefined)
    resultInput.value +=  num1String;
 
    if(operation != undefined)
      resultInput.value += operation;  
    if(num2String != undefined)
        resultInput.value += num2String; 

    }

}

function Operator(operationParam){
  if(operation == undefined){
      operation = operationParam;
      num1 = parseFloat(num1String);
      result();
  }else{
      alert("You have already chosen an operator" + operation);
  }
}

function equal(){
  num1 = parseFloat(num1String);
  num2 = parseFloat(num2String);
  solution = Calculation(num1,num2,operation);
  result(solution);
}

function reset(){
  num1 = undefined;
  num2 = undefined;
  num1String = undefined;
  num2String = undefined;
  operation = undefined;
  let resultInput = document.getElementById("result-bar");
  
  resultInput.value = "";
}