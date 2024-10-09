//Constants

const textArea = document.getElementById("ques");
const subQues = document.getElementById("subQues");

subQues.addEventListener("click", quesSubmit);

const isLoggedIn = localStorage.getItem("isLoggedIn");

function quesSubmit() {
    
    if (isLoggedIn !== "true") {
        const confirmation = confirm("Please Log In first to send a Question.  Do you want to log in now?");
        if (confirmation) {
            window.location.href = "login.html";
        }
        return;
    }
    
    if (textArea.value.trim() === "") {
        alert("Please enter a valid Question.");
        return;
    };

    const appendDiv = document.getElementById("askQues");
    
    const subComp = document.createElement("h1");
    subComp.classList.add("subComp");
    appendDiv.appendChild(subComp);
    subComp.textContent = "Thanks. Your question was submitted successfully. We will review your question and append it to our FAQ page!" ;
    
    textArea.value = "";  
};
