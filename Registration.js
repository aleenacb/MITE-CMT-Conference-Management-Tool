/*document.getElementById("readMoreButton").addEventListener("click", function() {
    // Redirect to the desired page
    window.location.href = "ConferencEManag.html"; // Replace with your target page URL
  });*/
  // script.js
document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", function() {
    const targetPage = this.dataset.target; // Get the target page from the data attribute
    window.location.href = targetPage;      // Navigate to the specified page
  });
});

  