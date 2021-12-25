/*============== TOGGLE MENU SHOW ==============*/ 
    const navMenu = document.querySelector('.navbar-items'),
        toggleMenu = document.querySelector('.navToggle'),
        navClose = document.querySelector('.navClose')
         
          toggleMenu.addEventListener('click', () =>{
              navMenu.classList.toggle('showMenu')
          }); 

        if(navClose){
          navClose.addEventListener('click', () =>{
              navMenu.classList.remove('showMenu');
          });
        }; 
      
 /*==================== REMOVE NAVMENU ON LINK ACTION ====================*/
      const navItem = document.querySelectorAll('.nav-item') 
       
      navItem.forEach(n => n.addEventListener('click', ()=>{
        const navMenu = document.getElementById('navbarItems') 
        navMenu.classList.remove('showMenu')
      }))


/*==================== CHANGE HEADER/NAVBAR BACKGROUND ====================*/ 
    window.addEventListener('scroll', ()=>{

      // IT WILL CHANGE HEAHER BACKGROUND WHEN SCROLL PAGE IS EQUAL OR LESS THAN 80vh

      const navbar = document.getElementById('navbar')  
      if(this.scrollY >= 80) 
      {
        navbar.classList.add('scroll-navbar');
      } 
 
      else 
      {
        navbar.classList.remove('scroll-navbar')
      }
    }) 

/*============== INITIALISE CROUSEL ==============*/ 
    var swiper = new Swiper('.parallax-container', {
        speed: 600,
        parallax: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }, 
        autoplay: {
          delay: 30000,
          disableOnInteraction: false,
          }, 
          loop: true,
      }); 

/*============== INITIALISE CUVERFLOW SWIPER ==============*/ 
    var swiper = new Swiper('.coverflow-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 150,
        modifier: 2,
        slideShadows: false,
      }, 
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        },
        loop: true,
    });

/*============== INITIALISE CUBE CLIENT REVIEW SWIPER ==============*/  
    var swiper = new Swiper('.cube-container', {
      effect: 'cube',
      grabCursor: true,
      autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      }, 
      cubeEffect: {
        shadow: false,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      loop: true,
    });
    
/*============== SCROLL REVEAL ANIMATION ==============*/
    AOS.init
    (
        {
            offset: 180,
            duration: 800,
        }
    );  
    
/*==================== SHOW SCROLL UP ====================*/  
    window.addEventListener('scroll', ()=>{
      // It will show scrll button when scroll page is high from 180vh 
      const scrollUp = document.getElementById('scroll-up'); 
      if(this.scrollY >= 180) scrollUp.classList.add('show-scroll'); 
      else scrollUp.classList.remove('show-scroll')
    })  

    
