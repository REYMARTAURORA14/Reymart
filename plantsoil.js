setTimeout(function() {
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}, 5000); // 4000 milliseconds = 4 seconds

// setTimeout(() => {
//     window.location.href = 'login.html'; // Redirect to login page
// }, 3000); 

// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // For demonstration, use static credentials
//     if (username === 'user' && password === 'password') {
//         // Redirect to the main content after successful login
//         window.location.href = 'index.html'; // Change to your main screen filename
//     } else {
//         // Show error message if login fails
//         document.getElementById('error-message').style.display = 'block';
//     }
// });