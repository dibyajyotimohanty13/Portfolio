let body=document.querySelectorAll('body');
let theme= document.querySelector('.theme');
let sun=document.querySelector('.icon-sun');
let moon=document.querySelector('.icon-moon');
theme.onclick = function(){
    document.body.classList.toggle("dark");
}