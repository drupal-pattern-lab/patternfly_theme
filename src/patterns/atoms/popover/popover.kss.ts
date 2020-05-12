/**
 * @file
 * Provides PatternFly Bootstrap popover functionality to KSS.
 */

declare var jQuery: any;

(($) => {
  'use strict';

  $(document).ready(() => {
    $('[data-toggle="popover"]').popovers();
  });
})(jQuery);
