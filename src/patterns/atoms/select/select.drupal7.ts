/**
 * @file
 * Provides PatternFly Bootstrap select functionality.
 */

declare var jQuery: any;
declare var Drupal: any;

(($, Drupal) => {
  'use strict';

  Drupal.behaviors.select = {
    attach() {
      $('.bootstrap-select select').selectpicker();
    },
  };
})(jQuery, Drupal);
