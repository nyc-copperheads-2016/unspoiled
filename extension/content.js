var loggedOn = false;
function loggedIn() {
  $.get("https://serene-garden-3411.herokuapp.com/user_logged_in", function(data) {
    if (data) {
      sessionStorage.loggedIn = true
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

  $.get("https://serene-garden-3411.herokuapp.com/filtered_words", function(data) {
    chrome.storage.local.set({filter: data});
    // loggedIn()
    // console.log("Filter set", data);
    chrome.storage.local.get("filter",function(obj) {
      // console.log("callback: ", obj)
      hideWord(allTags)
      // if (sessionStorage.loggedIn === true){
        if (obj.unspoiledOn === true) {
          if (obj.filter) {
            hideWord(allTags)
          }
        }
      // }
    })
  })
}

// var allTags = document.querySelectorAll('a, p, span, h1, h2, h3, h4, h5, h6, caption')
var allTags = $("*").not("html").not("head").not("body").not("div")
// var array_of_words = ["netflix", "streaming", "jon snow"]
var array_of_words = []
chrome.storage.local.get("filter", function(obj) {
  if (obj.filter) {
    array_of_words = obj.filter
  }
})

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
      $(element).hide()
      $(element).css("background-color", "red")
    }
  })
}

$(document).ready(function() {
  chrome.storage.local.clear()
  setFilter()
  // debugger
  loggedIn()
})
