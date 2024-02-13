document.getElementById("choose-seats-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const row = formData.get("row");
    const seats = formData.get("seats");

// Create a new div element
    const containerList = document.getElementById("summarize-order-section");
    const containerDiv = document.createElement("div");

// Create span elements for seats and row
    const seatsSpan = document.createElement("span");
    const rowSpan = document.createElement("span");

// Create labels for seats and row
    const seatsLabel = document.createElement("label");
    const rowLabel = document.createElement("label");

// Set text content for the spans and labels
    seatsSpan.textContent = seats;
    rowSpan.textContent = row;
    seatsLabel.textContent = "Seats: ";
    rowLabel.textContent = "Row: ";

// Append spans and labels to the container div
    containerDiv.appendChild(seatsLabel);
    containerDiv.appendChild(seatsSpan);
    containerDiv.appendChild(document.createElement("br")); // Add line break for better separation
    containerDiv.appendChild(rowLabel);
    containerDiv.appendChild(rowSpan);

// Append the container div to the document body (or any other desired parent element)
    containerList.appendChild(containerDiv);


});

