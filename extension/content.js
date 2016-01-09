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

var tags = document.querySelectorAll('a, p, span, h1, h2, h3, h4, h5, h6, caption')
var array_of_words = ["netflix", "streaming", "jon snow"]

function findMatch(string) {
  for (i in array_of_words) {
    if (string.toLowerCase().indexOf(array_of_words[i]) != -1) {
      return true
    }
  }
}

function hideWord(tags) {
  $.each(tags, function(key, element) {
    if (findMatch($(element).html())) {
      // console.log($(element).html())
      // $(element).css("background-color", "red")
      // debugger
      $(element).hide()
      // $(element).html("SPOILER ALERT!!!")
    }
  })
}

$(document).ready(function() {
  hideWord(tags)
  // hideWord(spantags)
  // hideWord(atags)
})
