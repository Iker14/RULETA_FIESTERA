// ruleta.js
$(document).ready(function() {
    $('#wheel').click(function() {
      var deg = Math.floor(360 * Math.random());
      $(this).css('transform', 'rotate(' + deg + 'deg)');
    });
  });