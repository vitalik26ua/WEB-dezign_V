document.addEventListener("DOMContentLoaded", function() {

// Карусель
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:30,
      autoHeight:true,
      dot:true,
      responsive:{
          600:{
              items:1
          },
          1000:{
              items:2
          }
      }
  })

// коментарі
  if ($("section").is(".comments")) {
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
    };
  };

// календар
var TinyDatePicker = DateRangePicker.TinyDatePicker;
  var dpPermanent = TinyDatePicker('.permanent-cal-container', {
    mode: 'dp-permanent',
  });

});

// колендар
    const root = document.querySelector('.ex-inputs');
    const txtStart = root.querySelector('.ex-inputs-start');
    const txtEnd = root.querySelector('.ex-inputs-end');
    const container = root.querySelector('.ex-inputs-picker');
    DateRangePicker.DateRangePicker(container)
      .on('statechange', function (_, rp) {
        var range = rp.state;
        txtStart.value = range.start ? range.start.toDateString() : '';
        txtEnd.value = range.end ? range.end.toDateString() : '';
      });
    txtStart.addEventListener('focus', showPicker);
    txtEnd.addEventListener('focus', showPicker);

    function showPicker() {
      container.classList.add('ex-inputs-picker-visible');
    }
    let previousTimeout;
    root.addEventListener('focusout', function hidePicker() {
      clearTimeout(previousTimeout);
      previousTimeout = setTimeout(function() {
        if (!root.contains(document.activeElement)) {
          container.classList.remove('ex-inputs-picker-visible');
        }
      }, 10);
    });
