
function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";

  
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";

 
}

// Show the popup on page load
window.onload = showPopup;

// Close the popup when the close button is clicked
document.getElementById("close-button").addEventListener("click", closePopup);
