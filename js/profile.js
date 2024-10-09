document.addEventListener("DOMContentLoaded", function() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUserEmail = localStorage.getItem("loggedInUserEmail") || "";


    const loggedInUser = users.find(user => user.email === loggedInUserEmail);

    if (loggedInUser) {
        document.getElementById("userName").textContent = loggedInUser.userName;
        document.getElementById("email").textContent = loggedInUser.email;

        const firstLetter = loggedInUser.userName.charAt(0).toUpperCase();
        document.querySelector(".circle p").textContent = firstLetter;
    } else {
        document.getElementById("userName").textContent = "User not found";
        document.getElementById("email").textContent = "Email not found";
    }

    const currentUser = users.find(user => user.email === loggedInUserEmail);
    let head = document.querySelector(".content h2");
    if (currentUser && currentUser.userSubed) {
        head.textContent = "A Subscriber Of Dress & Decor.";
    }
    else {
        head.style.visibility = "hidden";
        head.style.margin = "-10px";
    }

    document.getElementById("logOut").addEventListener("click", function() {
        const confirmation = confirm("Are you sure you want to log out?");
        
        if (confirmation) {
            localStorage.setItem("isLoggedIn", "false");
            localStorage.setItem("userSubed", "false");
            localStorage.removeItem("loggedInUserEmail");
localStorage.removeItem("userName");
            window.location.href = "../index.html";
        }
    });
});