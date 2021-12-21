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
function ClickNumber(number){
  if(num1 == undefined){
    if(num1String == undefined) num1String = '';
    num1String += number;
  }

  else {

    if(num2String == undefined) num2String = '';

      num2String += number;
    }
  }
}

function Afficher(number){

  let resultInput  = document.getElementById("resultInput");
  resultInput.value = " ";
}