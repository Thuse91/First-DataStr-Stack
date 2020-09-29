
let stack = [];


function inputValue(){
    stack.push(document.getElementById("box").value);
    document.getElementById("output").innerHTML += stack + "<br>";
    console.log(stack)
}

function del(){
    stack.pop(stack);
    document.getElementById("output").innerHTML += stack + "<br>";
}

function show(){
    document.getElementById("output").innerHTML += stack + "<br>";
}