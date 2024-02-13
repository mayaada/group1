document.addEventListener("DOMContentLoaded", function() {

    const orderButtons = document.querySelectorAll(".order-button button");

    function handleOrderButtonClick(event) {
            event.preventDefault();

            window.location.href = "order-page.html";
    }

    orderButtons.forEach(function(button) {
        button.addEventListener("click", handleOrderButtonClick);
    });
});
