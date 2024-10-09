document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const input = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const storedUser = users.find(user => (user.email === input || user.userName === input) && user.password === password);

    if (storedUser) {
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedInUserEmail", storedUser.email);
        localStorage.setItem("userName", storedUser.userName);
        window.location.href = "../index.html";
    } else {
        alert("Incorrect email/username or password.");
    }
});
