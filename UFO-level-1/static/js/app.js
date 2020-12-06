// from data.js
var tableData = data;

// YOUR CODE HERE!
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