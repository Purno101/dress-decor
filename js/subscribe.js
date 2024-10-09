const subBtn = document.getElementById("subBtn");
const unSubBtn = document.getElementById("unSubBtn");
const head = document.querySelector(".content h1");
const pGraph = document.querySelector(".content p");
const unSubPGraph = document.querySelector(".unsubCont");

unSubBtn.addEventListener("click", unSubFunc);

unSubBtn.style.visibility = "hidden";
unSubPGraph.style.visibility = "hidden";

window.onload = function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");

    if (isLoggedIn === 'true') {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const currentUser = users.find(user => user.email === loggedInUserEmail);

        if (currentUser && currentUser.userSubed) {
            subFunc();
        }
    }
};

subBtn.addEventListener("click", function() {
    subFunc();
});

function subFunc() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === 'true') {
        subBtn.textContent = "SUBSCRIBED!";
        head.textContent = "THANKS FOR SUBSCRIBING!";
        pGraph.textContent = "We are very grateful to you. Thanks for joining us. It will be our pleasure to serve you!";
        
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
        const currentUser = users.find(user => user.email === loggedInUserEmail);

        if (currentUser) {
            currentUser.userSubed = true;
            localStorage.setItem("users", JSON.stringify(users));
        }
        cssStyle();

    } else {
        const confirmation = confirm("You are not logged in. Log in now?");

        if (confirmation) {
            window.location.href = "login.html";
        }
    }
}

function unSubFunc() {

    const confirmation = confirm("Are You Sure You Want To Unsubscribe? We are very sorry to see you go ;(")

    if (confirmation) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
    const currentUser = users.find(user => user.email === loggedInUserEmail);

    if (currentUser) {
        currentUser.userSubed = false;
        localStorage.setItem("users", JSON.stringify(users));
        window.location.reload();
    }
    }
}

function cssStyle() {
    subBtn.style.border = "2px solid #fff";
    subBtn.style.background = "#27f918";
    
    unSubBtn.style.visibility = "visible";
    unSubPGraph.style.visibility = "visible";
}
