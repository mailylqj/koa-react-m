$(function() {
  impress().init();
  $("#next").click(function() {
    impress().next();
  });
  $("#prev").click(function() {
    impress().prev();
  });
  $(".ruby").css("opacity", 0.1);
  window.addEventListener("impress:stepenter", function() {
    $(".ruby.active").animate({ opacity: 1 });
  });
  window.addEventListener("impress:stepleave", function() {
    $(".ruby.past").animate({ opacity: 0.1 });
  });
  window.addEventListener("impress:stepenter", function() {
    $(".ruby.active p img").addClass("animated bounceInDown");
  });
  window.addEventListener("impress:stepenter", function() {
    $(".ruby.past p img").removeClass("animated bounceInDown");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#what_content.active p.text-center").addClass("animated tada");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#what_content.past p.text-center").removeClass("animated tada");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#what_content.future p.text-center").removeClass("animated tada");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#how_content.active p.tittle").addClass("animated bounceIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#how_content.past p.tittle").removeClass("animated bounceIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#how_content.future p.tittle").removeClass("animated bounceIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#first.active p.tittle").addClass("animated bounceInRight");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#first.past p.tittle").removeClass("animated bounceInRight");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#first.future p.tittle").removeClass("animated bounceInRight");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#second.active p.tittle").addClass("animated bounceInLeft");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#second.past p.tittle").removeClass("animated bounceInLeft");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#second.future p.tittle").removeClass("animated bounceInLeft");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#third.active p.tittle").addClass("animated bounceInUp");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#third.past p.tittle").removeClass("animated bounceInUp");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#third.future p.tittle").removeClass("animated bounceInUp");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#fourth.active p.tittle").addClass("animated bounceInDown");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#fourth.past p.tittle").removeClass("animated bounceInDown");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#fourth.future p.tittle").removeClass("animated bounceInDown");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#five.active p.tittle").addClass("animated rollIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#five.past p.tittle").removeClass("animated rollIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#five.future p.tittle").removeClass("animated rollIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#frontend.animar.active ul li").addClass("animated bounceIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#frontend.animar.past ul li").removeClass("animated bounceIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#frontend.animar.future ul li").removeClass("animated bounceIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#backend.animar.active ul li").addClass("animated lightSpeedIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#backend.animar.past ul li").removeClass("animated lightSpeedIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#backend.animar.future ul li").removeClass("animated lightSpeedIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#catch.animar.active ul li").addClass("animated lightSpeedIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#catch.animar.past ul li").removeClass("animated lightSpeedIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#catch.animar.future ul li").removeClass("animated lightSpeedIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#services_one.active p").addClass("animated lightSpeedIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#services_one.future p").removeClass("animated lightSpeedIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#services_one.active p img").addClass("animated lightSpeedIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#services_one.active p img").removeClass("animated lightSpeedIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#services_tags.active p.upLine").addClass("animated bounceInDown");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#services_tags.past p.upLine").removeClass("animated bounceInDown");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#services_tags.future p.upLine").removeClass("animated bounceInDown");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#services_tags.active p.downLine").addClass("animated bounceInUp");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#services_tags.past p.downLine").removeClass("animated bounceInUp");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#services_tags.future p.downLine").removeClass("animated bounceInUp");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#services_tags.active ul.scaleZero").addClass("animated bounceIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#services_tags.past ul.scaleZero").removeClass("animated bounceIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#services_tags.future ul.scaleZero").removeClass("animated bounceIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#Options.animar.active pre").addClass("animated bounceIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#Options.animar.past pre").removeClass("animated bounceIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#Options.animar.future pre").removeClass("animated bounceIn");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#success_map.active div.map_bg").addClass("animated pulse");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#success_map.past div.map_bg").removeClass("animated pulse");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#success_map.future div.map_bg").removeClass("animated pulse");
  });
  window.addEventListener("impress:stepenter", function() {
    $("#success_map.active div.map_bg div.california")
      .delay(1000)
      .queue(function(next) {
        $(this).addClass("scaleOne");
        next();
      });
  });
  window.addEventListener("impress:stepenter", function() {
    $("#success_map.active div.map_bg div.atlanta")
      .delay(1200)
      .queue(function(next) {
        $(this).addClass("scaleOne");
        next();
      });
  });
  window.addEventListener("impress:stepenter", function() {
    $("#success_map.active div.map_bg div.baires")
      .delay(1400)
      .queue(function(next) {
        $(this).addClass("scaleOne");
        next();
      });
  });
  window.addEventListener("impress:stepenter", function() {
    $("#success_map.active div.map_bg div.tcm")
      .delay(1600)
      .queue(function(next) {
        $(this).addClass("scaleOne");
        next();
      });
  });
  window.addEventListener("impress:stepenter", function() {
    $("#success_map.active div.map_bg div.baires2")
      .delay(1700)
      .queue(function(next) {
        $(this).addClass("scaleOne");
        next();
      });
  });
  window.addEventListener("impress:stepenter", function() {
    $("#success_map.active div.map_bg div.spain")
      .delay(1750)
      .queue(function(next) {
        $(this).addClass("scaleOne");
        next();
      });
  });
  window.addEventListener("impress:stepenter", function() {
    $("#success_map.active div.map_bg div.remoov")
      .delay(1800)
      .queue(function(next) {
        $(this).addClass("scaleOne");
        next();
      });
  });
  window.addEventListener("impress:stepenter", function() {
    $("#success_map.active div.map_bg div.social-volt")
      .delay(1850)
      .queue(function(next) {
        $(this).addClass("scaleOne");
        next();
      });
  });
  window.addEventListener("impress:stepenter", function() {
    $("#success_map.active div.map_bg div.mass")
      .delay(1900)
      .queue(function(next) {
        $(this).addClass("scaleOne");
        next();
      });
  });
  window.addEventListener("impress:stepenter", function() {
    $("#success_map.active div.map_bg div.healthlines")
      .delay(1950)
      .queue(function(next) {
        $(this).addClass("scaleOne");
        next();
      });
  });
  window.addEventListener("impress:stepenter", function() {
    $("#success_map.past div.map_bg div.clients-logos").removeClass(
      "spainMove baires2Move tcmMove bairesMove atlantaMove californiaMove"
    );
  });
  window.addEventListener("impress:stepenter", function() {
    $("#success_map.future div.map_bg div.clients-logos").removeClass(
      "spainMove baires2Move tcmMove bairesMove atlantaMove californiaMove"
    );
  });
  $("#success_map.past").css("opacity", 0);
  window.addEventListener("impress:stepenter", function() {
    $("#success_map.past div.map_bg.active").animate({ opacity: 1 });
  });
  window.addEventListener("impress:stepleave", function() {
    $("#success_map.past div.map_bg.past").animate({ opacity: 0 });
  });
  window.addEventListener("impress:stepenter", function() {
    $("#slogan-finish.present div.drop_box span#drop_down").addClass(
      "animated hinge"
    );
  });
  window.addEventListener("impress:stepenter", function() {
    $("#slogan-finish.past div.drop_box span#drop_down").removeClass(
      "animated hinge"
    );
  });
  window.addEventListener("impress:stepenter", function() {
    $("#slogan-finish.future div.drop_box span#drop_down").removeClass(
      "animated hinge"
    );
  });
});
$(document).ready(function() {
  document.onmousewheel = function() {
    stopWheel();
  };
  if (document.addEventListener) {
    document.addEventListener("DOMMouseScroll", stopWheel, false);
  }
  function stopWheel(e) {
    if (!e) {
      e = window.event;
    }
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  }
});
