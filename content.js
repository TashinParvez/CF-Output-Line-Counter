// Select only the output fields
const outputFields = document.querySelectorAll(".output pre");

// Function to add line numbers on hover (output fields only)
function addLineNumbers(fields) {
    fields.forEach(field => {
        const lines = field.innerText.split('\n');
        field.innerHTML = ""; // Clear existing content
        
        lines.forEach((line, index) => {
            const lineElement = document.createElement("div");
            lineElement.className = "line-numbered";
            lineElement.textContent = line;
            lineElement.dataset.lineNumber = index + 1;
            
            // Add hover events only for output fields
            lineElement.addEventListener("mouseenter", () => {
                showLineNumber(lineElement, index + 1);
            });
            lineElement.addEventListener("mouseleave", hideLineNumber);

            field.appendChild(lineElement);
        });
    });
}

// Function to show line number
function showLineNumber(lineElement, lineNumber) {
    const label = document.createElement("span");
    label.className = "line-number-label";
    label.textContent = lineNumber;
    lineElement.appendChild(label);
}

// Function to hide line number
function hideLineNumber(event) {
    const label = event.target.querySelector(".line-number-label");
    if (label) label.remove();
}

// Apply line numbering only on output fields
addLineNumbers(outputFields);
