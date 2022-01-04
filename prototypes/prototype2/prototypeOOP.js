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
    if()
}