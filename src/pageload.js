const mission = (contentHolder) => {
    //clear the content
    let content = document.querySelector("#content");
    contentHolder.removeChild(content);

    //create newContent
    let newContent = document.createElement("div");
    newContent.setAttribute("id", "content");

    //add short message for viewers
    let mission = document.createElement("div");
    mission.textContent = "Our mission is to give our customers a place to celebrate lifes special moments by offering the best food, service, and ambiance in California.";


    //append title, img/logo, and short msg to content div.
    newContent.appendChild(mission);

    //re-add content to content-holder
    contentHolder.appendChild(newContent);
};

const menu = (contentHolder) => {
    //clear old content
    let content = document.querySelector("#content");
    contentHolder.removeChild(content);

    //create new content
    let newContent = document.createElement("div");
    newContent.setAttribute("id", "content");

    //add short message for viewers
    let mission = document.createElement("div");
    mission.textContent = "Flamin Burger \n Flamin Steak";


    //append title, img/logo, and short msg to content div.
    newContent.appendChild(mission);

    //re-add content to content-holder
    contentHolder.appendChild(newContent);
}

const contact = (contentHolder) => {
    //clear old content
    let content = document.querySelector("#content");
    contentHolder.removeChild(content);

    //create new content
    let newContent = document.createElement("div");
    newContent.setAttribute("id", "content");

    //add short message for viewers
    let mission = document.createElement("div");
    mission.textContent = "Email: notrealemail@email.com \n Phone: 1-800-FAKE";


    //append title, img/logo, and short msg to content div.
    newContent.appendChild(mission);

    //re-add content to content-holder
    contentHolder.appendChild(newContent);
}
export {
    mission,
    menu,
    contact
}