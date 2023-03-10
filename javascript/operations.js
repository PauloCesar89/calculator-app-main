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


const check2 = document.getElementById('radio2');
    check2.addEventListener('click',function(){
        
        var body = document.querySelector('body');
        body.classList.remove('active3');
        body.classList.add('active1');
    
});

const check1 = document.getElementById('radio1');
    check1.addEventListener('click',function(){

        var body = document.querySelector('body');
        body.classList.remove('active1');
        body.classList.remove('active3');
});


const check3 = document.getElementById('radio3');
    check3.addEventListener('click',function(){

        var body = document.querySelector('body');
        body.classList.remove('active1');
        body.classList.add('active3');
    
});