// Javascript code to dynimac the web page 

//Variables and the all DOM "HTML" elements for output

const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('modified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modification: ${document.lastModified}`;