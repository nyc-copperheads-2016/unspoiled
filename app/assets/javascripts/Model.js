var Movie = function(id, title) {
  // this.url = 'http://api.themoviedb.org/3/'
  this.id = id
  this.mode = 'movie/' + this.id + '/credits?query='
  this.title = title
  // this.key = '&api_key=e0c6c7bded5055b146501304684b8f94'
  this.cast = []
}

Movie.prototype.credits = function() {
  var movie = this
  var cast = this.cast
  return $.get('http://api.themoviedb.org/3/' + movie.mode + '&api_key=e0c6c7bded5055b146501304684b8f94')
  .done(function(response){
  debugger
      response.cast.forEach(function(element){
        cast.push(element.character, element.name)
      })
    }).done(function(response){
      this.cast = cast;
    })
}

var movieCredits = function(id,title){
 var url = 'http://api.themoviedb.org/3/',
     mode = 'movie/' +id+ '/credits?query=',
     input = "hello",
     key = '&api_key=e0c6c7bded5055b146501304684b8f94';
  var cast = [title]
  return dog =  $.get(url + mode + key).then(function(response){
    response.cast.forEach(function(element){
      cast.push(element.character, element.name)
    });
    return cast
  })
  debugger
 }

Movie.prototype.search = function() {
  var movie = this;
  var cast = this.cast;
  return $.get('http://api.themoviedb.org/3/' + this.mode + '&api_key=e0c6c7bded5055b146501304684b8f94')
  .then(function(response){
    return movie.credits();
  });
}

Movie.findMovie = function(movieTitle) {
  return $.get('http://api.themoviedb.org/3/search/movie?query=' + movieTitle + '&api_key=e0c6c7bded5055b146501304684b8f94')
}


////////////////////////////////////////////////

var Tv = function(id, title) {
  this.url = 'http://api.themoviedb.org/3/'
  this.id = id
  this.title = title
  this.mode = "tv/" + this.id + "/credits?query="
  this.key = '&api_key=e0c6c7bded5055b146501304684b8f94'
  this.cast = [title]
}

Tv.prototype.credits = function() {
  var cast = this.cast
    return $.get(this.url + this.mode + this.key).then(function(response){
      response.cast.forEach(function(element){
        cast.push(element.character, element.name)
      });
    }).done(function(response){
      this.cast = cast;
  })
}

Tv.prototype.search = function() {
  var tv = this
   return $.get(this.url + this.mode + this.key).then(function(response){
    return tv.credits();
  })
}

// $(document).ready(function(){
//   var movieOne = new Movie(744, "hello")
//   var m1 = movieOne.search()
//   m1.then(function(cast){
//     // console.log(movieOne.cast)
//     return movieOne.cast
//   })
//   var tvOne = new Tv(63639, "the-expanse")
//   var searchTV = tvOne.search()
//   searchTV.then(function(cast){
//     // console.log(tvOne.cast)
//     return tvOne.cast
//   })
// })

