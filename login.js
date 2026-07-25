// Wait until the page is fully loaded
document.getElementById("loginForm").addEventListener("submit", function(event) {

    // Prevent form from refreshing the page
    event.preventDefault();

    // Get username and password
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Check login credentials
    if (username === "admin" && password === "1234") {

        // Save login status
        localStorage.setItem("loggedIn", "true");

        // Redirect to dashboard
        window.location.href = "dashboard.html";

    } else {

        // Show error message
        document.getElementById("message").innerHTML =
        "Invalid Username or Password";

    }

});