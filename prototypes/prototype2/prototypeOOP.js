var num1String;
var num2String;
var calculator = new Calculatrice();

// click number function 
function onClickNumber(number){

    if(calculator.num1 == undefined){
        if(num1String == undefined) num1String = ""
        

        num1String += number;
    }
    else{
        if(num2String == undefined){
           num2String = ""
        }
        
        num2String += number;
    }
    

    display();
}

// display function 

function display(){

    var inputBar = document.getElementById('displayBar');
    inputBar.value = '';

    if(calculator.num1 != undefined && calculator.num2 != undefined && calculator.operation != undefined){
        inputBar.value = number;

    }

    else{
        if(num1String != undefined){
            inputBar.value += num1String;
        }
        if(calculator.operation != undefined){
            inputBar.value += calculator.operation;
        }
        if(num2String != undefined){
            inputBar.value += num2String;
        }
    }
}

// function operation 

function operation(operator){
    if(calculator.operation == undefined){
        calculator.operation = operator;
        calculator.num1 = parseFloat(num1String);
        display();
    }

    else{
        alert("You have already chosen an operator");
    }
}
// equal function

function equal(){
    calculator.num1 = parseFloat(num1String);
    calculator.num2 = parseFloat(num2String);
    display(calculator.calc());

}

// reset display input function 
function reset(){
    calculator.reset()
    num1String = undefined;
    num2String = undefined;
    var inputBar = document.getElementById('displayBar');
    inputBar.value = "";
}

