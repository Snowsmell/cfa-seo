$(function(){
  function countdown(target){
    var days=Math.floor((new Date(target)-new Date)/1000/60/60/24);
    $('aside .countdown b').html(days)
    var arr =days.toString().split('');
    var text='';
    arr.forEach(function(v,i){
      if(v!=0 || i!=0){
        text +="<b>"+v+"</b>"
      }
    })
    $('.mbc>div')[0].innerHTML = text+' 天'
  }
  countdown('2018/6/23')


  //banner划出后显示导航
  function navshow(){
    $(window).on('scroll',function(){
      if($(window).scrollTop()>$('.banner').height()){
        $('nav.sidebar').fadeIn()
      }else{
        $('nav.sidebar').fadeOut()
      }
    })
  }
  navshow()

  //考试成绩切换
  function changerate(){
    $('.passrate .divide a').on('click',function(){
      $(this).addClass('current').siblings().removeClass('current')
      $('.passrate .imgbox img').eq($(this).index())
                                .addClass('current')
                                .siblings().removeClass('current')
    })                          
  }
  changerate()
  
  // sidebar
  function sidebar(){
    $('nav.sidebar .hint').on('click',function(){
      $('nav.sidebar').addClass('current')
    })
    $(window).on('click',function(e){
      var src = e.target
      if($(src).closest(".sidebar").length == 0){
        $('nav.sidebar').removeClass('current')
      }
    })
  }
  sidebar()
})