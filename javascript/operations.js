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

const check1 = document.getElementById('radio1');

    check1.addEventListener('click', () => {
        document.getElementById('main').style.background = 'hsl(0, 0%, 90%)';
        document.getElementById('calc').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('theme').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('label').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('num7').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('num8').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('num9').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('num4').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('num5').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('num6').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('numAd').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('num1').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('num2').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('num3').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('numSub').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('numPoint').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('numO').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('numDiv').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('numMult').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('del').style.background = 'hsl(185, 42%, 37%)';
        document.getElementById('reset').style.background = 'hsl(185, 42%, 37%)';
        document.getElementById('equal').style.background = 'hsl(25, 98%, 40%)';
        document.getElementById('result').style.background = 'hsl(0, 0%, 93%)';
        document.getElementById('result').style.color = 'black';
        document.getElementById('group-num').style.background = 'hsl(0, 0%, 93%)';
});

const check3 = document.getElementById('radio3');

    check3.addEventListener('click', () => {
        document.getElementById('main').style.background = 'hsl(268, 75%, 9%)';
        document.getElementById('calc').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('theme').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('label').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('num7').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('num8').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('num9').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('num4').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('num5').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('num6').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('numAd').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('num1').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('num2').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('num3').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('numSub').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('numPoint').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('numO').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('numDiv').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('numMult').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('del').style.background = 'hsl(268, 47%, 21%)';
        document.getElementById('reset').style.background = 'hsl(268, 47%, 21%)';
        document.getElementById('equal').style.background = 'hsl(176, 100%, 44%)';
        document.getElementById('result').style.background = 'hsl(268, 71%, 12%)';
        document.getElementById('result').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('group-num').style.background = 'hsl(268, 71%, 12%)';
       

});

        /*remover estilos */

        const check2 = document.getElementById('radio2');

        check2.addEventListener('click', () => {


        document.getElementById("group-num").removeAttribute('style');
        document.getElementById("result").removeAttribute('style');
        document.getElementById("main").removeAttribute('style');
        document.getElementById('calc').removeAttribute('style');
        document.getElementById('theme').removeAttribute('style');
        document.getElementById('label').removeAttribute('style');
        document.getElementById("num7").removeAttribute('style');
        document.getElementById('num8').removeAttribute('style');
        document.getElementById('num9').removeAttribute('style');
        document.getElementById('num4').removeAttribute('style');
        document.getElementById('num5').removeAttribute('style');
        document.getElementById('num6').removeAttribute('style');
        document.getElementById('numAd').removeAttribute('style');
        document.getElementById('num1').removeAttribute('style');
        document.getElementById('num2').removeAttribute('style');
        document.getElementById('num3').removeAttribute('style');
        document.getElementById('numSub').removeAttribute('style');
        document.getElementById('numPoint').removeAttribute('style');
        document.getElementById('numO').removeAttribute('style');
        document.getElementById('numDiv').removeAttribute('style');
        document.getElementById('numMult').removeAttribute('style');
        document.getElementById('del').removeAttribute('style');
        document.getElementById('reset').removeAttribute('style');
        document.getElementById('equal').removeAttribute('style');


    });







/*
    document.getElementById('main').style.background = 'hsl(268, 75%, 9%)';
    document.getElementById('calc').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('theme').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('label').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('num7').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('num8').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('num9').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('num4').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('num5').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('num6').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('numAd').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('num1').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('num2').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('num3').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('numSub').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('numPoint').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('numO').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('numDiv').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('numMult').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('result').style.background = 'hsl(268, 71%, 12%)';
    document.getElementById('result').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('group-num').style.background = 'hsl(268, 71%, 12%)';





    document.getElementById('num1').style.color = 'hsl(221, 14%, 31%)';
    document.getElementById('num2').style.color = 'hsl(221, 14%, 31%)';
    document.getElementById('num3').style.color = 'hsl(221, 14%, 31%)';
    document.getElementById('num4').style.color = 'hsl(221, 14%, 31%)';
    document.getElementById('num5').style.color = 'hsl(221, 14%, 31%)';
    document.getElementById('num6').style.color = 'hsl(221, 14%, 31%)';
    document.getElementById('num7').style.color = 'hsl(221, 14%, 31%)';
    document.getElementById('num8').style.color = 'hsl(221, 14%, 31%)';
    document.getElementById('num9').style.color = 'hsl(221, 14%, 31%)';
    document.getElementById('num0').style.color = 'hsl(221, 14%, 31%)';
    document.getElementById('num/').style.color = 'hsl(221, 14%, 31%)';
    document.getElementById('num*').style.color = 'hsl(221, 14%, 31%)';
    document.getElementById('num-').style.color = 'hsl(221, 14%, 31%)';
    document.getElementById('num+').style.color = 'hsl(221, 14%, 31%)';
    document.getElementById('num.').style.color = 'hsl(221, 14%, 31%)';
    
const check2 = document.getElementById('checkbox2');

check2.addEventListener('click', () => {
    classList.remove('checkbox1');
    classList.remove('checkbox3');
});



document.querySelector(".checkbox1").click = function () {

    document.querySelectorAll(".num").classList.add("novoEstilo");

    };

    document.getElementById("checkbox3").onclick = function () {
    document.querySelector(".num").classList.add("novoEstilo");
};

    */
