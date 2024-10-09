document.addEventListener('DOMContentLoaded', loadComments);

// Constants
const subCom = document.getElementById("subCom");
const commentBox = document.getElementById("commentBox");

const userName = localStorage.getItem("userName") || "";

subCom.addEventListener("click", function() {

const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn === "true") {
    
    const commentInput = document.getElementById('comment').value;
    if (commentInput.trim() === "") {
        alert("Please enter a comment.");
        return;
    }

    const comment = {
        id: Date.now(),
        userName: userName,
        content: commentInput
    };

    saveComment(comment);
    appendComment(comment);
    
    document.getElementById('comment').value = "";
    }

else {
        const confirmation = confirm("You are not logged in. Log in now?");

        if (confirmation) {
            window.location.href = "login.html";
        }
    }
});

function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(comment => appendComment(comment));
}

function saveComment(comment) {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
}

function appendComment(comment) {
    const commentBox = document.getElementById('commentBox');

    const newCommentDiv = document.createElement('div');
    newCommentDiv.classList.add('msg');
    newCommentDiv.id = comment.id;

    const userNamePara = document.createElement('p');
    userNamePara.textContent = comment.userName;
    newCommentDiv.appendChild(userNamePara);

    const commentContent = document.createElement('h6');
    commentContent.textContent = comment.content;
    newCommentDiv.appendChild(commentContent);

    if (comment.userName === userName) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('delete-btn');
        deleteButton.style.float = "right";
        deleteButton.addEventListener('click', function() {
        
        const confirmation = confirm("Are You sure? This action can't be undone.")
        
        if (confirmation) {
          deleteComment(comment.id);
        }
        });
        newCommentDiv.appendChild(deleteButton);
    }

 commentBox.appendChild(newCommentDiv);
}


function deleteComment(commentId) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    // Filter out the comment to be deleted
    comments = comments.filter(comment => comment.id !== commentId);
    // Update localStorage
    localStorage.setItem('comments', JSON.stringify(comments));
    // Remove the comment from the DOM
    const commentToDelete = document.getElementById(commentId);
    if (commentToDelete) {
        commentToDelete.remove();
    }
}
