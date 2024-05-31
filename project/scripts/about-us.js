
//Date and Copyright---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('modified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modification: ${document.lastModified}`;

const containerTips = document.getElementById("post");
const carousel = document.getElementById("carousel");


//HamButton---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});