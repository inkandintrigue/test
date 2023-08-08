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
        
        if(inputText==="dark whispers echo") {

            window.location.href = 'inkandintrigue-P17.html';
        }

        else{

            alert("Incorrect password")
        }
        
    }

    // Hint

    const hintButton = document.getElementById("hintButton")

    hintButton.addEventListener("click", showAlert);

    function showAlert() {
        alert("There are hidden messages in the dark.");
    }
    


});
