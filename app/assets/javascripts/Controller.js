$(document).ready(function(){
  $('.filter').on('submit', function(event) {
    var movieName = $(event.target).serializeArray()[3].value.toLowerCase().split(' ').join('-')
    Movie.findMovie("top-gun").then(function(cast) {
      var movieObj = new Movie(cast.results[0].id, "top-gun")
      var getCast = movieObj.credits()
      getCast.then(function(){
        return movieObj.cast
        // debugger
    })
      .then(function() {
      $.post("http://localhost:3000/filter_words", movieObj)
      })
    })
  })
    // findTv("the-expanse")
    // findMovie(movieName)
})

