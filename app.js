let gamesqe=[];
let usersqe=[];
let btnn = ['yellow','green','purple','red'];

let h3 = document.querySelector('h3');

let started = false;
let level = 0;

document.addEventListener('keypress',function (){
    if(started == false){
        started = true;
        levelup();  
    }
})

function levelup(){
    usersqe=[];
    level++;
    h3.innerText= `Level ${level}`;
    randIdx = Math.floor(Math.random()*3);
    colorRandom = btnn[randIdx];
    gamesqe.push(colorRandom);
    randombtn =  document.querySelector(`.${colorRandom}`);
    console.log(`randIdx = ${randIdx}`);
    console.log(`colorRandom = ${colorRandom}`);
    console.log(`btnx = ${randombtn}`);
    btnflash(randombtn);
}

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash")
    },250);
}

function checkanswer(indexx)
{
    if(gamesqe[indexx]==usersqe[indexx]){
        if(gamesqe.length==usersqe.length){
            setTimeout(levelup,1000);
        }
    } 
    else{
        gameover();
    }
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash")
    },250);
    btncolor = btn.getAttribute("id");
    usersqe.push(btncolor);

    checkanswer(usersqe.length-1);
}

function btnpress(){
    let btn = this;
    userflash(btn);

}

let allbtn = document.querySelectorAll(".btn");

for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function gameover(){
    h3.innerText = "GAMEOVER!"
    h3.style.color = "white";
    b = document.querySelector("body");
    b.style.backgroundColor = "red";
}
