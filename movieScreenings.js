function getQueryParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const params = {};

    // Iterate over each query parameter and store in params object
    for (const [key, value] of urlParams.entries()) {
        params[key] = value;
    }

    return params;
}

document.addEventListener("DOMContentLoaded", function () {

    const params = getQueryParams();

    const movieName= document.getElementById("movie-name");

    movieName.textContent = params["movie"];

    const orderButtons = document.querySelectorAll(".order-button button");

    function handleOrderButtonClick(event) {
        event.preventDefault();

        window.location.href = "order-page.html";
    }

    orderButtons.forEach(function (button) {
        button.addEventListener("click", handleOrderButtonClick);
    });
});
