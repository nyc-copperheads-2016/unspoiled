$(document).ready(function(){

<<<<<<< 5036a6dcb608b93ef622a2c920cbb411de4a1164
  $('.list-group-item a').on('click', function(event){
    event.preventDefault();
    event.preventDefault();
    $.ajax({
      url: event.target.href,
      method: 'GET'
    }).done(function(response){
      $('#category').html(response)
    }).fail(function(error){
      console.log("fail :(", error)
    });
  })

  $('#category').on('submit', '.filter',function(event){
    event.preventDefault();
    $.ajax({
      url: event.target.action,
      method: event.target.method,
      data: $(this).serialize()
    }).done(function(response){
      $('#category').html(response)
    }).fail(function(error){
      console.log(error + "doesn't work")
    })
  });
  $('#filter-status').on('click', 'a', function(event){
    event.preventDefault();
    $.ajax({
      url: event.target.href,
      method: 'PUT'
    }).done(function(response){
      $('#filter-status').html(response);
      console.log("response", response);
    }).fail(function(error){
    })
  });

});



