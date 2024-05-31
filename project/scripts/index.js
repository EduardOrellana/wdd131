const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('modified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modification: ${document.lastModified}`;

//collections of images "tips"------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const containerTips = document.getElementById("post");
const carousel = document.getElementById("carousel");



//Object---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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

        // slot.appendChild(nameTip);
        slot.appendChild(srcTip);
        
        containerTips.appendChild(slot)

    });
}

function displayTips2(object) {
    //This function will display the all tips
    object.forEach(element => {
        //this loop will run through the object and diplay them
        
        let car_item;

        if (element.tipName == "mito1")
        {
            car_item = document.createElement("div");
            car_item.setAttribute("class", "carousel_item carousel_item--visible");
        }
        else{
            car_item = document.createElement("div");
            car_item.setAttribute("class", "carousel_item");
        }

        const srcTip = document.createElement("img");
        srcTip.setAttribute("src", element.source);
        srcTip.setAttribute("alt", `myths and realities`);
        srcTip.setAttribute("loading", "lazy");
        srcTip.setAttribute("width", "300");
        srcTip.setAttribute("height", "300");

        car_item.appendChild(srcTip);        
        carousel.appendChild(car_item)

    });

    // Create buttons
    const car_actions = document.createElement("section");
    car_actions.setAttribute("class", "carousel_actions");

    const next_tip = document.createElement("button");
    next_tip.setAttribute("id", "carousel_button_next");
    next_tip.setAttribute("aria-label", "Previous slide")
    next_tip.textContent = ">";

    const last_tip = document.createElement("button");
    last_tip.setAttribute("id", "carousel_button_prev");
    last_tip.setAttribute("aria-label", "Previous slide")
    last_tip.textContent = "<"

    car_actions.appendChild(last_tip);
    car_actions.appendChild(next_tip);

    carousel.appendChild(car_actions);

}

displayTips(tips);
displayTips2(tips);


//Button to scroll up to top---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const buttonToUp = document.querySelector(".logo-footer button");

buttonToUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth"});
});


//HamButton---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//Carousel------------------------------------------------------------------------------------------------------------------------------------------------------

let slidePosition = 0;

const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

const buttonPrev = document.getElementById("carousel_button_prev");
const buttonNext = document.getElementById("carousel_button_next");

buttonPrev.addEventListener("click", moveToPrevSlide);

buttonNext.addEventListener("click", moveToNextSlide);

function updateSlidePosition(){
    for (let slide of slides){
        slide.classList.remove('carousel_item--visible');
        slide.classList.add('carousel_item--hidden');
    }

    slides[slidePosition].classList.add('carousel_item--visible')
}

function moveToPrevSlide()
{
    updateSlidePosition();
    if (slidePosition == 0)
        {
            slidePosition = 0;
        }else{

            slidePosition --;

        }
};

function moveToNextSlide()
{
    updateSlidePosition();
    if (slidePosition == totalSlides - 1)
        {
            slidePosition = 0;
        }else{

            slidePosition++;

        }
};