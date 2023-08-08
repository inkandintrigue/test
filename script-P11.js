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
        
        if(inputText==="beowulf help") {

            window.location.href = 'inkandintrigue-P12.html';
        }

        else{

            alert("Incorrect password")
        }
        
    }

    // Hint

    const hintButton = document.getElementById("hintButton")

    hintButton.addEventListener("click", showAlert);

    function showAlert() {
        alert("Answer as if you are the voices.");
    }
    


});
