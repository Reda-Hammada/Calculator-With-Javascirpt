var num1String;
var num2String;


function onClickNumber(number){
    if(calculatrice.a == undefined) {
        if(num1String == undefined){
            num1String = ""
        }

        num1String += number;

    } 
    else {
        if(num2String == undefined){
            num2String += number;
        }

        bString += number;
    }

    display();
}

function display(){
    var displayInput = document.getElementById('displayBar');
    displayInput.value = "";

    if(calculatrice.x != undefined && calculatrice.y != undefined && calculatrice.operation != undefined){
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
         calculatrice.x = parseFloat(xString);
         display();
    }else{
        alert("vous avez déja choisi l'operqtion " + calculatrice.operation);
    }
}

function equal(){

}

function reset(){
    calculatrice.init();
    xString = undefined;
    yString = undefined;
    var displayInput = document.getElementById('displayBar');
    displayInput.value = "";
}