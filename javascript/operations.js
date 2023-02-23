function insert(num){
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

function operationCalc(){
    var result = document.getElementById('result').innerHTML;
    if(result){
    document.getElementById('result').innerHTML = eval(result);

}
    else{
    document.getElementById('result').innerHTML = ("erro sintaxe");
}
}

function reset(){
    document.getElementById('result').innerHTML = ("");
}

function del(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0,result.length-1);
}