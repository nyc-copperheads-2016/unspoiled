$(document).ready(function(){

  $('#toggle_event_editing button').click(function(){
    if($(this).hasClass('locked_active') || $(this).hasClass('unlocked_inactive')){
      /* code to do when unlocking */
    }else{
      /* code to do when locking */
    }

    $('#toggle_event_editing button').eq(0).toggleClass('locked_inactive locked_active btn-default btn-info');
    $('#toggle_event_editing button').eq(1).toggleClass('unlocked_inactive unlocked_active btn-info btn-default');
  });
})
