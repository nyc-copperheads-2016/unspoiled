var movieSearch = function(movie){
  var url = 'http://api.themoviedb.org/3/',
      mode = 'search/movie?query=',
      input = movie,
      key = '&api_key=e0c6c7bded5055b146501304684b8f94';

    return $.get(url + mode + input + key).then(function(response){

    movieCredits(response.results[0].id,response.results[0].original_title);
    });
  };

var tvSearch = function(tv){
 var url = 'http://api.themoviedb.org/3/',
     mode = 'search/tv?query=',
     input = tv,
     key = '&api_key=e0c6c7bded5055b146501304684b8f94';

 return $.get(url + mode + input + key).then(function(response){
    tvCredits(response.results[0].id,response.results[0].name);
  })
 }


var movieCredits = function(id,title){
 var url = 'http://api.themoviedb.org/3/',
     mode = 'movie/' +id+ '/credits?query=',
     input = "hello",
     key = '&api_key=e0c6c7bded5055b146501304684b8f94';

  return $.get(url + mode + key).then(function(response){
    var cast = [title]
    response.cast.forEach(function(element){
      cast.push(element.character, element.name)
    });
    return(cast)
  })
 }


var tvCredits = function(id,title){
  var url = 'http://api.themoviedb.org/3/',
      mode = "tv/" + id + "/credits?query=",
      key = '&api_key=e0c6c7bded5055b146501304684b8f94';

  return $.get(url + mode + key).then(function(response){
    var cast = [title]
    response.cast.forEach(function(element){
      cast.push(element.character, element.name)
    });
    return(cast)
  })
}


