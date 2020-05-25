function random(random){
    return Math.floor(Math.random() * Math.floor(random));
}

function first(){
    let e = document.getElementById("ex1");
    let color = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    e.style.backgroundColor = color;
}

function main(){
    let ex = document.getElementById("ex1");
    ex.addEventListener("click", first);
}

main();