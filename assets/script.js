// show today's date at the top of the screen
var currentDayElement = $('#currentDay');
var todaysDate = dayjs().format('dddd DD MMMM YYYY');
currentDayElement.text(todaysDate);

var rowContainer = $('.container');
var currentHour = dayjs().format('HH');
// console.log(currentHour);

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
    var apptBox = $('<div>');
    apptBox.addClass('time-block');
    plannerRow.append(apptBox);

    // create and append the save button
    var saveButton = $('<div>');
    saveButton.addClass('saveBtn');
    plannerRow.append(saveButton);
};

// loop to create 9 rows
for (let i = 0; i < 9; i++) {
    buildRow();
};

// update box colours based upon time of day - doesn't work because hour box isn't in local scope
if (hourBox === currentHour) {
    hourBox.addClass('present');
} else if (hourBox < currentHour) {
    hourBox.addClass('past');
} else if (hourBox > currentHour) {
    hourBox.addClass('future');
}


