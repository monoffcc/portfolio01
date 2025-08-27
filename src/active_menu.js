'use strict';

const activeMenu=(entries)=>{
    entries.filter(entry=>entry.isIntersecting)
    .forEach(entry=>{
        setMenuActive(entry);
        // console.log(`${entryId} : ${entry}`)
    });
};
const observer = new IntersectionObserver(activeMenu,{rootMargin:'-20% 0px -80% 0px',threshold:[0,0.99]})
document.querySelectorAll('.section').forEach(el=>observer.observe(el));

// (new IntersectionObserver((entires)=>setMenuActive(entires[0]),{threshold:0.99})).observe(document.querySelector('#contact'))

function setMenuActive(entry) {
    const entryId = entry.target.getAttribute('id');
    document.querySelector('.header__menu__item--active')?.classList.remove('header__menu__item--active');
    document.querySelector(`#menu_${entryId}`)?.classList.add('header__menu__item--active');
}
