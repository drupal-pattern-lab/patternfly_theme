/**
 * @file
 * Provides PatternFly Bootstrap switch functionality to KSS.
 */

(function ($) {
  'use strict';

  $(function () {
    $(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title").matchHeight();
    $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
    $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-footer").matchHeight();
    $(".row-cards-pf > [class*='col'] > .card-pf").matchHeight();
    $('[data-toggle="tooltip"]').tooltip();
  });
})(jQuery);
