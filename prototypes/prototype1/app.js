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

// 
function insertNumber(number){
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

  let resultInput  = document.getElementById("resultInput");
  resultInput.value = " ";

  if(num1 != undefined && num2 != undefined && operation != undefined){

    resultInput.value = number;
}else{
    if(num1String != undefined)
    afficheur.value += xString 
    if(operation != undefined)
        resultInput.value += operation     
    if(num2String != undefined)
        resultInput.value += yString 

    }

}

function Operation(operationParam){
  if(operation == undefined){
      operation = operationParam;
      num1 = parseFloat(num1String);
      result();
  }else{
      alert("Vous avez déjà choisi l'opération " + operation);
  }
}

function equal(){
  num1 = parseFloat(num1String);
  num2 = parseFloat(num2String);
  solution = Calculer(num1,num2,operation);
  result(solution);
}

function restCalc(){
  num1 = undefined;
  num2 = undefined;
  num1String = undefined;
  num2String = undefined;
  operation = undefined;
  let resultInput = document.getElementById("resultInput");
  
  resultInput.value = "";
}