/**
 * @file
 * Provides search form functionality to KSS.
 */

(function ($) {
  'use strict';

  $('.search-pf .has-clear .clear').each(function () {
    if (!$(this).prev('.form-control').val()) {
      $(this).hide();
    }
  });
  $('.search-pf .has-clear .form-control').keyup(function () {
    var t = $(this);
    t.next('button').toggle(Boolean(t.val()));
  });
  $('.search-pf .has-clear .clear').click(function () {
    $(this).prev('.form-control').val('').focus();
    $(this).hide();
  });

})(jQuery);
