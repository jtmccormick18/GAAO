$(function() {
    $('.item').on('click', function() {
      console.log('clicked! going to: ' + $(this).find('a').attr('href'));
  
      window.location = $(this).find('a').attr('href');
    });
  });