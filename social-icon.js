$(document).ready(function() {
  $('i').hide();
})

$(window).on('load',function() {
  $('i').show();

  var twitterPos = $('#twitter').position();
  var linkedinPos = $('#linkedin').position();
  var weixinPos = $('#weixin').position();
  var instaPos = $('#insta').position();
  var weiboPos = $('#weibo').position();
  var mailPos = $('#mail').position();
  var imgPos = $('.me').position();

  $('i').css({
    position: 'absolute',
    zIndex: '1',
    top: imgPos.top + 100,
    left: '47%'
  });

  setTimeout(function() {
    $('#twitter').animate({
      top: twitterPos.top + 10,
      left: twitterPos.left - 10
    }, 500);
  }, 250);

  setTimeout(function() {
    $('#twitter').animate({
      top: twitterPos.top,
      left: twitterPos.left
    }, 250);

    $('#linkedin').animate({
      top: linkedinPos.top + 10,
      left: linkedinPos.left - 6
    }, 500);
  }, 500);

  setTimeout(function() {
    $('#linkedin').animate({
      top: linkedinPos.top,
      left: linkedinPos.left
    }, 250);

    $('#weixin').animate({
      top: weixinPos.top + 10,
      left: weixinPos.left - 3
    }, 500);
  }, 750);

  setTimeout(function() {
    $('#weixin').animate({
      top: weixinPos.top,
      left: weixinPos.left
    }, 250);


    $('#insta').animate({
      top: instaPos.top + 10,
      left: instaPos.left
    }, 500);
  }, 1000);

  setTimeout(function() {
    $('#insta').animate({
      top: instaPos.top,
      left: instaPos.left
    }, 250);

    $('#weibo').animate({
      top: weiboPos.top + 10,
      left: weiboPos.left + 3
    }, 500);
  }, 1250);

  setTimeout(function() {
    $('#weibo').animate({
      top: weiboPos.top,
      left: weiboPos.left
    }, 250);

    $('#mail').animate({
      top: mailPos.top + 10,
      left: mailPos.left + 6
    }, 500);
  }, 1500);

  setTimeout(function() {
    $('#mail').animate({
      top: mailPos.top,
      left: mailPos.left
    }, 250);
  }, 1750);

})
