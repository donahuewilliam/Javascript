// from data.js
var tableData = data;

// YOUR CODE HERE!
var tableData = data;

var tbody = d3.select("tbody");
var button = d3.select("filter-btn");
var inputDate = d3.select("datetime");
var inputCity = d3.select("city");

var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

//  HTML setup
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);

button.on("click", () => {

   
// set up tables    

    var Dates = inputDate.property("value").trim();
    
    var City = inputCity.property("value").toLowerCase().trim();

    var filteredDate = tableData.filter(tableData => tableData.datetime === Dates);

    var filteredCity = tableData.filter(tableData => tableData.city === City);
    
    var filteredData = tableData.filter(tableData => tableData.datetime === Dates && tableData.city === City);
    
    $tbody.html("");

    let response = {
        filteredDate, filteredCity, filteredData
    }

    // set up conditions 
    
    if(response.filteredData.length !== 0) {
        addData(filteredData);
    }

        else if(response.filteredData.length === 0 && ((response.filteredDate.length !== 0 || response.filteredCity.length !== 0))) {
            addData(filteredDate) || addData(filteredCity);
        }

    
})