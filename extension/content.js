var loggedOn = false;
function loggedIn() {
  $.get("https://keepunspoiled.herokuapp.com/user_logged_in", function(data) {
    // $.get("http://localhost:3000/user_logged_in", function(data) {
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
  $.get("https://keepunspoiled.herokuapp.com/filtered_words", function(data) {
  // $.get("http://localhost:3000/filtered_words", function(data) {
    chrome.storage.local.set({filter: data});
    chrome.storage.local.get(function(obj) {
      if (sessionStorage.loggedIn === "true"){
        if (obj.unspoiledOn === true) {
          if (obj.filter.length >= 1) {
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

var allTags = $('body').find('*').not('script')
var array_of_words = []
chrome.storage.local.get("filter", function(obj) {
  if (obj.filter) {
    array_of_words = obj.filter
  }
})


var textNodes = $("*").contents().filter(function(){ return this.nodeType == 3; });
function hideWord(tags) {
  textNodes.each(function(index, node) {
    array_of_words.forEach(function(word){
      if (node.wholeText.toLowerCase().match(word) != null) {
        $(node.parentNode).hide()
        $(node.parentNode).parent().append('<a class= "meep" href="#" style="color: white; background-color: #0F0051; border: 3px solid lightblue; width: 200px;">Unspoiled (click to show spoiler)</a>')
      }
    })
  });
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
