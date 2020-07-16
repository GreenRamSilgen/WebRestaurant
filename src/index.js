import { mission, menu, contact } from './pageload';

//get the content div
const MainController = (function(){
    let contentHolder = document.querySelector("#content-holder")
    //initially start on the mission tab
    mission(contentHolder);

    
    //add event listeners for the tabs
    let options = document.querySelectorAll(".nav__btn");
    options.forEach((element) =>{
        element.addEventListener('click',()=>{
            if(element.getAttribute("data-load") === "mission"){
                mission(contentHolder);
            }else if(element.getAttribute("data-load") === "menu"){
                menu(contentHolder);
            }else if(element.getAttribute("data-load") === "contact"){
                contact(contentHolder);
                console.log("YO");
            }
        });
    });
})();
