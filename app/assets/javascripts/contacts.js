// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
//= require application/jquery.shuffle.modernizr.min

$(function() {
  var $grid = $('.contact_list');

  $grid.shuffle({
    itemSelector: '.contact_item'
  });

  $('#contactList_sort').prop('selectedIndex',0).on('change', function() {
    var sort = this.value,
        opts = {};

    if (sort === 'company') {
      opts = {
        by: function ($el) {
          return $el.data('company');
        }
      };
    } else if (sort === 'company_desc') {
      opts = {
        reverse: true,
        by: function ($el) {
          return $el.data('company').toLowerCase();
        }
      };
    } else if (sort === 'name') {
      opts = {
        by: function ($el) {
          return $el.data('name').toLowerCase();
        }
      };
    } else if (sort === 'name_desc') {
      opts = {
        reverse: true,
        by: function ($el) {
          return $el.data('name').toLowerCase();
        }
      };
    } else if (sort === 'email') {
      opts = {
        by: function ($el) {
          return $el.data('email').toLowerCase();
        }
      };
    } else if (sort === 'email_desc') {
      opts = {
        reverse: true,
        by: function ($el) {
          return $el.data('email').toLowerCase();
        }
      };
    }

    // Sort elements
    $grid.shuffle('sort', opts);
  });

  $('#contactList_filter').prop('selectedIndex',0).on('change', function() {
    var group = this.value;

    // Filter elements
    $grid.shuffle( 'shuffle', group );
    $('#contactList_sort').prop('selectedIndex',0);
    $('#contactList_search').val('');
  });

  $('#contactList_search').val('').on('keyup', function() {
    var uName = this.value;
    if(uName.length > 1) {
      $('#contactList_filter, #contactList_sort').prop('selectedIndex',0);
      // Filter elements
      $grid.shuffle('shuffle', function ($el, shuffle) {
        return $el.data('name').toLowerCase().indexOf(uName.toLowerCase()) >= 0;
      });
    } else {
      $grid.shuffle( 'shuffle', $('#contactList_filter').val() );
    }
  });
});
