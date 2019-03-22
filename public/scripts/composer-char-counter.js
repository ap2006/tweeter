$(document).ready(function () {
var maxLength = 140;
  $(".new-tweet textarea").on("input", function(event) {
    var length = $(this).val().length;
    var charactersRemaining = maxLength - length;
    var $counter = $('.new-tweet .counter')
    $counter.text(charactersRemaining);
    if (length > maxLength) {
      $counter.addClass("invalid")
    } else {
      $counter.removeClass("invalid")
    }
  });
});
