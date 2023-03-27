"use strict";

// get vehicle amount - loop until user enters a number
let value = 0;
do {
    value = parseInt(prompt("Enter value of car.\n" + "(Must be valid positive number)"));
}
while ( isNaN(value) || value <=0);


// get yearly depreciation rate - loop until user enters a number
let rate = 0;
do {
    rate = parseFloat(prompt("Enter the yearly depreciation of car.\n" + "(Must be valid decimal positive number)"));
}
while ( isNaN(rate) || rate <=0);


// get age of car in years - loop until user enters a number
let years = 0;
do {
    years = parseInt(prompt("Enter age of vehicle (in years)\n" + "(Must be valid positive number)"));
}
while ( isNaN(years) || years <=0);

// calulate depreciation value
let futureValue = value;
for (let i = 1; i <= years; i++ ) {
    futureValue = futureValue - (futureValue * rate);
}

// display results
document.write(`<p><label>Vehicle amount:</label> ${value}</p>`);
document.write(`<p><label>Depreciation rate:</label> ${rate}</p>`);
document.write(`<p><label>Vehicle age (in years):</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${futureValue.toFixed(2)}</p>`);
