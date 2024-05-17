const array = ['one', 'two', 'three'];

const stepsHtml = array.map((step) => `<li>${step}</li>`);

// const stepsHtml = steps.map(function (step) {
//     return `<li>${step}</li>`;
// });


document.getElementById("myList").innerHTML = stepsHtml.join(' ');

const lettes = ['A', 'B', 'A'];

function converToGPApoints(letter){

    let points = 0;
    
    switch (letter)
    {
        case "A":
            points = 4;
            return points;
            break;
        case "B":
            points = 3;
            return points;
            break;
        default:
            return points;
            break;
    }

}



const gpaPoints = lettes.map(converToGPApoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

// example 2
// this is the same thing as above, but with an arrow function
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.length;

// this could be further simplified as
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;