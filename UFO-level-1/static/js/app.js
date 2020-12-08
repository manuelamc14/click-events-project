// from data.js
var tableData = data;

// POPULATE THE INFORMATION TABLE

console.log(tableData)

// Get a reference cor the table body
var tbody = d3.select("tbody");

// Loop throught tableDate and each weather report object to add the number of rows
// based on the legth of the object
tableData.forEach((city) => {
    var row = tbody.append("tr");
    Object.entries(city).forEach(([key, value]) =>{
        var cell = row.append("td");
        cell.text(value);
    });
});

// FILTER THE INFORMATION

// Select the button

var button = d3.select("#filter-btn");

// Create event handler

button.on("click", runEnter);

// Complete the event handler function for the form 

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node

    var inputDate = d3.select("#datetime");

    var inputDateValue = inputDate.property("value");

    console.log(inputDateValue);
    
    // Filter the information according to the input 

    function selectDate(tableData){
       return tableData.datetime == inputDateValue;
    }

    var filteredData = tableData.filter(selectDate);

    console.log(filteredData);

    // Clean the table information

    tbody.html("");

    // Populate the new information

    filteredData.forEach((city) => {
        var row = tbody.append("tr");
        Object.entries(city).forEach(([key, value]) =>{
            var cell = row.append("td");
            cell.text(value);
        });
    });

};