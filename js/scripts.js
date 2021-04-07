  $(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnFocus: true,
        swipeToSlide: true,
        focusOnSelect: true,
      });

      $('.responsive').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

      
      $("#first-multi").select2({
        placeholder: "Select a person..."
      });
      
      $("#sel_user").select2({
        theme: "classic",
      });
      $("#user_selected").select2({
        theme: "classic",
      });

      $("#user_selected").change(function(){
        var value = $(this).val();
        $("#sel_user").val(value);
        $("#sel_user").select2({theme: "classic"}).trigger("change");
        
      });


  });