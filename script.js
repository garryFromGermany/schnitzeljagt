var f2 = document.getElementById('frage2');
var f3 = document.getElementById('frage3');
var a1;

function func1(){
    a1 = document.getElementById("antwort1");
    if (a1.value == "hi"){
        f2.style.color = 'black';
    } else {
        f3.style.color = 'black';
    }
}
