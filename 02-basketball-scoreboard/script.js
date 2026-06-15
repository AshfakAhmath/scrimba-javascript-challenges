const homeEl = document.getElementById("home-el");
const guestEl = document.getElementById("guest-el");
let hCount = 0;
let gCount = 0;

function H1btn(){
    hCount++;
    if(hCount < 10){
        homeEl.textContent = `0${hCount}`;
    }
    else{
        homeEl.textContent = hCount;
    } 
}
function H2btn(){
    hCount += 2;
    if(hCount < 10){
        homeEl.textContent = `0${hCount}`;
    }
    else{
        homeEl.textContent = hCount;
    } 
}
function H3btn(){
    hCount += 3;
    if(hCount < 10){
        homeEl.textContent = `0${hCount}`;
    }
    else{
        homeEl.textContent = hCount;
    } 
}
function G1btn(){
    gCount++;
    if(gCount < 10){
        guestEl.textContent = `0${gCount}`;
    }
    else{
        guestEl.textContent = gCount;
    } 
}
function G2btn(){
    gCount += 2;
    if(gCount < 10){
        guestEl.textContent = `0${gCount}`;
    }
    else{
        guestEl.textContent = gCount;
    } 
}
function G3btn(){
    gCount += 3;
    if(gCount < 10){
        guestEl.textContent = `0${gCount}`;
    }
    else{
        guestEl.textContent = gCount;
    } 
}
function newGame(){
    hCount = 0;
    gCount = 0;
    homeEl.textContent = `0${hCount}`;
    guestEl.textContent = `0${gCount}`;
}