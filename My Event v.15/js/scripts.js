
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
       // Get the modal
       var el = d.getElementsByClassName( 'video-container' )[0];
       var modal = d.getElementById( 'videoModal' );
       // When the user clicks anywhere outside of the modal, close it
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
//--------------------------------------------------------------
        
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

        