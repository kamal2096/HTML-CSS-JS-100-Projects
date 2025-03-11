const btn=document.getElementById("btn");
let hex=document.getElementById("hexcode");

function randomColor(){
    let letters="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
    }
    btn.addEventListener("click",function(){
        let color=randomColor();
        document.body.style.backgroundColor=color;
        hex.innerHTML=color;
    });
