document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".copy-me");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Copy the text to the clipboard using the Clipboard API
            navigator.clipboard.writeText(button.textContent).then(function() {
                // Optionally, give some feedback to the user
                alert("Text copied to clipboard: " + button.textContent);
            }).catch(function(error) {
                console.error("Error copying text: ", error);
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelectorAll(".copy-only-numbers");

    if (button) {
        button.addEventListener("click", function() {
            // Get the button text and clean it to contain only numbers
            var cleanedText = button.textContent.replace(/\D/g, '');

            // Copy the cleaned text to the clipboard using the Clipboard API
            navigator.clipboard.writeText(cleanedText).then(function() {
                // Optionally, give some feedback to the user
                alert("Text copied to clipboard: " + cleanedText);
            }).catch(function(error) {
                console.error("Error copying text: ", error);
            });
        });
    }
});