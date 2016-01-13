var loggedOn = false;
function loggedIn() {
  // $.get("https://serene-garden-3411.herokuapp.com/user_logged_in", function(data) {
    $.get("http://localhost:3000/user_logged_in", function(data) {
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
var allTags = $("*").not("html").not("head, script, title, link").not('meta').not('title').not("body, div")
// var array_of_words = ["netflix", "streaming", "jon snow"]
var array_of_words = []
chrome.storage.local.get("filter", function(obj) {
  if (obj.filter) {
    array_of_words = obj.filter
  }
})

function findMatch(text) {
  // var match = false
  // if (array_of_words.indexOf(text.toLowerCase()) != -1) {
    // $.each(array_of_words, function(index, element){
      for (var i=0; i < array_of_words.length-1; i++) {
      // debugger
        if (text.toLowerCase().match(array_of_words[i]) != null) {
      // if (text.toLowerCase().search(array_of_words[index]) != -1 ) {
      // match = true;
      // console.log("hi")
          return true
        }
    // return true
    // match = true
    }
  return false
}

function hideWord(tags) {
  $.each(tags, function(key, element) {
    if (findMatch($(element).html())) {
    debugger
      // $.each(element, function(index, element) {
      // console.log($(element)[0])
      // $(element).hide()
      // var replaceImg = '<img src="http://localhost:3000/assets/icon-945908b8301759cca3dc7d98c417383df6e8697fc6362343b526a240b599fc94.png" alt="Unspoiled!" />'
      // console.log($(element))
      // debugger
      $(element).hide()
      $(element).parent().append('<a class= "meep" href="#" style="border: 3px solid red; width: 200px;">Unspoiled (click to show spoiler)</a>')
      // })
    }
  })
}


$(document).ready(function() {
  loggedIn()
  setFilter()
  $('body').on('click','.meep' ,function(event){
    event.preventDefault();
    $(event.target).siblings().show()
    $(event.target).hide()
  })
})
