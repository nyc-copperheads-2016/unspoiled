var movieSearch = function(tv){
   var tvUrl = 'http://api.themoviedb.org/3/',
        mode = 'search/movie?query=',
        input = tv,
        key = '&api_key=e0c6c7bded5055b146501304684b8f94';

    return $.get(tvUrl+mode+input+key).then(function(response){
    console.log(response);
    });
  };






// $(document).ready(function() {

//   function Category(json) {
//   Object.assign(this,json);
//   this.createdAt = new Date(this.created_at);
//   this.updatedAt = new Date(this.updated_at);
//   }

//   Category.prototype.tvSearch = function(tv){
//    var tvUrl = 'http://api.themoviedb.org/3/',
//         mode = 'search/tv?query=',
//         input = "breaking-bad",
//         key = '&api_key=e0c6c7bded5055b146501304684b8f94';

//     return $.get(tvUrl+mode+input+key).then(function(response){
//     console.log("tv"+response);
//     });
//   };
// });


  // Media.prototype.tvSearch = function(tv){
  //  var tvUrl = 'http://api.themoviedb.org/3/',
  //       mode = 'search/tv?query=',
  //       input = "breaking-bad",
  //       key = '&api_key=e0c6c7bded5055b146501304684b8f94';

  // return $.get(tvUrl+mode+input+key).then(function(response){
  //   console.log("tv"+response);
  // });



