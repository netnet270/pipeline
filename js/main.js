$(document).ready(function(){
  // sidebar-collapse

  $('.js-btn-collaspe').on('click', function(){
    $('.js-sidebar-collapse').slideToggle(300);
  })

  //Menu 
  $('.js-menu-item').each(function () {

    $(this).children('.js-menulink').on('click', function () {
      var menuItem = $(this).parent('.js-menu-item');
      if(menuItem.hasClass('main-menu__item--active')) {
        menuItem.children('.js-submenu').slideUp(250);
        menuItem.removeClass('main-menu__item--active');
      }

      else {
        $('.main-menu > li').removeClass('main-menu__item--active');
        menuItem.children('.js-submenu').slideDown(250);
        menuItem.addClass('main-menu__item--active');
      }
    })
  })

  $('.js-dropdown').on('click', function(){
    $('.js-dropdown-menu').slideToggle(300);
  })

  //carousel 

  $(".js-carousel-item:gt(0)").hide();

  setInterval(function() {
    $('.js-carousel-item:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.js-carousel');
  }, 3000);

  $(document).on('click', function(event) {
    if (!$(event.target).closest('.dropdown').length) {
        $(".js-dropdown-menu").slideUp(200);
    }
  });
})

