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

function setFilter() {
  $.get("http://localhost:3000/filtered_words", function(data) {
    var filtered_words = [];
    data.forEach(function(element) {
      filtered_words += element.words;
    });
    var words = filtered_words.split(' ').replace("[", "")
    chrome.storage.local.set({filter: words});
    console.log("Filter set");
    console.log(filtered_words)
  });
}

var allTags = document.querySelectorAll('a, p, span, h1, h2, h3, h4, h5, h6, caption')
var array_of_words = ["netflix", "streaming", "jon snow"]
// var array_of_words = []
// chrome.storage.local.get("filter", function(obj) {
//   if (obj.filter) {
//     array_of_words = obj.filter
//   }
// })

function findMatch(string) {
  var match = false
  $.each(array_of_words, function(index, element) {
    if (string.toLowerCase().search(array_of_words[index].toLowerCase()) != -1) {
      match = true
    }
  })
  return match
}

function hideWord(tags) {
  $.each(tags, function(key, element) {
    if (findMatch($(element).html())) {
      // console.log($(element).html())
      // $(element).hide()
      // $(element).html("SPOILER ALERT!!!")
      $(element).css("background-color", "red")
    }
  })
}

$(document).ready(function() {
  setFilter()
  loggedIn()
  chrome.storage.local.get(function(obj) {
    if (obj.unspoiledOn === true) {
      if (obj.filter) {
        hideWord(allTags)
      }
    }
  })
})

