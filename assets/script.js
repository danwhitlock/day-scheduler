// show today's date at the top of the screen
var currentDayElement = $('#currentDay');
var todaysDate = dayjs().format('dddd DD MMMM YYYY');
currentDayElement.text(todaysDate);

var rowContainer = $('.container');

// for testing...


var currentHour = 
dayjs().format('HH');
// for testing
// 08;
// console.log(currentHour);

var hourForRow = 09;

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
    apptBox.addClass('description');
    plannerRow.append(apptBox);

    if (hourBox.text() < currentHour || currentHour > 17) {
        apptBox.addClass('past');
    } else if (hourBox.text() > currentHour) {
        apptBox.addClass('future')
    } else if (hourBox.text() == currentHour) {
        apptBox.addClass('present');
    }

    // create and append the save button
    var saveButton = $('<div>');
    saveButton.addClass('saveBtn');
    plannerRow.append(saveButton);    
};

// loop to create 9 rows
for (let i = 0; i < 9; i++) {
    buildRow();
};