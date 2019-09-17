document.addEventListener("DOMContentLoaded", function() {

  var h1 = 0;
  var h2 = 0;
$('.comments-items .col-md-6').each(function(index) {
  if (index % 2 != 0) {
    $(this).css('right',0);
    $(this).css('top',h2);
    h2 = h2+$(this).height()
  };
  if (index % 2 == 0) {
    $(this).css('top',h1);
    h1 = h1+$(this).height()
  };

});
if ($('.comments-items .col-md-6').last().offset().top-15 > h2) {
  $('.comments-items .col-md-6').last().css('top',h2);
  h1 = h1-$('.comments-items .col-md-6').last().height()
  h2 = h2+$('.comments-items .col-md-6').last().height()
  $('.comments-items .col-md-6').last().css('right',0);
};
if (h1>h2) {
  $('.comments-items').css('height',h1)
}else {
  $('.comments-items').css('height',h2)
}

});
