/**
 * @file
 * Provides PatternFly Bootstrap fieldset functionality to KSS.
 */

declare var jQuery: any;

(($) => {
  'use strict';

  $(document).ready(() => {
    $('[data-toggle="fieldset"] .fields-section-pf-children').addClass('hidden');
    $('[data-toggle="fieldset"] .fa.field-section-toggle-pf').removeClass('fa-angle-down');
    $('[data-toggle="fieldset"]').click(function(event) {
      event.preventDefault();
      $(this).parents('.fields-section-pf').find('.fa').toggleClass('fa-angle-down');
      $('.fields-section-pf-children', $(this)).toggleClass('hidden');
    });
  });
})(jQuery);
