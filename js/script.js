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
    }
  };

})(jQuery);
