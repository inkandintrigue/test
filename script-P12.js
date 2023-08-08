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
        
        if(inputText==="let me remember") {

            window.location.href = 'inkandintrigue-P13.html';
        }

        else{

            alert("Incorrect password")
        }
        
    }

    // Hint

    const hintButton = document.getElementById("hintButton")

    hintButton.addEventListener("click", showAlert);

    function showAlert() {
        alert("DNA to RNA or vice versa // 3 in hint = 'n'.");
    }
    


});
