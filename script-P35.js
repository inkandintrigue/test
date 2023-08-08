document.addEventListener("DOMContentLoaded", function() {

    const userInput = document.getElementById("userInput");
    const shineEffect = document.getElementById("shineEffect");

    userInput.addEventListener("keydown", function(event) {

        if (event.keyCode === 13) {
            event.preventDefault();
            performAction();
        }

    });

    // Password

    function performAction() {

        const inputText = userInput.value.trim();
    
        if (inputText === "hope") {

            shineEffect.classList.add("glow-animation");

            setTimeout(() => {

                shineEffect.classList.remove("glow-animation");
                window.location.href = 'inkandintrigue-end.html';
            }, 3200);

        } else {

            alert("Incorrect password");

        }
   
    }

    
    // Hint

    const hintButton = document.getElementById("hintButton")

    hintButton.addEventListener("click", showAlert);

    function showAlert() {
        alert("~");
    }
    

});
