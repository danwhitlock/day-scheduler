var currentDayElement = $('#currentDay');
var todaysDate = dayjs().format('dddd DD MMMM YYYY');

currentDayElement.text(todaysDate);

var rowContainer = $('.container');

var currentHour = dayjs().format('HH');
// console.log(currentHour);

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

    // create and append the appointment box
    var apptBox = $('<div>');
    apptBox.addClass('time-block');
    plannerRow.append(apptBox);

    // create and append the save button
    var saveButton = $('<div>');
    saveButton.addClass('saveBtn');
    plannerRow.append(saveButton);
};

buildRow();


// loop to create 9 rows
for (let i = 0; i < 8; i++) {
    buildRow();
};