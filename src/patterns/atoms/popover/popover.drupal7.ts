/**
 * @file
 * Provides PatternFly Bootstrap popover functionality.
 */

declare var jQuery: any;
declare var Drupal: any;

(($, Drupal) => {
  'use strict';

  Drupal.behaviors.popover = {
    attach() {
      $('[data-toggle="popover"]').once('popover').popovers();
    },
  };
})(jQuery, Drupal);
