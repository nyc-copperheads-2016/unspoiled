// $('div').hide()
// $('body').append('<button id="show" type="button">Click to show content</button>')
// $('#show').on('click', function(event){
//   event.preventDefault();
//   $('div').show();
// })
var loggedOn = false;

function loggedIn() {

}

var divs = document.querySelectorAll('div')

$.each(divs, function(key, index) {
 if ($(index).html().match("This page was last modified on")) {
  $(index).hide()
 }
}) 