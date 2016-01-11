$(document).ready(function(){
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
      console.log("fail :(", error)
        $(event.target).append("You have already applied this filer")
    })
  });

  $('#filter-status').on('click', 'a', function(event){
    event.preventDefault();
    $.ajax({
      url: event.target.href,
      method: 'PUT'
    }).done(function(response){
      $('#filter-status').html(response);
    }).fail(function(error){
      console.log("fail :(", error)
    })
  });

  $('#my-filter').on('click', 'a', function(event){
    event.preventDefault();
    $.ajax({
      url: event.target.href,
    }).done(function(response){
      $('#category').html(response);
    }).fail(function(error){
      console.log("fail :(", error)
    })
  })
});



