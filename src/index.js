import {
    mission,
    menu,
    contact
} from './pageload';
let contentHolder = document.querySelector("#content-holder");
//get the content div
const MainController = (function () {
    //initially start on the mission tab
    mission(contentHolder);


    //add event listeners for the tabs
    let options = document.querySelectorAll(".nav__btn");

    options.forEach(() => addEventListener('click', trigger));
    window.addEventListener('focusin', tabbed);
})();

function tabbed(e){
    document.activeElement.click();
}
function trigger(e) {
    let tabType = e.toElement.getAttribute("data-load");
    if (tabType === "mission") {
        mission(contentHolder);
    } else if (tabType === "menu") {
        menu(contentHolder);
    } else if (tabType === "contact") {
        contact(contentHolder);
    }
}

