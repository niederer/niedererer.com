var goForward = function(){
  jQuery(".toggle-forward").click(function() {
    var parent = jQuery(this).closest(".slide1");
    parent.siblings().fadeToggle();
    parent.hide();
  });
};

var goBackward = function() {
  jQuery(".toggle-backward").click(function() {
    var parent = jQuery(this).closest(".slide2");
    parent.siblings().fadeToggle();
    parent.hide();
  });
};

goForward();
goBackward();