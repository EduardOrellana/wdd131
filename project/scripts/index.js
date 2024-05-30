const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('modified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modification: ${document.lastModified}`;

//collections of images "tips"
const containerTips = document.getElementById("post");
const tips = [
{
    tipName: "mito1",
    source: "images/post/mito1.webp"
},
{
    tipName: "realidad1",
    source: "images/post/realidad1.webp"
},
{
    tipName: "mito2",
    source: "images/post/mito2.webp"
},
{
    tipName: "realidad2",
    source: "images/post/realidad2.webp"
},
{
    tipName: "mito3",
    source: "images/post/mito3.webp"
},
{
    tipName: "realidad3",
    source: "images/post/realidad3.webp"
}
]

function displayTips(object) {
    //This function will display the all tips
    object.forEach(element => {
        //this loop will run through the object and diplay them

        const slot = document.createElement("section");
        slot.setAttribute("class", "slots");

        const nameTip = document.createElement("h4");
        nameTip.setAttribute("class", "titleTip");
        nameTip.textContent = `${element.tipName}`;

        const srcTip = document.createElement("img");
        srcTip.setAttribute("src", element.source);
        srcTip.setAttribute("alt", `myths and realities`);
        srcTip.setAttribute("loading", "lazy");
        srcTip.setAttribute("width", "300");
        srcTip.setAttribute("height", "300");

        slot.appendChild(nameTip);
        slot.appendChild(srcTip);
        
        containerTips.appendChild(slot)

    });
}

displayTips(tips)

//Button to scroll up to top

const buttonToUp = document.querySelector(".logo-footer button");

buttonToUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth"});
});


//HamButton
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

