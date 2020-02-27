

// active class in navbar  
    $(document).ready(function() {
            
            $( ".nav-item" ).bind( "click", function(event) {
                $(".active").removeClass("active");
                event.preventDefault();
                var clickedItem = $( this );
                $( ".nav-item" ).each( function() {
                    $( this ).removeClass( "active" );
                });
                clickedItem.addClass( "active" );
            });
    });
    
//--------------------------------------------------------------
    //close the video modal when clicked outside

    window.onload=function(){
    ( function( w, d ) {
      'use strict';
       var el = d.getElementsByClassName( 'video-container' )[0];
       var modal = d.getElementById( 'videoModal' );
      w.onclick = function ( event ) {
         if ( event.target == modal ) {
              modal.style.display = 'none';
         }
      };
      
      d.getElementsByClassName( 'close' )[0].addEventListener( 'click',
         function() {
            d.getElementById( 'videoModal' ).style.display = 'none';
            while ( el.firstChild ) {
                    el.removeChild( el.firstChild ); 
         }
      }, false );
   
    }( window, document ));

    }

//-----------------------------------------------------------------------------
    //show content when clicked on schedule buttons

    function clickday1() { 
            document.getElementById('day1').style.display='block'; 
            document.getElementById('day2').style.display='none';
            document.getElementById('day3').style.display='none';
            document.getElementById('day1button').classList.add('active2');
            document.getElementById('day2button').classList.remove('active2');
            document.getElementById('day3button').classList.remove('active2');
    }

    function clickday2() { 
            document.getElementById('day2').style.display='block';
            document.getElementById('day1').style.display='none';
            document.getElementById('day3').style.display='none';
            document.getElementById('day2button').classList.add('active2');
            document.getElementById('day1button').classList.remove('active2');
            document.getElementById('day3button').classList.remove('active2');
    }

    function clickday3() { 
            document.getElementById('day3').style.display='block';
            document.getElementById('day2').style.display='none';
            document.getElementById('day1').style.display='none';
            document.getElementById('day3button').classList.add('active2');
            document.getElementById('day2button').classList.remove('active2');
            document.getElementById('day1button').classList.remove('active2');
    }

//-------------------------------------------------------------------------------
    //venue image display

    $(function() {  
            $('.pop').on('click', function() {
                $('.imagepreview').attr('src', $(this).find('img').attr('src'));
                $('#imagemodal').modal('show');   
            });		
    });

//---------------------------------------------------------------------------------
    //owl gallery display

    $(function() {  
        $('.owl-img-div').on('click', function() {
            $('.owl-image-preview').attr('src', $(this).find('img').attr('src'));
            $('#owl-modal').modal('show');   
        });		
    });

//-------------------------------------------------------------------------------
    //faq plus minus icon

    $(function() {  
        $('#faq-link1').on('click', function() {
            if ($('#faq-link1').hasClass('collapsed')) {
                $('#f1-icon').removeClass('fa-plus-circle');
                $('#f1-icon').addClass('fa-minus-circle');
                $('#f1-icon').css("float", "right");
            }
            else{
                $('#f1-icon').removeClass('fa-minus-circle');
                $('#f1-icon').addClass('fa-plus-circle');
                $('#f1-icon').css("float", "right");
            }
        });

        $('#faq-link2').on('click', function() {
            if ($('#faq-link2').hasClass('collapsed')) {
                $('#f2-icon').removeClass('fa-plus-circle');
                $('#f2-icon').addClass('fa-minus-circle');
                $('#f2-icon').css("float", "right");
            }
            else{
                $('#f2-icon').removeClass('fa-minus-circle');
                $('#f2-icon').addClass('fa-plus-circle');
                $('#f2-icon').css("float", "right");
            }
        });

        $('#faq-link3').on('click', function() {
            if ($('#faq-link3').hasClass('collapsed')) {
                $('#f3-icon').removeClass('fa-plus-circle');
                $('#f3-icon').addClass('fa-minus-circle');
                $('#f3-icon').css("float", "right");
            }
            else{
                $('#f3-icon').removeClass('fa-minus-circle');
                $('#f3-icon').addClass('fa-plus-circle');
                $('#f3-icon').css("float", "right");
            }
        });

        $('#faq-link4').on('click', function() {
            if ($('#faq-link4').hasClass('collapsed')) {
                $('#f4-icon').removeClass('fa-plus-circle');
                $('#f4-icon').addClass('fa-minus-circle');
                $('#f4-icon').css("float", "right");
            }
            else{
                $('#f4-icon').removeClass('fa-minus-circle');
                $('#f4-icon').addClass('fa-plus-circle');
                $('#f4-icon').css("float", "right");
            }
        });

        $('#faq-link5').on('click', function() {
            if ($('#faq-link5').hasClass('collapsed')) {
                $('#f5-icon').removeClass('fa-plus-circle');
                $('#f5-icon').addClass('fa-minus-circle');
                $('#f5-icon').css("float", "right");
            }
            else{
                $('#f5-icon').removeClass('fa-minus-circle');
                $('#f5-icon').addClass('fa-plus-circle');
                $('#f5-icon').css("float", "right");
            }
        });

        $('#faq-link6').on('click', function() {
            if ($('#faq-link6').hasClass('collapsed')) {
                $('#f6-icon').removeClass('fa-plus-circle');
                $('#f6-icon').addClass('fa-minus-circle');
                $('#f6-icon').css("float", "right");
            }
            else{
                $('#f6-icon').removeClass('fa-minus-circle');
                $('#f6-icon').addClass('fa-plus-circle');
                $('#f6-icon').css("float", "right");
            }
        });
    });