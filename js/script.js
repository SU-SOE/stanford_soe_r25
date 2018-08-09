(function ($) {

  /*
   *  My script code comment
   */
  Drupal.behaviors.stanford_soe_r25 = {
    attach: function (context) {
      // Show the date select fields after a user chooses a date on old reservation form
      $('#edit-submitted-event-date-month, #edit-submitted-event-date-finish-month', context).on('change', function (e) {
        if($(this.id).selector == 'edit-submitted-event-date-month') {
          $('.webform-component--event-date .webform-datepicker select', context).show();
          $('.webform-component--event-date .webform-datepicker', context).addClass('picked');
        } else if ($(this.id).selector == 'edit-submitted-event-date-finish-month') {
          $('.webform-component--event-date-finish .webform-datepicker select', context).show();
          $('.webform-component--event-date-finish .webform-datepicker', context).addClass('picked');
        }
      });

      // Make sure we keep the dates the same for the Start and End dates when selecting from the form field.
      $('#edit-stanford-r25-booking-date-datepicker-popup-0, #edit-stanford-r25-booking-enddate-datepicker-popup-0', context).on('change', function (e) {
        if ($(this.id).selector == 'edit-stanford-r25-booking-date-datepicker-popup-0' || $(this.id).selector == 'edit-stanford-r25-booking-enddate-datepicker-popup-0') {
          if ($(this.id).selector == 'edit-stanford-r25-booking-date-datepicker-popup-0') {
            $('#edit-stanford-r25-booking-enddate-datepicker-popup-0', context).val($('#edit-stanford-r25-booking-date-datepicker-popup-0').val());
          } else {
            alert('foo');
            $('#edit-stanford-r25-booking-date-datepicker-popup-0', context).val($('#edit-stanford-r25-booking-enddate-datepicker-popup-0').val());
          }
          $('#edit-stanford-r25-booking-enddate-datepicker-popup-0', context).attr('readonly', true);
          $('#edit-stanford-r25-booking-date-datepicker-popup-0', context).attr('readonly', true);
        }
      });
    }
  };
})(jQuery);
