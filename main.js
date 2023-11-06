'use strict'

const apiUrl = "https://api.adviceslip.com/advice";


const button = document.getElementById("newAdvice");

button.onclick = function() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("advice").innerHTML = data.slip.advice;
            document.getElementById("id").innerHTML = data.slip.id;
        })
        .catch(error => {
            console.error("Error fetching advice:", error);
        });
}
