/**
 * @file
 * Provides PatternFly Bootstrap switch functionality to Drupal.
 */

declare var jQuery: any;
declare var Drupal: any;

(($) => {
  'use strict';

  Drupal.behaviors.bootstrapSwitch = {
    attach() {
      $('.bootstrap-switch').once('bootstrap-switch').bootstrapSwitch();
    },
  };
})(jQuery);
