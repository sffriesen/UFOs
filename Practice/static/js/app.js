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

// create a function for filtering data on click
function handleClick() {
    // create variables to hold date data
    let date = d3.select("#datetime").property("value");
    // set a default filter (the whole original table data)
    let filteredData = tableData;

    // if there is a date present, filter the data
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // build the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click:, handleClick");

// Build the table when the page loads
buildTable(tableData);