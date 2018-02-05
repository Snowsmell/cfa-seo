$(function () {

  var as = document.querySelector('nav').querySelectorAll('a');
  var navas = Array.prototype.slice.call(as)
  var divs = Array.prototype.slice.call(document.querySelectorAll('main>div'));
  var harr = [];
  divs.forEach(function (v, i) {
    harr.push(v.offsetTop);
  });

  function navClick() {
    navas.forEach(function (v, i) {
      v.addEventListener('click', function () {
        navas.forEach(function (v, i) {
          // v.classList.remove('current');
          $(v).removeClass('current')
        });
        // this.classList.add('current');
        $(this).addClass('current')
        //页面滚动到对应位置
        var target = document.querySelector('main>div:nth-of-type(' + (i + 1) + ')').offsetTop;
        $('body,html').animate({ scrollTop: target - 150 }, 1000);
      });
    });
  }
  navClick();
  //滚动感应变换

  document.body.addEventListener('mousewheel', function (e) {
    var sh = document.body.scrollTop + document.documentElement.scrollTop;
    harr.forEach(function (v, i) {
      if (sh >= v - 350) {
        var index = i;
        var value = v;
        navas.forEach(function (v, i) {
          // v.classList.remove('current');
          $(v).removeClass('current')          
        });
        // navas[index].classList.add('current');
        $(navas[index]).addClass('current')
      }
    });
  });
});