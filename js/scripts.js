$(document).ready(function(){
  // $('.parallax').parallax();
  var prompts = ["swift", "divided", "poison", "underwater", "long", "sword",
                "shy", "crooked", "screech", "gigantic", "run", "shattered",
                "teeming", "fierce", "mystery", "fat", "graceful", "filthy",
                "cloud", "deep", "furious", "trail", "juicy", "blind", "ship",
                "squeak", "climb", "fall", "united", "found", "mask"];

  var d = new Date();
  var n = d.getDate();

  for (var index = 0; index < n; index++) {
    if ( index % 2 === 0) {
      $("#even-boxes").append("<div class='prompt-box'>" +
                                   + (index + 1) + ". " + prompts[index] +
                                "</div>");
    } else {
      $("#odd-boxes").append("<div class='prompt-box'>" +
                                 + (index + 1) + ". " + prompts[index] +
                              "</div>");
    }
  }
  prompts.forEach(function(prompt){
    $("#prompt-boxes").append("<div class='prompt-box'>" +
                                 + 1 + ". " + prompt +
                              "</div>");
  });

  $(window).scroll(function() {
    $(".prompt-box").each(function() {
      var hT = $(this).offset().top;
      var hH = $(this).outerHeight();
      var wH = $(window).height()/2;
      var wS = $(window).scrollTop();
      if (wS > (hT+hH-wH)){
        $(this).animate({
          opacity: 1,
        }, 1200, function() {
        });
      }
    });
 });

  $(window).scroll(function(event){
    // var footerHeight = $("footer").outerHeight(true);
    var scrollHeight = $(document).height();
    var windowWidth = ($(window).width());
    var windowHeight = $(window).height()/1.25;
    // $("#penimg").animate({opacity: 1}, 800, function(){});
    var scrollTop = $(window).scrollTop();
    var scrollAmount = (scrollTop / (scrollHeight - windowHeight));
    // console.log(Math.sin(scrollAmount * (Math.PI)));
    var moveTop = 10 + Math.round(Math.sin(scrollAmount * (Math.PI)/2) * windowHeight);
    var moveLeft = Math.round(Math.sin(scrollAmount * (Math.PI)) * windowWidth);

    // $("#penimg").css("top", 10 + Math.round(Math.sin(scrollAmount * (Math.PI)/2) * windowHeight));
    // $("#penimg").css("left", Math.round(Math.sin(scrollAmount * (Math.PI)) * windowWidth));

    if (moveTop > 980) {
      $("#penimg").css("top", 980);
    } else {
      $("#penimg").css("top", Math.round(Math.sin(scrollAmount * (Math.PI)/2) * windowHeight));
    }
    if (moveLeft < 150) {
      $("#penimg").css("left", 150);
    } else {
      $("#penimg").css("left", Math.round(Math.sin(scrollAmount * (Math.PI)) * windowWidth));
    }
    // $("#stickytest").css("top", (Math.sin((scrollAmount) * 90) * windowWidth));
    if($(window).scrollTop() + $(window).height() > $(document).height() - 750) {
        $("#penimg").css("top", 750);
        $("#penimg").css("left", 150);
      }
  });
});
