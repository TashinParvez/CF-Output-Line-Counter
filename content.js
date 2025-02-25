// Select only the output fields
const outputFields = document.querySelectorAll(".output pre");

// Function to add line numbers on hover (output fields only)
function addLineNumbers(fields) {
    fields.forEach(field => {
        // Get the computed styles of the original field
        const computedStyle = window.getComputedStyle(field);

        // Wrap the original content to avoid altering the actual text
        const lines = field.innerText.split('\n');
        const wrapper = document.createElement("div");
        wrapper.className = "line-numbers-wrapper";

        // Apply the original styles to the wrapper
        wrapper.style.backgroundColor = computedStyle.backgroundColor;
        wrapper.style.color = computedStyle.color;
        wrapper.style.fontFamily = computedStyle.fontFamily;
        wrapper.style.fontSize = computedStyle.fontSize;
        wrapper.style.padding = computedStyle.padding;
        wrapper.style.border = computedStyle.border;
        wrapper.style.whiteSpace = computedStyle.whiteSpace;
        wrapper.style.overflow = computedStyle.overflow;

        lines.forEach((line, index) => {
            const lineElement = document.createElement("div");
            lineElement.className = "line-numbered";
            lineElement.textContent = line;

            // Match the line height and margin to prevent extra spacing
            lineElement.style.margin = "0";
            lineElement.style.padding = "0";
            lineElement.style.lineHeight = computedStyle.lineHeight;

            // Add line number hover events
            lineElement.addEventListener("mouseenter", () => {
                lineElement.style.backgroundColor = "#fffde7"; // Change background color on hover
               
                showLineNumber(lineElement, index + 1);
            });
            lineElement.addEventListener("mouseleave", (event) => {
                lineElement.style.backgroundColor = ""; // Revert background color on mouse leave
                hideLineNumber(event);
            });

            wrapper.appendChild(lineElement);
        });

        // Preserve the original text by hiding the original field visually
        field.style.display = "none";
        field.parentElement.insertBefore(wrapper, field);
    });
}

// Function to show line number
function showLineNumber(lineElement, lineNumber) {
    const label = document.createElement("span");
    label.className = "line-number-label";
    label.textContent = lineNumber;



    lineElement.style.position = "relative"; // Ensure positioning works
    lineElement.appendChild(label);
}

// Function to hide line number
function hideLineNumber(event) {
    const label = event.target.querySelector(".line-number-label");
    if (label) label.remove();
}

// Apply line numbering only on output fields
addLineNumbers(outputFields);
