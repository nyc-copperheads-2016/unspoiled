// $('div').hide()
// $('body').append('<button id="show" type="button">Click to show content</button>')
// $('#show').on('click', function(event){
//   event.preventDefault();
//   $('div').show();
// })
var loggedOn = false;
function loggedIn() {
  $.get("http://localhost:3000/user_logged_in", function(data) {
    if (data) {
      sessionStorage.loggedIn = true 
      console.log("User is logged in")
    }
    else {
      sessionStorage.clear()
    }
  })
}
// var divs = document.querySelectorAll('div')

// $.each(divs, function(key, index) {
//  if ($(index).html().match("This page was last modified on")) {
//   $(index).hide()
//  }
// }) 