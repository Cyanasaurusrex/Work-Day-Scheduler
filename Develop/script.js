var saveButton = $('.saveBtn')
var hour9Text = $('#hour9Text')
var hour10Text = $('#hour10Text')
var hour11Text = $('#hour11Text')
var hour12Text = $('#hour12Text')
var hour1Text = $('#hour1Text')
var hour2Text = $('#hour2Text')
var hour3Text = $('#hour3Text')
var hour4Text = $('#hour4Text')
var hour5Text = $('#hour5Text')
var hour9 = $("#hour9")
var hour10 = $("#hour10")
var hour11 = $("#hour11")
var hour12 = $("#hour12")
var hour1 = $("#hour1")
var hour2 = $("#hour2")
var hour3 = $("#hour3")
var hour4 = $("#hour4")
var hour5 = $("#hour5")

var now = dayjs(); // Create a new dayjs object with the current date and time
var currentDay = now.format('dddd, MMMM D'); // Format the date and time as "hour meridiem" (e.g. "1 PM")
var currentHour = now.format('hA')
// Find the element where you want to display the current hour
var currentDayEl = $('#currentDay');

// Set the text content of the element to the current hour
currentDayEl.text(currentDay);
// function to determine current time and dynamically change classes of hours to show past present and future events
function changeClass() {

  let hourListfull = [hour9, hour10, hour11, hour12, hour1, hour2, hour3, hour4, hour5]
  let hourlist = [9, 10, 11, 12, 1, 2, 3, 4, 5]
  console.log(now.format('H'))

  // check to see if current hour is outside of office hours
  // if current hour is after midnight but before 9am, sets all classes to "future"
  if (now.format('H') < 9) {
    for (i = 0; i < hourlist.length; i++) {
      hourListfull[i].removeClass("present")
      hourListfull[i].removeClass("past")
      hourListfull[i].addClass("future")
    }
  }
  // if the current hour is after 5pm but before midnight, sets all classes to "past"
  if (now.format('H') > 17) {
    for (i = 0; i < hourlist.length; i++) {
      hourListfull[i].removeClass("present")
      hourListfull[i].removeClass("future")
      hourListfull[i].addClass("past")
    }   
  }
  // loops through the hours to find the current hour and set its class to "present"
  for (i = 0; i < hourlist.length; i++) {
    if (now.format('h') == hourlist[i]) {
      hourListfull[i].removeClass("past")
      hourListfull[i].removeClass("future")      
      hourListfull[i].addClass("present")
      console.log(hourlist[i] + "PM set to present")
      // for each preceding hour, set the class to "past"
      for (j = 0; j < i; j ++){
        hourListfull[j].removeClass("present")
        hourListfull[j].removeClass("future")
        hourListfull[j].addClass("past")
        console.log(hourlist[j] + " PM set to past")
      }
      // for the remaining hours, set the class to "future"
      for (k = (i + 1); k < hourlist.length; k++) {
        hourListfull[k].removeClass("present")
        hourListfull[k].removeClass("past")
        hourListfull[k].addClass("future")
        console.log(hourlist[k] + "PM set to future")       
      }
    }
  }
}

$(document).ready(function() {  
  changeClass()
  hour9Text.text(localStorage.getItem('hour9'))
  hour10Text.text(localStorage.getItem('hour10'))
  hour11Text.text(localStorage.getItem('hour11'))
  hour12Text.text(localStorage.getItem('hour12'))
  hour1Text.text(localStorage.getItem('hour1'))
  hour2Text.text(localStorage.getItem('hour2'))
  hour3Text.text(localStorage.getItem('hour3'))
  hour4Text.text(localStorage.getItem('hour4'))
  hour5Text.text(localStorage.getItem('hour5'))
  saveButton.on('click', function() {    
    var parentId = $(this).parent().attr('id');
    var userImput = $(this).siblings('.description').val();
    localStorage.setItem(parentId, userImput)        
  })  
});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.