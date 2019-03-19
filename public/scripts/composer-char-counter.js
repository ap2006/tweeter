$(document).ready(function() {
  $(".new-tweet textarea").bind("input", (event) => {
      console.log(event);
    });
});
