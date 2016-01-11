$(document).ready(function(){

  // $('#category').on('submit', '.filter',function(event){
  //   event.preventDefault();
  //   $.ajax({
  //     url: event.target.action,
  //     method: event.target.method,
  //     data: $(this).serialize()
  //   }).done(function(response){
  //     $('#category').html(response)
  //   }).fail(function(error){
  //   debugger
  //     console.log("fail :(", error)
  //   })
  // });

  $('.new_preference').on('submit', function(event) {
    console.log("new_preference", event)
    event.preventDefault();
    var $form = $(event.target);
    var id = $form.data('id');
    var selector = '#user-feedback-' + id;
    $.ajax({
      url: $form.attr('action'),
      method: 'POST',
      dataType:'json',
      data: $form.serialize()
    }).done(function(response){
        swal({
          title: "Confirmed",
          text: response.message +" has been added",
          showConfirmButton: true,
          allowOutsideClick: true,
          type: "success"
        });

    }).fail(function(error){
      swal({
          title: "Error!",
          text: "You already added this filter",
          showConfirmButton: true,
          allowOutsideClick: true,
          type: "error"
        });
    });
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
