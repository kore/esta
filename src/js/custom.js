;
(function(window, document, $) {

    $('#js_menu').css('visibility', 'visible');
    $('#nojs_menu').css('display', 'none');
    $('.js_show').toggle();
    $('.js_hide').toggle();

    $('.avaiable').on('click', function() {

        $id = $(this).attr('id');
        $date = 'date' + $id.substr(($id.indexOf('-') + 1), 1);
        $time = $id.substring(0, ($id.indexOf('-')));
        $('#form_date').val($('#' + $date).text());
        $('#form_time').val($('#' + $time).text());
    });

    $(document).ready(function() {
        $('.button-group > li > a').addClass('small button');
        $('.button-group > li.disabled > a').addClass('disabled');
        $('#MenuModal').html($('#nojs_menu > div').html());
        $('#MenuModal').append('<a class="close-reveal-modal" data-icon="&#xe014;" style="color:#fff;"></a>');
        $('#nojs_menu > div').remove();

    });
    
    $('#teacher-ac').on( 'autocompleteselect', function(e, ui) {
        e.preventDefault();
        window.location.href = "index.php?r=Appointment/makeAppointment&teacher="+ui.item.value;
    });
    
    $('#red-button').on('click', function(e){
        e.preventDefault();
        $answer = confirm('Alles löschen?');
        if ($answer) {
            window.location.href = "index.php?r=user/deleteAll";
        }
    });

}(this, document, jQuery));

