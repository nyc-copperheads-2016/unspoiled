
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
          confirmButtonColor: "#0F0051",
          allowOutsideClick: true,
          type: "success"
        });

    }).fail(function(error){
      swal({
          title: "Error!",
          text: "You already added this filter",
          showConfirmButton: true,
          confirmButtonColor: "#0F0051",
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

  $('.wrapper').on('click', "#on-off a", function(event){
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

    $('.wrapper').on('click', "#delete-filter a", function(event){
      event.preventDefault();
      swal({   title: "Are you sure?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#0F0051",
          confirmButtonText: false,
          cancelButtonText: "Cancel",
          closeOnConfirm: false,
          closeOnCancel: false
           },
      function(confirm){
            if (confirm){
              $.ajax({
                url:event.target.href,
                method: 'DELETE',
                type: 'json'
              }).done(function(response){
                swal("Deleted!", "Filter was deleted", "success");
                $("#filter-delete-{id}".supplant({id:response.id})).parent().parent().hide();
              }).fail(function(error){
                console.log("fail :(", error);
              });
            }
            else{
              swal('Cancelled', 'Filter not deleted', 'error');
              return;
            }
        });
    });

  $('.new_user').on('submit',function(event){
    event.preventDefault();
    $.ajax({
      url: event.target.action,
      method: event.target.method,
      data: $(event.target).serialize()
    }).done(function(response){
      swal({title: 'Welcome',
            text: "Keep the stories you love unspoiled",
            imageUrl: '/assets/icon.png'});
      $('.wrapper').html(response)
    }).fail(function(response){
      debugger
      swal({
        title: "uh oh, something went"
        + response.message,
        type: 'warning',
        showCancelButton: false,
        confirmButtonColor:"#0F0051" ,
        confirmButtonText: false,
      })
      console.log("fail")
    })
  });
});


