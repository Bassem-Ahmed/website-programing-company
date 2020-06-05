
jQuery(document).ready(function($) {

  //Slide nav
  $('<div class="slide-nav-button"><div class="nav-icon"><div></div></div></div>').insertBefore(".slide-nav");
  $(".slide-nav-button").click(function() {
    $("body").toggleClass("active-slide-nav");
  });
  //Responsee eside nav
  $('.aside-nav > ul > li:has(ul)').addClass('aside-submenu');
  $('.aside-nav > ul ul > li:has(ul)').addClass('aside-sub-submenu'); 
    $('.aside-nav > ul > li.aside-submenu > a').attr('aria-haspopup', 'true').click(function() {
    //Close other open sub menus
    $('.aside-nav ul li.aside-submenu:not(:hover) > ul').removeClass('show-aside-ul', 'fast');
    $('.aside-nav ul li.aside-submenu:hover > ul').toggleClass('show-aside-ul', 'fast'); 
  }); 
  $('.aside-nav > ul ul > li.aside-sub-submenu > a').attr('aria-haspopup', 'true').click(function() { 
    //Close other open sub menus
    $('.aside-nav ul ul li:not(:hover) > ul').removeClass('show-aside-ul', 'fast');
    $('.aside-nav ul ul li:hover > ul').toggleClass('show-aside-ul', 'fast');
  });
  //Mobile aside navigation
  $('.aside-nav-text').each(function(index, element) {
    $(element).click(function() { 
      $('.aside-nav > ul').toggleClass('show-menu', 'fast');
    });
  });  
  //Responsee nav   

  $('.top-nav > ul li:has(ul)').addClass('submenu');
  $('.top-nav > ul ul li:has(ul)').addClass('sub-submenu').removeClass('submenu');
  $('.top-nav > ul li.submenu > a').attr('aria-haspopup', 'true').click(function() { 
    //Close other open sub menus
    $('.top-nav > ul li.submenu > ul').removeClass('show-ul', 'fast'); 
    $('.top-nav > ul li.submenu:hover > ul').toggleClass('show-ul', 'fast');
  }); 
  $('.top-nav > ul ul > li.sub-submenu > a').attr('aria-haspopup', 'true').click(function(){
    //Close other open sub menus
    $('.top-nav ul ul li > ul').removeClass('show-ul', 'fast');  
    $('.top-nav ul ul li:hover > ul').toggleClass('show-ul', 'fast');   
  });
  //Mobile aside navigation  
  $('.nav-text').click(function() { 
    $('.top-nav > ul').toggleClass('show-menu', 'fast');
  }); 

});