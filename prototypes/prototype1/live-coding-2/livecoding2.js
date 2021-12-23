var num1, num2, operation, solution;
var num1String, num2String;


// click function 

function clickedNumbers(number){

    if(num1 == undefined){
        if(num1String == undefined) num1String =""
        num1String = number;
    }

    else{
        if(num2String == undefined) num2String =""
        num2String = number;
    }

    display();
}

// funnction  display 

function  display(number){
    let resultInput = document.getElementById('display');
    resultInput.value ="";
    if(num1 != undefined && num2 != undefined && operation != undefined ){
        resultInput.value += number;
    }

    else{
        if(num1String != undefined){
            resultInput.value += num1String;
        }
        if(operation != undefined){
            resultInput.value += operation;


        }
        if(num2String != undefined){

            resultInput.value += num2String;
        }
            
    }


}


// operator 

function operator(operationPara){

    if(operation == undefined){
        operation = operationPara;
        num1 = parseFloat(num1String);
    }

    display();
}

//equal function 

function equal(){

    num1= parseFloat(num1String);
    num2 = parseFloat(num2String)
    solution = calculation(num1, num2, operation);
    display(solution);
}


// caclulate function 
function calculation(num1, num2, operation){
    let result = undefined;
        switch(operation){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            default:
                break;
        }

        return result;
}

function  resetCalc(){

    var displayInput = document.getElementById('display');
    displayInput.value ="";
    num1 = undefined;
    num2 =undefined;
    num1String = undefined;
    num2String = undefined;
}