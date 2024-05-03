const hamButton = document.querySelector("#menu");
const navigation = document.querySelector('nav');
const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('modified');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modification: ${document.lastModified}`;