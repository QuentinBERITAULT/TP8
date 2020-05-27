function pointe(){
    let button = document.getElementById("ex2");
    button.style.backgroundColor = "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";

}

function afficher(p){
    let a = p.clientX;
    let b = p.clientY;
    console.log("Location: a="+ a +"b="+ b);
    let button = document.getElementById("ex2");
    button.style.backgroundColor = "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")"
}

function main(){
    let ex = document.getElementById("ex2");
    ex.onclick = pointe;
    ex.onmousemove = afficher;
}

main();