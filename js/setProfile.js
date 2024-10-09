window.addEventListener("load", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
    setProfile();
    }
});

function setProfile() {
    const navbar = document.querySelector('.navbar ul');

    const loginItem = navbar.querySelector('li.gone');
    if (loginItem) {
        loginItem.remove();
    }

    if (!navbar.querySelector('li.profile')) {
        const profile = document.createElement("li");
        profile.className = "profile";
        const profileLink = document.createElement("a");
        const currentPath = window.location.pathname;

        if (currentPath.includes('index.html') || currentPath === '/' || currentPath === '/index.html') {
            profileLink.href = "html/profile.html";
        } else if (currentPath.includes('gamesel.html') || currentPath.includes('paint/') || currentPath.includes('showdecor/')) {
            profileLink.href = "../profile.html";
        }
      else{
            profileLink.href = "profile.html"; 
        }

        profileLink.textContent = "Profile";

        profile.append(profileLink);

        navbar.append(profile);
    }
};
