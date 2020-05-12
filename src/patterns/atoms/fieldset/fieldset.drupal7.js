/**
 * @file
 * Provides PatternFly fieldset functionality to Drupal.
 */

(function ($) {
  'use strict';

  Drupal.behaviors.fieldset = {
    attach: function (context) {
      $('[data-toggle="fieldset"] .fields-section-pf-children').addClass('hidden');
      $('[data-toggle="fieldset"] .fa.field-section-toggle-pf').removeClass('fa-angle-down');
      $('[data-toggle="fieldset"]').click(function (event) {
        event.preventDefault();
        $(this).parents('.fields-section-pf').find('.fa').toggleClass('fa-angle-down');
        $('.fields-section-pf-children', $(this)).toggleClass('hidden');
      });
    }
  };
})(jQuery);
