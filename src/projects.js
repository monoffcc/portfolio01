'use strict';


const projectContainer=document.querySelector('.projects');
const projectList=document.querySelectorAll('.project');
document.querySelector('.categories').addEventListener('click',(evt)=>{
    if(!evt.target.matches('button.category')){return;}

    handleActiveSelection(evt.target)

    projectContainer.classList.add('anim-out');

    setTimeout(()=>{
        projectContainer.classList.remove('anim-out');
        filterProjects(evt.target);
    },250)
});
function filterProjects(target) {
    const tag = target.dataset.projectTag;
    projectList.forEach(el => {
        if (tag == 'all' || tag == el.dataset.projectTag) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });
}

function handleActiveSelection(target){
    document.querySelector('.category--selected').classList.remove('category--selected');
    target.classList.add('category--selected');
}