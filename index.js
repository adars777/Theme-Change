const dark ='Click for Dark Mode';
const light = 'Click for Light Mode'

let btn = document.querySelector("button");
let modeBtn = document.querySelector(".btnText");
let imgSrc = document.querySelector("img").getAttribute("src");
console.log(imgSrc);
let body = document.querySelector("body");

btn.addEventListener("click",()=>{

if(modeBtn.innerText === dark){
    modeBtn.innerText = light;
    document.querySelector("img").setAttribute("Src","assests/lightMode.png");
    
    body.classList.add("darkMode");
    body.classList.remove("lightMode");
    btn.classList.add("btnLight");
    btn.classList.remove("btnDark");
   
}    
else if(modeBtn.innerText === light){
    modeBtn.innerText = dark;
    document.querySelector("img").setAttribute("Src","assests/darkMode.png");
    document.querySelector("img").style.height="20px";
    body.classList.add("lightMode");
    body.classList.remove("darkMode");
    btn.classList.add("btnDark");
    btn.classList.remove("btnLight");
    
}
});