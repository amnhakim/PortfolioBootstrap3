$(".page-scroll").on("click", function (e) {
  var tujuan = $(this).attr("href");

  var elemenTujuan = $(tujuan);

  $("html,body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 60,
    },
    1250,
    "easeInOutExpo"
  );

  e.preventDefault();
});

// parallax

//about
$(window).on("load", function () {
  $(".pkiri").addClass("pmuncul");
  $(".pkanan").addClass("pmuncul");
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  //jumbotron
  $(".jumbotron img").css({
    transform: "translate(0px," + wScroll / 4 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px," + wScroll / 2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px," + wScroll + "%)",
  });

  //projects
  if (wScroll > $(".projects").offset().top - 450) {
    $(".projects .thumbnail").each(function (i) {
      setTimeout(function () {
        $(".projects .thumbnail").eq(i).addClass("muncul");
      }, 300 * i);
    });
  }
});
