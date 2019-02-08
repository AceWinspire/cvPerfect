$('.button').click(function(){
  var $btn = $(this),
      $step = $btn.parents('.modal-body'),
      stepIndex = $step.index(),
      $pag = $('.modal-header span').eq(stepIndex);

  if(stepIndex === 0 || stepIndex === 1) { step1($step, $pag); }
  else { step3($step, $pag); }
  
});


function step1($step, $pag){
console.log('step1');
  // animate the step out
  $step.addClass('animate-out');
  
  // animate the step in
  setTimeout(function(){
    $step.removeClass('animate-out is-showing')
         .next().addClass('animate-in');
    $pag.removeClass('is-active')
          .next().addClass('is-active');
  }, 600);
  
  // after the animation, adjust the classes
  setTimeout(function(){
    $step.next().removeClass('animate-in')
          .addClass('is-showing');
    
  }, 1200);
}


function step3($step, $pag){
console.log('3');

  // animate the step out
  $step.parents('.modal-wrap').addClass('animate-up');

  setTimeout(function(){
    $('.rerun-button').css('display', 'inline-block');
  }, 300);
}

$('.rerun-button').click(function(){
 $('.modal-wrap').removeClass('animate-up')
                  .find('.modal-body')
                  .first().addClass('is-showing')
                  .siblings().removeClass('is-showing');

  $('.modal-header span').first().addClass('is-active')
                          .siblings().removeClass('is-active');
 $(this).hide();
});




    var $owl = $('.owl-carousel');

    $owl.children().each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });
    
    $owl.owlCarousel({
      center: true,
      loop: true,
      items: 3,
    });
    
    $(document).on('click', '.owl-item>div', function() {
      $owl.trigger('to.owl.carousel', $(this).data( 'position' ) );
    });

//menu show on scroll up
  $(document).ready(function(){
    console.log('Window Height is: ' + $(window).height());
    console.log('Document Height is: ' + $(document).height());
    var previousScroll = 0;
    $(window).scroll(function(){
      var currentScroll = $(this).scrollTop();
      if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
        if (currentScroll > previousScroll){
          window.setTimeout(hideNav, 200);
        } else {
          window.setTimeout(showNav, 250);
        }
        previousScroll = currentScroll;
      }
    });
    function hideNav() {
      $("[data-nav-status='toggle']").removeClass("nav-show").addClass("nav-hide");
    }
    function showNav() {
      $("[data-nav-status='toggle']").removeClass("nav-hide").addClass("nav-show");
    }
  });
 
   
  AOS.init();

  //Embed social
  (function (d, s, id) {
    var js;
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://embedsocial.com/embedscript/ri.js";
    d.getElementsByTagName("head")[0].appendChild(js);
}(document, "script", "EmbedSocialReviewsScript"));

//Instagram feed
$(function(){
    var accessToken = '273700138.f359f2c.f6d5dd3e37704cb8b976331d56706931';
    $.getJSON('https://api.instagram.com/v1/users/self/media/recent/?access_token='+accessToken+'&callback=?',function (insta) {
      $.each(insta.data,function (photos,src) {
        if ( photos === 4 ) { return false; }
        $('<a href="'+src.link+'" class="post">'+
          '<div class="image" style="background-image:url('+src.images.standard_resolution.url+');"></div>'+
          '<ul>'+
          '<li><i class="fa fa-camera"></i> '+src.filter+'</li>'+
          '<li><i class="fa fa-heart"></i> '+src.likes.count+'</li>'+
          '<li><i class="fa fa-comment"></i> '+src.comments.count+'</li>'+
          '</ul></a>').appendTo('#instafeed');
      });
    });
  });
  