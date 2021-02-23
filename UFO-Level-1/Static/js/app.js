// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
var button = d3.select("filter-btn");
var inputDate = d3.select("datetime");
var inputCity = d3.select("city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Html set up

var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);

// Button set up 

button.on("click", () => {

    var inputDate = inputDate.property("value").trim();

    var filteredDates = tableData.filter(tableData => tableData.datetime === inputDate);
    

    tbody.html("");

    let response = {
        filteredDates
    }


    if(response.filteredDates.length !== 0) {
        addData(filteredDates);
    }
   
       
})