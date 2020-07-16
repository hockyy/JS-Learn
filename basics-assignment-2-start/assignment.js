function hockyGreet(){
    alert("Ssup guys");
    return;
}

function greet(name){
    alert(`Hi, ${name}`);
    return;
}

function concatenate(a, b, c){
    return (`${a} ${b} ${c}`);
}

a = concatenate("yolanda", "emanuella", "sutanto");
alert(a)
hockyGreet();
greet('Max');
const task3Element = document.getElementById('task-3');
task3Element.addEventListener('mouseover',hockyGreet);