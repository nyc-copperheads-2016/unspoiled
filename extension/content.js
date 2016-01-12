var loggedOn = false;
function loggedIn() {
  // $.get("https://serene-garden-3411.herokuapp.com/user_logged_in", function(data) {
    $.get("http://localhost:3000/user_logged_in", function(data) {
    if (data) {
      // debugger
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

  // $.get("https://serene-garden-3411.herokuapp.com/filtered_words", function(data) {
  $.get("http://localhost:3000/filtered_words", function(data) {

    chrome.storage.local.set({filter: data});
    // console.log("Filter set", data);
    chrome.storage.local.get(function(obj) {
      // console.log("callback: ", obj)
      if (sessionStorage.loggedIn === "true"){
        if (obj.unspoiledOn === true) {
          if (obj.filter.length > 2) {
            hideWord(allTags)
          }
          else {
            console.log("Unspoiled off")
          }
        }
      }
    })
  })
}

// var allTags = document.querySelectorAll('a, p, span, h1, h2, h3, h4, h5, h6, caption')
var allTags = $("*").not("html").not("head").not("body").not("div").not("script").not('meta').not('li')

// var array_of_words = ["netflix", "streaming", "jon snow"]
var array_of_words = []
chrome.storage.local.get("filter", function(obj) {
  if (obj.filter) {
    array_of_words = obj.filter
  }
})

function findMatch(text) {
  var match = false
  $.each(array_of_words, function(index, element) {
    if (text.toLowerCase().search(array_of_words[index].toLowerCase()) != -1) {
      match = true
    }
  })
  return match
}

function hideWord(tags) {
  $.each(tags, function(key, element) {
    if (findMatch($(element).html())) {
      // console.log($(element)[0])
      // $(element).hide()
      var replaceImg = '<img src="http://localhost:3000/assets/icon-945908b8301759cca3dc7d98c417383df6e8697fc6362343b526a240b599fc94.png" alt="Unspoiled!" />'
      $(element).html(replaceImg)
      // $(element).css("background-color", "red")
    }
  })
}

$(document).ready(function() {
  loggedIn()
  setFilter()
})
