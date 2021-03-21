$(window).on('load', function () {
    
    // preloader
    var $preloader = $('.preloader'),
        $inner = $preloader.find('.inner');
        
    $inner.finish(6000);
    $preloader.delay(3000).fadeOut('slow');
    
    // scrollspy
    $("body").scrollspy({
        target: ".scrollspy",
        offset: 95
    });

    // scrolltop
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 380) { // If page is scrolled more than 50px
          $('#return-top').fadeIn(200); // Fade in the arrow
        } else {
          $('#return-top').fadeOut(200); // Else fade out the arrow
        }
      });
      $('#return-top').on('click', function (event) { // When arrow is clicked
        event.preventDefault();
        $('body,html').animate({
          scrollTop: 0 // Scroll to top of body
        }, 800, 'easeInOutExpo');
    });
    
});

$(document).ready(function(){
    
    // resume Tabbbb //
    const aboutSection = document.querySelector(".resume .items"),
        tabsContainer = document.querySelector(".resume .resume-tabs");

        tabsContainer.addEventListener("click", (event) => {
            if (event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
                var target = event.target.getAttribute("data-target");
                

                tabsContainer.querySelector(".active").classList.remove("active");
                event.target.classList.add("active");


                aboutSection.querySelector(".content-tabs.active").classList.remove("active");
                aboutSection.querySelector(target).classList.add("active");
            }
        });
    
});
// ===== Navbar ====== //
$('a[href*="#"]')
  // Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top-95
            }, 1050, 'easeInOutExpo'/*, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                return false;
                };*/

            ); /// input(})
            
        }        

    }
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    //about
    if (wScroll > $('.about').offset().top-300){ 
        $('.about .content .img').addClass('out'),
        $('.about .content .box-me').addClass('out');
    }if (wScroll > $('.resume').offset().top-300){
        $('.resume .container .row.items').addClass('blink');
    }if (wScroll > $('.portfolio').offset().top-300){
        $('.portfolio .card-box .card').each(function(i){
            setTimeout(function(){
                $('.portfolio .card-box .card').eq(i).addClass('ex')
            }, 500 * (i+1));
        });
    }if(wScroll > $('.contact').offset().top-300){
        $('.contact .contact-box').addClass('enter')
    }
});