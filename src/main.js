'use strict';

function throttle(callback, delay){
    let timeoutId = null;
    return function(...args){
        if(timeoutId){return;}
        timeoutId = setTimeout(()=>{
            callback.apply(this,args);
            timeoutId=null;
        },delay)
    }
}
function headerFilling(){
    const headerEl = document.querySelector('#header');
    const rect = headerEl.getBoundingClientRect();
    
    if(window.scrollY>rect.height){
        headerEl.classList.add('header--filled');
    }else{
        headerEl.classList.remove('header--filled');
    }

}
function scrollFadeInOut(){
    const elArrs = document.querySelectorAll('.fade-in-out');
    const padding=window.innerHeight*1;
    elArrs.forEach(el=>{
        const rect = el.getBoundingClientRect();
        elTop = rect.top;
        elBottom = rect.bottom;
        if(elBottom>0&&elBottom<window.scrollY+padding){
            el.style.opacity=elBottom/padding;
        }
        if(elTop<window.innerHeight && elTop>window.innerHeight+padding){
            el.style.opacity=(window.innerHeight-elTop/padding);
        }

    })
}
function arrowUpDisplay(){
    const arrowEl=document.querySelector('.arrow-up')
    if(window.scrollY>(window.innerHeight/3)){
        arrowEl.style.opacity=1;
    }else{
        arrowEl.style.opacity=0;
    }
}

window.addEventListener('scroll',throttle(headerFilling,300))
window.addEventListener('scroll',throttle(arrowUpDisplay,300))

const navEl=document.querySelector('.header__nav');
document.querySelector('.header__bars').addEventListener('click',()=>{
    navEl.classList.toggle('media--hide');
})
document.querySelector('.header__menu').addEventListener('click',(target)=>{
    navEl.classList.add('media--hide');
    // document.querySelector('.header__menu__item--active').classList.remove('header__menu__item--acti');
    // target.target.classList.add('header__menu__item--acti');
})

