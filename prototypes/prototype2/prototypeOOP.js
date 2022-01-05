
var num1String;
var num2String;
var calculatrice = new Caluculatrice();

function onClickNumber(number){
    if(calculatrice.num1 == undefined){
        if(num1String == undefined){
            num1String = "";
        }
        num1String += number;
    }

    else{
        if(num2String == undefined){
            num2String+= number;
        }
    }
    display();
}
function display(){
    var displayInput = document.getElementById('displayBar');
    displayInput.value = "";

    if(calculatrice.num1 != undefined && calculatrice.num2 != undefined && calculatrice.operation != undefined){
    displayInput.value = number;
    }
    else{
        if(num1String != undefined){
            displayInput.value += num1String;
            
        }
        if(calculatrice.operation){
            displayInput.value += calculatrice.operation

        }
        if(num2String != undefined){
            displayInput.value += num2String;
        }
    }
}

function operation(operationParam){
    if(calculatrice.operation == undefined){
         calculatrice.operation = operationParam;
         calculatrice.num1 = parseFloat(num1String);
         display();
    }else{
        alert("vous avez déja choisi l'operqtion " + calculatrice.operation);
    }
}

function equal(){
    calculatrice.num1 = parseFloat(num1String);
    calculatrice.num2 = parseFloat(num2String);
    calculatrice.calculate();
    display(calculatrice.calculate());

}

function reset(){
    calculatrice.reset();
    num1String = undefined;
    num2String = undefined;
    var displayInput = document.getElementById('displayBar');
    displayInput.value = "";
}