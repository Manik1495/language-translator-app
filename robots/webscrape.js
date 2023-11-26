// Import the 'fs' module
const fs = require('fs');

// Function to get all inner text from a webpage
function getAllInnerText() {
  // Get the inner text of the body element
  const bodyInnerText = document.body.innerText;

  // Split the inner text into an array of lines
  const innerTextLines = bodyInnerText.split('\n');

  // Create an array to store inner texts
  const innerTextArray = [];

  // Loop through each line and extract inner text
  innerTextLines.forEach(line => {
    const trimmedLine = line.trim();
    if (trimmedLine !== '') {
      innerTextArray.push(trimmedLine);
    }
  });

  return innerTextArray;
}

// Execute the function and get inner texts
const innerTextArray = getAllInnerText();

// Convert the array to a string with each item on a new line
const textToWrite = innerTextArray.join('\n');

// Write the text to a file named 'output.txt'
fs.writeFileSync('output.txt', textToWrite, 'utf-8');

console.log('Text has been written to output.txt');
