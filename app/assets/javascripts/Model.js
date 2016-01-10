var movieSearch = function(movie){
  var url = 'http://api.themoviedb.org/3/',
      mode = 'search/movie?query=',
      input = movie,
      key = '&api_key=e0c6c7bded5055b146501304684b8f94';

    return $.get(url + mode + input + key).then(function(response){
    movieCredits(response.results[0].id);
    });
  };

var tvSearch = function(tv){
 var url = 'http://api.themoviedb.org/3/',
     mode = 'search/tv?query=',
     input = tv,
     key = '&api_key=e0c6c7bded5055b146501304684b8f94';

 return $.get(url + mode + input + key).then(function(response){
    console.log(response)
    tvCredits(response.results[0].id);
  })
 }


var movieCredits = function(id){
 var url = 'http://api.themoviedb.org/3/',
     mode = 'movie/' +id+ '/credits?query=',
     input = "hello",
     key = '&api_key=e0c6c7bded5055b146501304684b8f94';

  return $.get(url + mode + key).then(function(response){
    var cast = []
    response.cast.forEach(function(element){
      cast.push(element.character, element.name)
    });
    console.log(cast)
  })
 }


var tvCredits = function(id){
  var url = 'http://api.themoviedb.org/3/',
      mode = "tv/" + id + "/credits?query=",
      key = '&api_key=e0c6c7bded5055b146501304684b8f94';

  return $.get(url + mode + key).then(function(response){
    var cast = []
    response.cast.forEach(function(element){
      cast.push(element.character, element.name)
    });
    console.log(cast)
  })
}


