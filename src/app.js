const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

type="text/javascript"
          var feed = new Instafeed({
            accessToken: 'IGQVJVU2VxZA0IybVl4SEtuSzY2aVAtZAU9USGpsNUd4Nks1ZA3VaR1B0a3lmM0xkb09HYldKeVdLbzRnU194WFFPLXdneFhubEZApMGY0ZAWJ0djVaeU41S2txN2VQZAFVIV2hhM3ZAsMmExeVlqcVlISmk2dgZDZD',
            limit: 8,
            template:'<div class="item"><a href="{{link}}" target="_blank"><img title="{{caption}}" src="{{image}}" /></a></div>',
      
            after: function(){
      
              $('.owl-carousel').owlCarousel({
                loop:true,
                autoplayHoverPause:true,
                margin:10,
                nav:false,
                autoplay: true,
                responsiveClass:true,
                responsive:{
                  0:{
                    items:1
                    
                  },
                  600:{
                    items:3
                    
                  },
                  1000:{
                    items:5,
                    loop:false,							
                  }
                }
              });
            }
          });
          feed.run();