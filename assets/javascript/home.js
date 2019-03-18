$(window).scroll(function(){
    $(".jumbotron").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginBottom": ($(window).scrollTop()) + "px"} );
  });