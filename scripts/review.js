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

sumLocalStorage();

//Footer
const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('modified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modification: ${document.lastModified}`;