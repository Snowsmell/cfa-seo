$(function(){
  function countdown(target){
    var days=Math.floor((new Date(target)-new Date)/1000/60/60/24);
    $('.countdown b').html(days)
  }
  countdown('2018/6/23')
})