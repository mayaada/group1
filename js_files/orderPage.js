// Function to convert number to words
function numberToWords(number) {
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
    return words[number] || number.toString();
}

document.addEventListener('DOMContentLoaded', function () {
    // Initialize selection counter
    let selectionCount = 0;
    const maxSeatsAllowed = 7;
    const selectedSeats = [];


    document.getElementById("choose-seats-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const row = formData.get("row");
        const seat = formData.get("seats");

        const selectionIdentifier = row + "-" + seat;
        if (selectedSeats.includes(selectionIdentifier)) {
            alert("You have already selected this seat.");
            return;
        }


        if (selectionCount >= maxSeatsAllowed) {
            alert("You have already selected the maximum number of seats.");
            return;
        }

        const containerList = document.getElementById("summarize-order-section");
        const containerDiv = document.createElement("div");
        containerDiv.classList.add("user-choice");


        const seatsSpan = document.createElement("span");
        const rowSpan = document.createElement("span");
        const selectionNumberSpan = document.createElement("span"); // Span for selection number

        const seatsLabel = document.createElement("label");
        const rowLabel = document.createElement("label");

        // Increment selection counter
        selectionCount++;

        // Text for each selection
        const seatsText = "Selected Seats: ";
        const rowText = "Selected Row: ";
        const selectionNumberText = "Choice Number ";

        // Set text content
        seatsSpan.textContent = seat;
        rowSpan.textContent = row;
        selectionNumberSpan.textContent = numberToWords(selectionCount); // Set selection number in words
        seatsLabel.textContent = seatsText;
        rowLabel.textContent = rowText;

        // Add class to "Choice Number" span
        selectionNumberSpan.classList.add('choice-number');
        seatsSpan.classList.add('selected');
        rowSpan.classList.add('selected');

        const choiceNumber = document.createElement('span');
        choiceNumber.textContent = "Choice Number"
        choiceNumber.classList.add('choice-number-label');
        containerDiv.appendChild(choiceNumber); // Append "Choice Number" text
        containerDiv.appendChild(selectionNumberSpan); // Append selection number
        containerDiv.appendChild(document.createElement("br")); // Add line breaks for better separation
        containerDiv.appendChild(seatsLabel);
        containerDiv.appendChild(seatsSpan);
        containerDiv.appendChild(document.createElement("br")); // Add line breaks for better separation
        containerDiv.appendChild(rowLabel);
        containerDiv.appendChild(rowSpan);

        // Append the container div to the document body (or any other desired parent element)
        containerList.appendChild(containerDiv);
        selectedSeats.push(selectionIdentifier);

    });

    document.querySelector(".pay-button").addEventListener("click", function () {
        const totalAmount = selectedSeats.length * 50; // Each card costs 50 NIS
        const orderNumber = Math.floor(Math.random() * 1000000); // Generate a random order number

        const paymentOrderSection = document.getElementById("payment-order-section");
        paymentOrderSection.innerHTML = "<p>Total Amount to Pay: " + totalAmount + " NIS</p><p>Order Number: " + orderNumber + "</p>";
    });

});
