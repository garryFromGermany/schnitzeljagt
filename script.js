var f2 = document.getElementById('frage2');
var f3 = document.getElementById('frage3');

function func1(){
    var a1 = document.getElementById("antwort1");
    var lsg = "689";
    if (a1.equals(lsg)){
        f2.style.color = 'black';
    } else {
        f3.style.color = 'black';
    }
}
