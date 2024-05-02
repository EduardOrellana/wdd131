//This file will be the Script of the week 02 activity.


const button = document.querySelector('button');


button.addEventListener('click', function() {

    const input = document.querySelector("#favchap");
    const list = document.querySelector("#list");
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    if (input.value.trim() !== '') {
        
        li.textContent = input.value;
        deleteButton.textContent = "X";

        deleteButton.addEventListener('click', function(){
            list.removeChild(li);
            input.focus()
        })

        li.append(deleteButton);

        list.append(li);

        input.value = '';

    }
    else {
        input.focus();
        console.log("the input is empty");
    }

});







