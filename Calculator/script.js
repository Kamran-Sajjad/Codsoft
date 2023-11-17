
let screen="0";
document.querySelector('input').value=screen;
let buttons=document.querySelectorAll('.btn');

Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='='){
        screen=eval(screen);
        document.querySelector('input').value=screen;
    }
    else if(e.target.innerHTML=='Clear'){
        screen="";
        document.querySelector('input').value=screen;
    }
    else{
        screen += e.target.innerHTML;
        document.querySelector('input').value=screen;
    }
})
})


