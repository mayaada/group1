//store user
const user = localStorage.getItem("user");
console.log(user);

//check if user is signed in
if (user !== null && user !== "") {
    const signInSelector = document.getElementById("sign-in");
    const registerContainer = document.getElementById("register-container");

    signInSelector.textContent = user;
    signInSelector.setAttribute('href', 'my-account.html')
    registerContainer.remove();

    //new logout button
    const rightSideDiv = document.getElementById("right-side-content")
    const logOut = document.createElement("button");
    logOut.textContent = "Log Out";
    logOut.classList.add("log-out-button");

    // last child of right side div
    const lastChild = rightSideDiv.lastElementChild;

    rightSideDiv.insertBefore(logOut, lastChild);

    logOut.addEventListener("click", function () {
        // Clear user data from local storage
        localStorage.removeItem("user");
        // window.location.href = "sign-in.html";


        signInSelector.textContent = "Sign In";
        signInSelector.setAttribute('href', 'sign-in.html')
        rightSideDiv.insertBefore(registerContainer, lastChild);

        logOut.remove();
    });

}
