/* mobile navbar toggle*/
$(function(){
  $("#mob_page_title").click(function(){ $("#pg_nav").toggleClass("hidden");
  });
});

/* exercise answers toggle*/

$(function(){
  $(".ans_toggle").click(function(){      
$(".ans").toggleClass("hidden");
$(".reveal").toggleClass("hidden");      
  });
});
        