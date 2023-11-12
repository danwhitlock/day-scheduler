var currentDayElement = $('#currentDay');
var todaysDate = dayjs().format('dddd DD MMMM YYYY');
currentDayElement.text(todaysDate);

var rowContainer = $('.container');

var currentHour = dayjs().format('HH');
// console.log(currentHour);

// dynamically create schedule rows

function buildSchedule() {
    
}