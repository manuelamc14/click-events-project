// from data.js
var tableData = data;

// POPULATE THE INFORMATION TABLE

console.log(tableData)

// Get a reference cor the table body
var tbody = d3.select("tbody");

// Loop throught tableDate and each weather report object to add the number of rows
// based on the legth of the object

// Create a function to create a table passing the object name

function createTable(objectName) {
    objectName.forEach((city) => {
        var row = tbody.append("tr");
        Object.entries(city).forEach(([key, value]) =>{
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

createTable(tableData)

// FILTER THE INFORMATION

// Select the input box

var inputBoxDate = d3.select("#datetime");

var inputBoxCity = d3.select("#city");

var inputBoxState = d3.select("#state");
// Create event handler

inputBoxDate.on("change", runEnter);
inputBoxCity.on("change", runEnterCity);
inputBoxState.on("change", runEnterState);
// Complete the event handler function for the form 

var inputState = d3.select("#state");

var inputStateValue = inputState.property("value");


function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node

    var inputDate = d3.select("#datetime");

    var inputDateValue = inputDate.property("value");

    console.log(inputDateValue);

    var inputState = d3.select("#state");

    var inputStateValue = inputState.property("value");

    console.log(inputStateValue);
    
    // Filter the information according to the input 

    function selectDate(tableData){
       return tableData.datetime == inputDateValue;
    }

    var filteredData = tableData.filter(selectDate);

    console.log(filteredData);

    // Clean the table information

    tbody.html("");

    // Populate the new information

    createTable(filteredData)

};

//createTable(filteredData)

function runEnterCity() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node

    var inputCity = d3.select("#city");

    var inputCityValue = inputCity.property("value");

    console.log(inputCityValue);
    
//     // Filter the information according to the input 

    function selectCity(tableData){
       return tableData.city == inputCityValue;
    }

    var filteredData = tableData.filter(selectCity);

    console.log(filteredData);

    // Clean the table information

    tbody.html("");

    // Populate the new information

    createTable(filteredData)

};

function runEnterState() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node

    var inputState = d3.select("#state");

    var inputStateValue = inputState.property("value");

    console.log(inputStateValue);
    
//     // Filter the information according to the input 

    function selectState(tableData){
       return tableData.state == inputStateValue;
    }

    var filteredData = tableData.filter(selectState);

    console.log(filteredData);

    // Clean the table information. 

    tbody.html("");

    // Populate the new information

    createTable(filteredData)

};