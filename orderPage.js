document.getElementById("choose-seats-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const row = formData.get("row");
    const seats = formData.get("seats");

    const containerList = document.getElementById("summarize-order-section");
    const containerDiv = document.createElement("div");

    const seatsSpan = document.createElement("span");
    const rowSpan = document.createElement("span");

    const seatsLabel = document.createElement("label");
    const rowLabel = document.createElement("label");

    seatsSpan.textContent = seats;
    rowSpan.textContent = row;
    seatsLabel.textContent = "Seats: ";
    rowLabel.textContent = "Row: ";

    containerDiv.appendChild(seatsLabel);
    containerDiv.appendChild(seatsSpan);
    containerDiv.appendChild(document.createElement("br")); // Add line break for better separation
    containerDiv.appendChild(rowLabel);
    containerDiv.appendChild(rowSpan);

// Append the container div to the document body (or any other desired parent element)
    containerList.appendChild(containerDiv);


});

