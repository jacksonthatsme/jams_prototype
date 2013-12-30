$( document ).ready(function() {
  $( "nav .container div" ).click(function() {
    $( "nav .container div" ).toggle();
    $( ".about" ).slideToggle( 500, function() {
     // Animation complete.
    });
  });
});