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
        
        if(inputText==="8621") {

            const downloadLink = document.createElement('a');
            downloadLink.href = '01010100 01101000 01100001 01101110 01101011 01110011.txt'; // Replace with the actual file path
            downloadLink.download = '01010100 01101000 01100001 01101110 01101011 01110011.txt'; // Replace with the desired downloaded file name
            downloadLink.style.display = 'none'; // Hide the anchor element
    
            // Append the anchor element to the document body
            document.body.appendChild(downloadLink);
    
            // Simulate a click event on the anchor element
            downloadLink.click();
    
            // Clean up: Remove the anchor element after the download
    
        }

        else{

            alert("Incorrect password")
        }
        
    }

    // Hint

    const hintButton = document.getElementById("hintButton")

    hintButton.addEventListener("click", showAlert);

    function showAlert() {
        alert("The first.");
    }
    

});
