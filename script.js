let body=document.querySelectorAll('body');
let theme= document.querySelector('.theme');
let sun=document.querySelector('.icon-sun');
let moon=document.querySelector('.icon-moon');
theme.onclick = function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark"))
    {
        sun.disabled=true;
        moon.disabled=false;
    }
    else{
        sun.disabled=false;
        moon.disabled=true;
    }
}