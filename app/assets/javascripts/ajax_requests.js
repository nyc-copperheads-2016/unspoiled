$(document).ready(function(){

  $('.li a').on('click', function(event){
    event.preventDefault();
    $.ajax({
      url: event.target.href,
      method: 'GET'
    }).done(function(response){
      $('#category').html(response)
    }).fail(function(error){
       debugger
      console.log(error + "doesn't work")
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
});



  //filter status
  // $('#filter-status a').on('click', function(event){
  //   event.preventDefault();
  //   $.ajax({
  //     url: event.target.href,
  //     method: 'PUT'
  //   }).done(function(response){
  //     $('#filter-status').html(response);
  //   }).fail(function(error){
  //     console.log(error + "doesn't work");
  //   });
  // });
