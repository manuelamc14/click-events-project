//////// Add the data to a table on the webpage /////////

var tableData = data;

// Define a create table function to call on for filters //

function createTable(objectName) {
var tbody = d3.select("tbody");
tbody.html("");

 objectName.forEach((city) => {
    var row = tbody.append("tr");
    Object.entries(city).forEach(([key, value]) =>{
        var cell = row.append("td");
        cell.text(value);
        });
    });
}

createTable(tableData)

// buildTable(tableData)

// Add input filters for searches by targeting any input changes //

d3.selectAll("input").on("change", function() {
    element = d3.select(this);
    key = element.property("id");
    value = element.property("value");
    filteredData = tableData.filter(row => row[key] === value);
    console.log(filteredData);

    // Set table data to be equal to filtered input //
    tableData = filteredData;

    // Call table function to append
    createTable(filteredData);
});