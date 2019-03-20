/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 $(document).ready(function() {
   function createTweetElement(tweet) {
     var ts = new Date(tweet.created_at);
     var article = '<article class="tweet">' +
       '<header>' +
       '<div>' +
       '<img src="' + tweet.user.avatars.small + '" />' +
       '<h1>' + tweet.user.name + '</h1>' +
       '</div>' +
       '<p>'+ tweet.user.handle + '</p>' +
       '</header>' +
       '<div class="content">' +
       '<p>' + tweet.content.text + '</p>' +
       '</div>' +
       '<footer>' +
       '<span>' +  ts.toDateString() + '</span>' +
       '</footer>' +
       '</article>'
     console.log(tweet);
     return article;
   };
   function renderTweets(tweets) {
     tweets.forEach(function(tweet) {
       let $tweet = createTweetElement(tweet);
       $('.tweets').prepend($tweet);
     });
   }
    // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];
  renderTweets(tweetData);
  // console.log(renderTweets(tweetData));

// Old way
//     var $tweet = createTweetElement(tweetData);
//
//     // Test / driver code (temporary)
//     console.log($tweet); // to see what it looks like
//     $('.tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.


  $("#new-tweet").submit(function(event) {
    event.preventDefault();

    $.ajax({
      url: $(this).attr("action"),
      method: "POST",
      data: $(this).serialize()
    }).done(function() {
      console.log("tweet submitted")
    })
  })

});




// Test / driver code (temporary). Eventually will get this from the server.
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": {
//       "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//       "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//     },
//     "handle": "@SirIsaac"
//   },
//   "content": {
//     "text": "If I have seen further it is by standing on the shoulders of giants"
//   },
//   "created_at": 1461116232227
// }
//
// var $tweet = createTweetElement(tweetData);
//
// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
//
//
//
//
//
//
//
//
//
//
//






















 // function renderTweets(tweets) {
 //    tweets.forEach(function(tweet) {
 //      let $tweet = createTweetElement(tweet);
 //      $('#tweets').prepend($tweet);
 //    });
 //  }



 // $(document).ready(function() {
 //
 //  function createTweetElement(tweet) {
 //    let date = new Date(tweet.created_at).toString().slice(0, 15);
 //    let h1 = $("<h1>").text(tweet.user.name);
 //    let imgURL = $("<img>").attr("src", tweet.user.avatars.large);
 //    let span = $("<span>").text(tweet.user.handle);
 //    let header = $("<header>").append(imgURL).append(h1).append(span);
 //    let div = $("<div>").text(tweet.content.text);
 //    let footer = $("<footer>").append("<span>").text(date);
 //    let $tweet = $("<article>").addClass("tweet").append(header).append(div).append(footer);
 //    return $tweet;
 //  }
 //
 //  function renderTweets(tweets) {
 //    tweets.forEach(function(tweet) {
 //      let $tweet = createTweetElement(tweet);
 //      $('#tweets').prepend($tweet);
 //    });
 //  }
