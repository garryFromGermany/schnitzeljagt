var f2 = document.getElementById('frage2');
var f3 = document.getElementById('frage3');
var a1;
var lsg;

function func1(){
    a1 = document.getElementById("antwort1").value;
    lsg = "689";
    if (a1.equals(lsg)){
        f2.style.color = 'black';
    } else {
        f3.style.color = 'black';
    }
}
