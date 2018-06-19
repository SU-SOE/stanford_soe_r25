(function ($) {

  /*
   *  My script code comment
   */
  Drupal.behaviors.stanford_soe_r25 = {
    attach: function (context) {
      // My code here...
      $('#edit-submitted-event-date-month').on('change', function (e) {
        $('#edit-submitted-event-date-month').show();
        $('.webform-component--event-date .webform-datepicker').addClass('picked');
      });
      $('#edit-submitted-event-date-day').on('change', function (e) {
        $('#edit-submitted-event-date-day').show();
      });
      $('#edit-submitted-event-date-year').on('change', function (e) {
        $('#edit-submitted-event-date-year').show();
      });
      $('#edit-submitted-event-date-finish-month').on('change', function (e) {
        $('#edit-submitted-event-date-finish-month').show();
        $('.webform-component--event-date-finish .webform-datepicker').addClass('picked');
      });
      $('#edit-submitted-event-date-finish-day').on('change', function (e) {
        $('#edit-submitted-event-date-finish-day').show();
      });
      $('#edit-submitted-event-date-finish-year').on('change', function (e) {
        $('#edit-submitted-event-date-finish-year').show();
      });
    }
  };

})(jQuery);
