const mission = (contentHolder) => {
    //clear the content
    let content = document.querySelector(".content");
    contentHolder.removeChild(content);

    //create newContent
    let newContent = document.createElement("div");
    newContent.setAttribute("class", "content");

    //add short message for viewers
    let mission = document.createElement("div");
    mission.textContent = "Our mission is to give our customers a place to celebrate lifes special moments by offering the best food, service, and ambiance in California.";

    let description = document.createElement("div");
    description.textContent = "We are the home of the best K-BBQ. Our meats are freshy cut on the day and our produce are of the highest quality. Our interior dining areas are also the cleanest with state of the art anti-smoke ventilation for a clean and enjoyable dining expreience.";

    //append title, img/logo, and short msg to content div.
    newContent.appendChild(mission);
    newContent.appendChild(description);
    //re-add content to content-holder
    
    contentHolder.appendChild(newContent);
    window.location.hash = '#mission';
};

const menu = (contentHolder) => {
    //clear old content
    let content = document.querySelector(".content");
    contentHolder.removeChild(content);

    //create new content
    let newContent = document.createElement("div");
    newContent.setAttribute("class", "content content__menu");

    //add short message for viewers
    for(let i = 1; i < 4; i++)
    {
        //create elements
        let group = document.createElement("div");
        let menuOp = document.createElement("div");
        let op1 = document.createElement("div");
        let op2 = document.createElement("div");
        let op3 = document.createElement("div");
        let op4 = document.createElement("div");
        let op5 = document.createElement("div");
        let op6 = document.createElement("div");
        let op7 = document.createElement("div");

        //elemetn TEXT CONTENT
        menuOp.textContent = `$${10*i}.00 OPTION`;
        op1.textContent = `Bulgogi (${i})`;
        op2.textContent = `Dak Bulgogi (${i})`;
        op3.textContent = `Dwaejigogi (${i})`;
        op4.textContent = `Samgyupsal Gui (${i})`;
        op5.textContent = `Dwaeji Galbi (${i})`;
        op6.textContent = `Salmon Bulgogi (${i})`;
        op7.textContent = `Squid (${i})`;


        //Append to GROUP
        group.appendChild(menuOp);
        group.appendChild(op1);
        group.appendChild(op2);
        group.appendChild(op3);
        group.appendChild(op4);
        group.appendChild(op5);
        group.appendChild(op6);
        group.appendChild(op7);
        
        //add group to content page
        newContent.appendChild(group);
    }
    //append title, img/logo, and short msg to content div.
    

    //re-add content to content-holder
    contentHolder.appendChild(newContent);
}

const contact = (contentHolder) => {
    //clear old content
    let content = document.querySelector(".content");
    contentHolder.removeChild(content);

    //create new content
    let newContent = document.createElement("div");
    newContent.setAttribute("class", "content");

    let email = document.createElement("div");
    email.textContent = "Email: notrealemail@email.com";
    let phone = document.createElement("div");
    phone.textContent = "Phone: 1-800-FAKE";
    let yelp = document.createElement("div");
    yelp.textContent = "Yelp: TheFire@gogi";
    let facebook = document.createElement("div");
    facebook.textContent = "Facebook: TheFirePlace";
    //append title, img/logo, and short msg to content div.
    newContent.appendChild(email);
    newContent.appendChild(phone);
    newContent.appendChild(yelp);
    newContent.appendChild(facebook);
    //re-add content to content-holder
    contentHolder.appendChild(newContent);
}
export {
    mission,
    menu,
    contact
}