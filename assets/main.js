let username = document.getElementById("name");
let butt = document.getElementById("butt");
let par = document.getElementById("text");

function Greeting(){
    butt.addEventListener('click', ()=>{
        par.innerText = `Hello ${username.value} , Welcome to bootcamp`;
    })
}


Greeting();