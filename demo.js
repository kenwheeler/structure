$(document).ready(function(){

  var $cache, views, current = 0;;

  $cache = {
    device: $('#device')
  };

  views = ['laptop','tablet','mobile'];

  setInterval(function(){
    if(current >= views.length) {
      current = 0;
    }
    $cache.device.attr('data-device',views[current])
    current++;
  }, 2000)

});