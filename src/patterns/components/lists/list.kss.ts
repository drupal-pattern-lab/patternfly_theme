/**
 * @file
 * Provides initialization for list components.
 */

declare var jQuery: any;

(($) => {
  'use strict';
  $(document).ready(() => {
    // Row Checkbox Selection.
    $("input[type='checkbox']").change((e) => {
      const $target = $(e.currentTarget);
      if ($target.is(':checked')) {
        $target.closest('.list-group-item').addClass('active');
      } else {
        $target.closest('.list-group-item').removeClass('active');
      }
    });
    // Row click selection.
    $('.list-group-item').on('click', (e) => {
      if ($(e.target).prop('tagName') === 'DIV') {
        const $target = $(e.currentTarget);
        const $checkbox = $target.find("input[type='checkbox']");
        if ($checkbox) {
          $checkbox.trigger('click');
        }
      }
    });
    // Toggle dropdown menu.
    $('.list-view-pf-actions').on('show.bs.dropdown', (e) => {
      const $target = $(e.currentTarget);
      const $dropdown = $target.find('.dropdown');
      if ($dropdown) {
        const space = $(window).height()
          - $dropdown[0].getBoundingClientRect().top
          - $target.find('.dropdown-menu').outerHeight(true);
        $dropdown.toggleClass('dropup', space < 10);
        e.stopPropagation();
      }
    });
    // Allow users to select multiple list items with shift key.
    $('.list-group').on('click', '.list-view-pf-checkbox>input', (e) => {
      const $list = $('.list-group');
      const prevIndex = $list.data('preIndex');
      const $listItems = $list.children('.list-group-item');
      const $currentItem = $(e.currentTarget).closest('.list-group-item');
      if (e.shiftKey && prevIndex > -1 && this.checked) {
        const currentIndex = $listItems.index($currentItem);
        const $selectScope = currentIndex - prevIndex > 0
          ? $currentItem.prevAll()
              .not($listItems.eq(prevIndex).prevAll().addBack())
          : $listItems.eq(prevIndex)
            .prevAll()
            .not($currentItem.prevAll().addBack());
        $selectScope.addClass('active')
          .find('.list-view-pf-checkbox')
          .children('input')
          .prop('checked', true);
      }
      $list.data('preIndex', this.checked
        ? $listItems.index($currentItem)
        : -1);
    });

  });
})(jQuery);
