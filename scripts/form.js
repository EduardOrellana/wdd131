//Footer

const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('modified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modification: ${document.lastModified}`;

//Rest of the Code

//Addint more options into the Select

let productsBox = document.getElementById('product-name');

//Array of more options
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },      
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function displayProducts(product){

    products.forEach(index => {

        const box = document.createElement("option");
        
        box.value = index.id;
        box.textContent = index.name;

        //Append the new objects

        productsBox.appendChild(box);

    });

}

//calling the function
displayProducts(productsBox);


//Counting and localStorage
const textCount = document.getElementById("count");
const buttonForm = document.querySelector('input[type="submit"');
let countLocalStorage = Number(window.localStorage.getItem("countingForm")) || 1;



function sumLocalStorage(){
    //This function will exucate each time the form was sent.
    countLocalStorage ++;
    window.localStorage.setItem("countingForm");
    textCount.textContent = `Thanks! this was your ${countLocalStorage} time`;
}

buttonForm.addEventListener("click", sumLocalStorage)



//Return to the Form

const retunButton = document.querySelector("button");

retunButton.addEventListener("click", function(){
    window.history.back;
})

