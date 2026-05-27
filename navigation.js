// Event listener for the "Sign up here" link on the login page
document.getElementById('goToSignup')?.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    window.location.href = 'Signup.html'; // Redirect to the signup page
});

// Event listener for the "Log in here" link on the signup page
document.getElementById('goToLogin')?.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    window.location.href = 'Login.html'; // Redirect to the login page
});

//Event listener for the "Homepage" link on home page
document.getElementById('goToHome')?.addEventListener('click', function(event) {
    event.preventDefault();//prevent the default anchor behavior
    window.location.href = 'Home.html';//Redirect the home page 
});
//Event listener for the "About" link on About page
document.getElementById('gotoAbout')?.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'About.html';
}); 

document.getElementById('googleBtn')?.addEventListener('click', function() {
    window.open('https://www.google.com/', '_blank'); // Opens Facebook in a new tab
});

document.getElementById('twitterBtn')?.addEventListener('click', function() {
    window.open('https://www.twitter.com/', '_blank'); // Opens Twitter in a new tab
});

document.getElementById('telegramBtn')?.addEventListener('click', function() {
    window.open('https://web.telegram.org/', '_blank'); // Opens Telegram Web in a new tab
});
/*document.getElementById("readMoreButton").addEventListener("click", function() {
    // Redirect to the desired page
    window.location.href = "ConferencEManag.html"; // Replace with your target page URL
  });
  document.getElementById("readMoreButton").addEventListener("click", function() {
    // Redirect to the desired page
    window.location.href = "Registration.html"; // Replace with your target page URL
  });
  document.getElementById("readMoreButton").addEventListener("click", function() {
    // Redirect to the desired page
    window.location.href = "Publishing.html"; // Replace with your target page URL
  });
  document.getElementById("readMoreButton").addEventListener("click", function() {
    // Redirect to the desired page
    window.location.href = "Smart Slide.html"; // Replace with your target page URL
  });*/
  