// waypoint
$(document).ready(function() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        $('#nav-waypoint').waypoint(function(direction) {
          if(direction === "down") {
            $('.navbar').addClass('fixed-top navcolor');
            $('.nav-display-waypoint').removeClass('d-none');
          }else{
            $('.navbar').removeClass('fixed-top navcolor');
            $('.nav-display-waypoint').addClass('d-none');
          }
        }, {
          offset: '40%'
        })
      }
    
    $('.header-text-section').waypoint(function(direction) {
        if(direction === "down") {
            $('.about-me').removeClass('invisible');
            $('.about-me').addClass('animate__animated animate__fadeIn animate__slow');
        }
    })

    $('.about-me').waypoint(function(direction) {
        if(direction === "down") {
            $('.skills').addClass('animate__animated animate__slideInUp animate__slow');
            $('.skills').removeClass('invisible');
        }
    }, {
        offset: '15%'
      })
    
      $('.skills').waypoint(function(direction) {
          if(direction === "down") {
              $('.project').removeClass('invisible');
              $('.project').addClass('animate__animated animate__fadeInLeft');
          }
      }, {
        offset: '29%'
      })
    
      $('.project').waypoint(function(direction) {
          if(direction === "down") {
              $('.contact').addClass('animate__animated animate__fadeIn animate__slow');
              $('.contact').removeClass('invisible');
              $('.ul-contact').addClass('d-none');
          }else {
            $('.ul-contact').removeClass('d-none');
          }
      }, {
        offset: '-15%'
      })
    
      $('#about').waypoint(function(direction) {
          if(direction === "down") {
              $('.nav-about').addClass('active-link');
          }
      }, {
        offset: '5%'
      })
    
      $('#skill').waypoint(function(direction) {
          if(direction === "down") {
              $('.nav-about').removeClass('active-link');
              $('.nav-skill').addClass('active-link');
          }else{
            $('.nav-about').addClass('active-link');
            $('.nav-skill').removeClass('active-link');
          }
      }, {
        offset: '25%'
      })
    
      $('#project').waypoint(function(direction) {
          if(direction === "down") {
              $('.nav-skill').removeClass('active-link');
              $('.nav-project').addClass('active-link');
          }else{
            $('.nav-skill').addClass('active-link');
            $('.nav-project').removeClass('active-link');
          }
      }, {
        offset: '15%'
      })
    
      $('#contact').waypoint(function(direction) {
          if(direction === "down") {
              $('.nav-project').removeClass('active-link');
              $('.nav-contact').addClass('active-link');
          }else{
            $('.nav-project').addClass('active-link');
            $('.nav-contact').removeClass('active-link');
          }
      }, {
        offset: '15%'
      })
      
      $('.menu-bar').click(function() {
        $('.navbar').addClass('fixed-top navcolor');
        $('.nav-display-waypoint').removeClass('d-none');
        $('.menu-bar').css({'display': 'none'});
        $('.menu-back-icon').css({'display': 'block'});
      });

      $('.menu-back-icon').click(function() {
        $('.navbar').removeClass('fixed-top navcolor');
        $('.nav-display-waypoint').addClass('d-none');
        $('.menu-bar').css({'display': 'block'});
        $('.menu-back-icon').css({'display': 'none'});
      });

      if (window.matchMedia("(max-width: 768px)").matches) {
        $('.nav-link').click(function() {
          $('.navbar').removeClass('fixed-top navcolor');
          $('.nav-display-waypoint').addClass('d-none');
          $('.menu-bar').css({'display': 'block'});
          $('.menu-back-icon').css({'display': 'none'});
        })
      }
})