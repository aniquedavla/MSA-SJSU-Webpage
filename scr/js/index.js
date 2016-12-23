
$(document).ready(function(){
  var page = $('html,body');
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    //stop auto scrolls when uses manuallly scrols
    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    page.animate({
      scrollTop: $(hash).offset().top
    }, 500, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
})
$(".navbar a, footera[href='#contact']").on('click',function(event){
  var page = $('html,body');
//stop auto scrolls when uses manuallly scrols
    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });
// Prevent default anchor click behavior
event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
   page.animate({
      scrollTop: $(hash).offset().top
    }, 500, function(){
      // Add hash (#) to URL when done scrolling (default click behavior)

      window.location.hash = hash;
    });
  });
