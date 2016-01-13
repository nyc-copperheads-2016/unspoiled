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
  // $.get("https://thawing-badlands-1060.herokuapp.com/filtered_words", function(data) {
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

var allTags = $('body').find('*').not('script')
var array_of_words = []
chrome.storage.local.get("filter", function(obj) {
  if (obj.filter) {
    array_of_words = obj.filter
  }
})

// function findMatch(text) {
//   if (!text) {
//     return;
//   }
//   // var match = false
//   // if (array_of_words.indexOf(text.toLowerCase()) != -1) {
//     // $.each(array_of_words, function(index, element){
//       for (var i=0; i < array_of_words.length - 1; i++) {
//       // debugger
//         if (text.toLowerCase().match(array_of_words[i]) != null) {
//       // if (text.toLowerCase().search(array_of_words[index]) != -1 ) {
//       // match = true;
//       // console.log("hi")
//           console.log("check", text, array_of_words[i]);
//           return true
//         }
//     // return true
//     // match = true
//     }
//   return false
// }


var textNodes = $("*").contents().filter(function(){ return this.nodeType == 3; });
function hideWord(tags) {
  textNodes.each(function(index, node) {
    array_of_words.forEach(function(word){
      if (node.wholeText.toLowerCase().match(word) != null) {
        // console.log("word", word, node.parentNode)
        $(node.parentNode).hide()
        $(node.parentNode).parent().append('<a class= "meep" href="#" style="color: white; background-color: purple; border: 3px solid lightblue; width: 200px;">Unspoiled (click to show spoiler)</a>')
      }
    })
  });
}
//   $.each(tags, function(key, element) {
//     console.log(element)
//     // debugger
//     if (findMatch(element.text)) {
//       // debugger
//       // var childNodes = element.childNodes
//       // for (var i=0; i< childNodes.length - 1; i++) {
//         // debugger
//         // if (childNodes[i].innerHTML != undefined && findMatch(childNodes[i])) {
//       // $.each(element, function(index, element) {
//       // console.log($(element)[0])
//       // $(element).hide()
//       // var replaceImg = '<img src="http://localhost:3000/assets/icon-945908b8301759cca3dc7d98c417383df6e8697fc6362343b526a240b599fc94.png" alt="Unspoiled!" />'
//       // console.log($(element))
//       // debugger
//       console.log('will hide', element);

//       $(element).hide()
//      $(element).parent().append('<a class= "meep" href="#" style="border: 3px solid red; width: 200px;">Unspoiled (click to show spoiler)</a>')
//         // }
//       // })
//     }
//   })

$(document).ready(function() {
  loggedIn()
  setFilter()
  $('body').on('click','.meep' ,function(event){
    event.preventDefault();
    $(event.target).siblings().show()
    $(event.target).hide()
  })
})
