document.addEventListener("DOMContentLoaded", function() {

    const userInput = document.getElementById("userInput");

    userInput.addEventListener("keydown", function(event) {

        if (event.keyCode === 13) {
            performAction();
        }

    });

    // Password

    function performAction() {

        const inputText = userInput.value.trim();
        
        
        if(inputText==='am i the best? 8621') {

            window.location.href = 'inkandintrigue-P1.html';
        }

        else{

            alert("Incorrect password")
        }
        
    }


});
