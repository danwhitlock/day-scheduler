// show today's date at the top of the screen using day.js
var currentDayElement = $('#currentDay');
var todaysDate = dayjs().format('dddd DD MMMM YYYY');
currentDayElement.text(todaysDate);

var rowContainer = $('.container');

// get current hour of the days using day.js
var currentHour = parseInt(dayjs().format('HH'));

// start point for assigning hours to rows
var hourForRow = 9;

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

    // check for an existing appt in local storage and update contents if one exists
    var savedAppt = localStorage.getItem(hourBox.text()); // this gets the value associated with the hourBox key, not the 'hour itself'
    if (savedAppt) {
        apptBox.val(savedAppt); // this updates the apptBox value with the value of the hourBox key
    }

    // style the apptBox based upon what the current hour of the day is (use parseInt to ensure comparing nums to nums)
    if (parseInt(hourBox.text()) < currentHour || currentHour > 17) {
        apptBox.addClass('past');
    } else if (parseInt(hourBox.text()) > currentHour) {
        apptBox.addClass('future');
    } else if (parseInt(hourBox.text()) == currentHour) {
        apptBox.addClass('present');
    }

    // create and append the save button
    var saveButton = $('<div>');
    saveButton.addClass('saveBtn');
    plannerRow.append(saveButton);
    
    // event listeners for save button, to add apptBox content to local storage
    saveButton.on('click', function() {
        var apptInfo = apptBox.val();
        var hourRow = hourBox.text();
        JSON.stringify(localStorage.setItem(hourRow, apptInfo));
    })
};

// loop to create 9 rows
for (let i = 0; i < 9; i++) {
    buildRow();
};