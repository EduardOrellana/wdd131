
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

//DisplayMenu------------------------------------------------------------------------------
const globalHeader = document.querySelector('header');
const displayButton = document.querySelector('#display-menu');

displayButton.addEventListener('click', () =>{
	globalHeader.classList.toggle('open');
	displayButton.classList.toggle('open');
	navigation.classList.toggle('open');
})