(function ($) {

  /*
   *  My script code comment
   */
  Drupal.behaviors.stanford_soe_r25 = {
    attach: function (context) {
      // Show the date select fields after a user chooses a date on old reservation form
      $('#edit-submitted-event-date-month').on('change', function (e) {
        $('.webform-component--event-date .webform-datepicker select').show();
        $('.webform-component--event-date .webform-datepicker').addClass('picked');
      });
      $('#edit-submitted-event-date-finish-month').on('change', function (e) {
        $('.webform-component--event-date-finish .webform-datepicker select').show();
        $('.webform-component--event-date-finish .webform-datepicker').addClass('picked');
      });
    }
  };

})(jQuery);