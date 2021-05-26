
// Using the UFO dataset provided in the form of an array of JavaScript objects, append a table to the web page and add new rows of data for each UFO Sighting 

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// Looping through data and Use d3 to append one table row `tr` for each sighting object, Use `Object.entries` to console.log each sighting report value
data.forEach(function(sighting) {
  console.log(sighting);
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);

    //append 1 cell per sighting report value

    var cell = row.append("td");
    cell.text(value);
  });
});


// Save the objects to meaningful variables.
var sightings = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers
button.on("click", submitForm);
form.on("submit", submitForm);

// Complete the event handler function for the form
function submitForm() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(sightings);

  var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);

  // Clear table body
  d3.select('tbody').text('');

  
  var filteredBody = d3.select("tbody");

  // Create table pulling information matching the filter
  filteredData.forEach(function(sighting) {
  console.log(sighting);
  var row = filteredBody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);

    var cell = row.append("td");
    cell.text(value);
  });
});
};