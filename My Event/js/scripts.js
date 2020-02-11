
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


//--------------------------------------------------------------
    
     //stop the video when modal is closed
            $(document).ready(function(){
            /* Get iframe src attribute value i.e. YouTube video url
            and store it in a variable */
            var url = $("#videoiframe").attr('src');
            
            /* Assign empty url value to the iframe src attribute when
            modal hide, which stop the video playing */
            $("#videoModal").on('hide.bs.modal', function(){
                $("#videoiframe").attr('src', '');
            });
            
            /* Assign the initially stored url back to the iframe src
            attribute when modal is displayed again */
            $("#videoModal").on('show.bs.modal', function(){
                $("#videoiframe").attr('src', url);
            });
        });
    
    //----------------------------------------------------------------------
        
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

        function clickday3() { //needs modification
            document.getElementById('day3').style.display='block';
            document.getElementById('day2').style.display='none';
            document.getElementById('day1').style.display='none';
            document.getElementById('day3button').classList.add('active2');
            document.getElementById('day2button').classList.remove('active2');
            document.getElementById('day1button').classList.remove('active2');
        }