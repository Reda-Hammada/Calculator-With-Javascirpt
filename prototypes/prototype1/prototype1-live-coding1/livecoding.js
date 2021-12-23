let num1, num2, operation, solution;
let num1string, num2string;

// Click Numbers
function clicknum(number){

    if(num1 == undefined){
            if(num1string == undefined) num1string = '';
            num1string += number;

        }
        
        else{

            if(num2string == undefined) num2string = '';
                num2string += number;
        }
    

    display();

}

// operation 
function operator(operationParam){
    if(operation == undefined){
        operation = operationParam;
        num1 = parseFloat(num1string);
        display();
    }

    else{

        alert("you have already chosen an operator " + operation);
    }

}

function display(number){
    let display = document.getElementById("display");
    display.value = "";
    if(num1 != undefined && operation != undefined && num2 != undefined){

        display.value = number
    }

    else{

        if(num1string != undefined)
            display.value += num1string;
        
        if(operation != undefined)
            display.value += operation;
        
        if(num2string != undefined)
            display.value += num2string;
        
    }
}


// equal 

function equal(){
    num1 = parseFloat(num1string);
    num2 = parseFloat(num2string);
    solution = calculation(num1,num2,operation)
    display(solution);  

}

// calculation 
function calculation(){
    let result = undefined
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


// reset calculator 
function  resetCalculator(){

    num1 = undefined;
    num2 = undefined;
    num1string = undefined;
    num2string = undefined;
    operation = undefined;
    let display = document.getElementById('display');
        display.value = " ";
}


