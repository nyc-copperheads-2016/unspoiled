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
    if (data.active) {
      chrome.storage.local.set({unspoiledOn: true})
    }
    else {
      chrome.storage.local.set({unspoiledOn: false})
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
      $(element).hide()
      // $(element).html("SPOILER ALERT!!!")
    }
  })
}



$(document).ready(function() {
<<<<<<< 3df4206a984fe8c664ae0124b2919e6589c9136e
  hideWord(tags)
  // hideWord(spantags)
  // hideWord(atags)
})
=======
  loggedIn()
  chrome.storage.local.get("unspoiledOn", function(obj) {
    if (obj.unspoiledOn === true) {
      hideWord(tags)
    }
  })

})
>>>>>>> store whether or not filter is active to local storage
