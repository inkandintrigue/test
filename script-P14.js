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
        
        if(inputText==="my revenge") {

            window.location.href = 'inkandintrigue-P15.html';
        }

        else{

            alert("Incorrect password")
        }
        
    }

    // Audio button

    const fixedVolume = 0.2;
    const playButton = document.getElementById("playButton");
    const audioPlayer = document.getElementById("audioPlayer");

    audioPlayer.volume = fixedVolume;


    playButton.addEventListener("click", function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.textContent = "Pause";
        } else {
            audioPlayer.pause();
            playButton.textContent = "Play";
        }
    }); 

    // Hint

    const hintButton = document.getElementById("hintButton")

    hintButton.addEventListener("click", showAlert);

    function showAlert() {
        alert("Get help from sites or programs.");
    }
    


});
