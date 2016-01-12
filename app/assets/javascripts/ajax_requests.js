
$(document).ready(function(){

  String.prototype.supplant = function (o) {
      return this.replace(/{([^{}]*)}/g,
          function (a, b) {
              var r = o[b];
              return typeof r === 'string' || typeof r === 'number' ? r : a;
         }
     );
  };

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

  $('#category').on('click', "#on-off a", function(event){
    event.preventDefault();
    $.ajax({
      url: event.target.href,
      method: 'PUT',
      type: 'json'
      }).done(function(response){
        var onOff = response.active ? "on" : "off";
        var link = '<a href="/users/' + response.userId +
          '/preferences/' + response.preferenceId + '">' + onOff + "</a>";
     $("#filter-on-off-{id}".supplant({id:response.preferenceId})).html(link);
    }).fail(function(error){
      console.log("fail :(", error)
      })
    });

  $('#category').on('click', "#delete-filter a", function(event){
    event.preventDefault();
    // swal({   title: "Are you sure?",
    //     type: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#DD6B55",
    //     confirmButtonText: "Yes, delete it!",
    //     cancelButtonText: "Cancel",
    //     closeOnConfirm: false ,
    //      });
    $.ajax({
      url:event.target.href,
      method: 'DELETE',
      type: 'json'
    }).done(function(response){
      $("#filter-delete-{id}".supplant({id:response.id})).parent().parent().hide()
    }).fail(function(error){
      console.log("fail :(", error)
    })
  });
});


