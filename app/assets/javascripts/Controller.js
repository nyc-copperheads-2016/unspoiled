// $(document).ready(function(){
//   $('.filter').on('submit', function(event) {
//     var movieName = $(event.target).serializeArray()[3].value.toLowerCase().split(' ').join('-')
//     Movie.findMovie("top-gun").then(function(cast) {
//       var movieObj = new Movie(cast.results[0].id, "top-gun")
//       var getCast = movieObj.credits()
//       getCast.then(function(){
//         return movieObj.cast
//         // debugger
//     })
//       .then(function() {
//       $.post("http://localhost:3000/filter_words", movieObj)
//       })
//     })
//   })
//     // findTv("the-expanse")
//     // findMovie(movieName)
// })
$(document).ready(function(){

  $('#toggle_event_editing button').click(function(){
    if($(this).hasClass('locked_active') || $(this).hasClass('unlocked_inactive')){
      /* code to do when unlocking */
    }else{
      /* code to do when locking */
    }

    $('#toggle_event_editing button').eq(0).toggleClass('locked_inactive locked_active btn-default btn-info');
    $('#toggle_event_editing button').eq(1).toggleClass('unlocked_inactive unlocked_active btn-info btn-default');
  });
})

//button toggle.
