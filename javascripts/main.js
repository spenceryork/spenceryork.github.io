"use strict";

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        console.log("what is hash", hash);
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
          window.location.hash = hash;
        });
      }
    });
  });