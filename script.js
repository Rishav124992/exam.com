let submit = document.querySelector(".login");

const users = [
    {
        username: "rishav_kumar124992",
        passward: "rishav"
    },
    {
        username: "IGCIM COMPUTER CENTER",
        passward: "MUNGER"
    },
    {
        username: "IGCIM COMPUTER CENTER",
        passward: "FARDA"
    }
]
document.getElementById("login_form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const inputUsername = document.getElementById("username").value;
    const inputPassword = document.getElementById("password").value;

    // Check if the username and password match any user in the array
    const user = users.find(user => user.username === inputUsername && user.passward === inputPassword);

    if (user) {
        alert("Login successful!");
        // Redirect to another page or perform other actions
        window.location.href = "./pages/validation.html"; // Example redirect
    } else {
        alert("Invalid username or password.");
    }
});



