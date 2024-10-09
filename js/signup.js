document.getElementById("signUpForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const userName = document.getElementById("userName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const newUser = { userName, email, password, userSubed: false };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(user => user.email === email || user.userName === userName);
    if (existingUser) {
        alert("Email or Username is already registered. Please log in.");
        return;
    }

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign up successful! You can now log in.");
    window.location.href = "login.html";
});