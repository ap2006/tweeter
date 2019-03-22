/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 function escape(str) {
 var div = document.createElement('div')
 div.appendChild(document.createTextNode(str))
 return div.innerHTML
}
$(document).ready(function() {
  function createTweetElement (tweet) {
    var ts = new Date(tweet.created_at)
    var article = '<article class="tweet">' +
       '<header>' +
       '<div>' +
       '<img src="' + tweet.user.avatars.small + '" />' +
       '<h1>' + tweet.user.name + '</h1>' +
       '</div>' +
       '<p>' + tweet.user.handle + '</p>' +
       '</header>' +
       '<div class="content">' +
       '<p>' + escape(tweet.content.text) + '</p>' +
       '</div>' +
       '<footer>' +
       '<span>' + ts.toDateString() + '</span>' +
       '<div class="footer">' +
       '<img src="/images/icons8-retweet-24.png">' +
       '<img src="/images/icons8-thumbs-up-26.png">' +
       '<img src="/images/icons8-twitter-26.png">' +
       '</div>' +
       '</footer>' +
       '</article>'
    console.log(tweet)
    return article
  };
  function renderTweets (tweets) {
    $('.tweets').empty()
    tweets.forEach(function (tweet) {
      let $tweet = createTweetElement(tweet)
      $('.tweets').prepend($tweet)
    })
  }

  //slideToggle
  $("button").click(function(){
  $(".new-tweet").slideToggle();
  $( "#new-tweet textarea" ).focus();
});

  //AJAX POST request
  $("#new-tweet").submit(function (event) {
    event.preventDefault()
    var input = $("#new-tweet > textarea").val()
    // console.log("Hi", $("#new-tweet > textarea").val());
    // you can also do if input.length === 0
    $("#new-tweet .errors").empty()
    //removing the error message see above
    if (input === "") {
      var errorElement = $("<p>")
      errorElement.text( "You cannot submit an empty tweet")
      $("#new-tweet .errors").append(errorElement)
      return
    }
    else if (input.length > 140) {
      var errorElement = $("<p>")
      errorElement.text( "Your tweet is too long!")
      $("#new-tweet .errors").append(errorElement)
      return
    }

    $.ajax({
      url: $(this).attr("action"),
      method: "POST",
      data: $(this).serialize()
    }).done(function() {
      loadTweets();
      // console.log("tweet submitted")
    })
//AJAX GET request
// function loadTweets() {
// console.log("I'm loading tweets")
//   $.ajax({
//     url: "/tweets/",
//     type: "GET",
//     success: function (data) {
//       // console.log("Success: ", data);
//       renderTweets(data)
//     }
//   })
// }
  // loadTweets()
})
function loadTweets() {
console.log("I'm loading tweets")
  $.ajax({
    url: "/tweets/",
    type: "GET",
    success: function (data) {
      // console.log("Success: ", data);
      renderTweets(data)
    }
  })
}
loadTweets()
})
