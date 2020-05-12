/**
 * @file
 * Provides PatternFly Bootstrap tooltip functionality to KSS.
 */

declare var jQuery: any;

(($) => {
  'use strict';

  $(document).ready(() => {
    $('[data-toggle="tooltip"]').tooltip();
  });
})(jQuery);
