$(document).ready(function () {
  $('.hideOC').click(function () {
    $('.hideOC').hide();
    $('.appearOC').css('display', 'block');
    $('.instaFormOC').css('justify-content', 'flex-start');
    $('.instaFormOC').css('background-color', 'rgb(255, 255, 255)');
    $('.instaInputOC').focus();
    $('.instaInputOC').css('background-color', 'rgb(255, 255, 255)');
  });
});
