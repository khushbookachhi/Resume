console.log('working');
// let horizontalList=document.querySelector('horizontal-list');
let navmenuAnchorTags=document.querySelectorAll('.nav-menu a');
// console.log(navmenuAnchorTags);
for(let i=0; i<navmenuAnchorTags.length; i++){
   navmenuAnchorTags[i].addEventListener('click', (e)=>{
    e.preventDefault();
    let targetSectionId=navmenuAnchorTags[i].textContent.trim().toLowerCase();
    if(targetSectionId=='home'){
        return;
    }
    let targetSection= document.getElementById(targetSectionId);
    
    // console.log(targetSectionCordinates);
    var interval=setInterval(()=>{
        let targetSectionCordinates=targetSection.getBoundingClientRect();
        
        if(targetSectionCordinates.top<=0){
            
            clearInterval(interval);
            return;
        }
        if(targetSectionId=='contact' && targetSectionCordinates.top<=10){
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,50);
       },20);
   });
   
}
let skillsContainer=document.getElementById('skills-container');
 let skillProgress=document.querySelectorAll('.skill-progress>div');
 
 
window.addEventListener('scroll', checkScroll);

function initializeBar(bar){
    bar.setAttribute("data-visited", false);
  bar.style.width=0+'%'; 
}

for(let bar of skillProgress){
    initializeBar(bar);
}
function fillBars(progress){
   
    // for(let bar of skillProgress){
        let targetWidth=progress.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>=targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            progress.style.width=currentWidth +'%';
        },5);
    }
// }

function checkScroll(){
   
    for(let progress of skillProgress){
        // animationDone=false;
        let skillsContainerCordinate=progress.getBoundingClientRect();  
        if((progress.getAttribute("data-visited")=="false") && 
        skillsContainerCordinate.top<=window.innerHeight-skillsContainerCordinate.height){
        
            console.log('animation is done');
            progress.setAttribute("data-visited", true);
             
             fillBars(progress);
             
        }else if(skillsContainerCordinate.top>window.innerHeight){
            progress.setAttribute("data-visited",false);
            initializeBar(progress);
            
        }
    }
   
    
    
}

