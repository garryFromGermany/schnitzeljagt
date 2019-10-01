var f2 = document.getElementById('f2');
var f3 = document.getElementById('f3');

function func1(){
    var a1 = document.getElementById("a1");
    if (a1.value == "689"){
        f2.style.color = 'black';
    } else if (a1.value == "000"){
        f2.style.color = 'black';
    } else {
        a1.value = "";
    }
}

