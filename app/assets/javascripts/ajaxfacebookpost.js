$(document).ready(function(){
  if ( window.location.pathname == '/thanks'){
    $(".statement-notice").text("投稿中…");
    console.log("action facebook post");
    $.ajax({
      url: $(".iihanashi-post").attr('action'),
      type: 'POST',
      data: $(".iihanashi-post").serialize(),
      dataType: 'json'
    })
    .done( function(obj) {
      $(".statement-notice").text("ありがとうございました");
      $(".thanks-link").append($("<a/>").attr("href", "http://tuxurecords.tumblr.com/").text("つくしレコーズ"));
      console.log("ok");
    })
    .fail( function(obj) {
      $(".statement-notice").text("申し訳ありません、サーバーの調子が悪いようです。少々お待ちください。。。");
      console.log("failed...");
    })
    return false;
  }
});