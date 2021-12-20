
document.getElementById('equal').addEventListener('click', function  result(){
    alert('result');


});


function clickNumber(number){
  document.getElementById('result-bar').value+= number;

}


function resetInput(){


    document.getElementById('result-bar').value = " ";
}

