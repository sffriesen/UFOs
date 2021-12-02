// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// create a function to build our table
function buildTable(data) {
    // clear the data, start with a clean table
    tbody.html("");

    // add a forEach function to loop through the rows in data.js
    data.forEach((dataRow) => {
        // tell JavaScript to find the <tbody> tag in the HTML and add a table row
        let row = tbody.append("tr");
        
        // add a new function to loop through each field in the dataRow argument
        Object.values(dataRow).forEach((val) => {
            // append each value of the object ot a cell in the table
            let cell = row.append("td");
            // add the values
            cell.text(val);
        });
    });

}