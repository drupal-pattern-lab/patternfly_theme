/**
 * @file
 * Provides PatternFly Bootstrap tooltip functionality.
 */

declare var jQuery: any;
declare var Drupal: any;

(($, Drupal) => {
  'use strict';

  Drupal.behaviors.tooltip = {
    attach() {
      $('[data-toggle="tooltip"]').tooltip();
    },
  };
})(jQuery, Drupal);
