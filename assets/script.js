// show today's date at the top of the screen
var currentDayElement = $('#currentDay');
var todaysDate = dayjs().format('dddd DD MMMM YYYY');
currentDayElement.text(todaysDate);

var rowContainer = $('.container');


var currentHour = 
dayjs().format('HH');

var hourForRow = 9;

// // object to hold saved appointments
// var savedAppts = {};

// dynamically create a schedule row
function buildRow() {

    // create and append the row
    var plannerRow = $('<div>');
    plannerRow.addClass('row');
    rowContainer.append(plannerRow);
    
    // create and append the hour box
    var hourBox = $('<div>');
    hourBox.addClass('hour');
    plannerRow.append(hourBox);
    hourBox.text(hourForRow);
    hourForRow++;

    // create and append the appointment box
    var apptBox = $('<input>');
    apptBox.attr('type', 'text');
    apptBox.addClass('description');
    plannerRow.append(apptBox);

    // check for an appt in LS and update
    var savedAppt = localStorage.getItem(hourBox.text()); // check if there's a savedAppt matching that hour
    if (savedAppt) {
        apptBox.val(savedAppt); // if so, update the appointment info with the corresponding value
    }

    // style the apptBox based upon what the current hour of the day is
    if (hourBox.text() < currentHour || currentHour > 17) {
        apptBox.addClass('past');
    } else if (hourBox.text() > currentHour) {
        apptBox.addClass('future');
    } else if (hourBox.text() == currentHour) {
        apptBox.addClass('present');
    }

    // create and append the save button
    var saveButton = $('<div>');
    saveButton.addClass('saveBtn');
    plannerRow.append(saveButton);
    
    // event listeners for save button, to add apptBox content to local storage?
    saveButton.on('click', function() {
        var apptInfo = apptBox.val();
        var hourRow = hourBox.text();
        // console.log(apptBox.val());
        // console.log(hourBox.text());
        JSON.stringify(localStorage.setItem(hourRow, apptInfo));
    })
};

// loop to create 9 rows
for (let i = 0; i < 9; i++) {
    buildRow();
};