/**
 * @file
 * Provides PatternFly navigation functionality to Drupal.
 */

(function ($) {
  'use strict';

  Drupal.behaviors.navigation = {
    attach: function (context) {
      $('.navbar-utility .pficon-search').parent().click(function (e) {
        var input = $('#search-form-search-header');
        var canSubmit = input.val() !== '';
        if (!canSubmit) {
          $('.navbar-utility .search-pf-input-group').toggle();
          e.preventDefault();
          input.val('').focus();
        }
      });
    }
  };
})(jQuery);
