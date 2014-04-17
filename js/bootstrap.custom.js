// ADD SLIDEDOWN ANIMATION TO DROPDOWN //
$('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(100);
});

// ADD SLIDEUP ANIMATION TO DROPDOWN //
$('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

$('.hover-overlay').hover(
      function () {
       $(this).stop().animate({'opacity':'1'},500);
      }, 
      function () {
        $(this).stop().animate({'opacity':'0.0'},500);
      }
);
