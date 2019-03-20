$(document).ready(function(){
  var slideIndex = 0;
  carousel();

 
})

function carousel(){
  var carouselItem = $('.js-carousel-item');
  carouselItem.each(function(){
    $(this).fadeOut();
  })
  slideIndex++;
  if(slideIndex > carouselItem.lenght ){
    slideIndex = 1;
  }
  
}