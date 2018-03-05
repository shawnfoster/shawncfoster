$(document).ready(function () {
     $("#fade1").fadeIn(3000);
});

$('#triggerButton').click(function(e){
    e.preventDefault();
    $('#fade1').fadeOut('fast', function(){
        $('#fade2').fadeIn('fast');
    });
});

jQuery(document).on('ready', function() {
    jQuery(window).on('resize', function() {
        /* Tablet Portrait size to standard 960 (devices and browsers) */
        if (jQuery(document).width() < 959 && jQuery(document).width() > 768) {
           //change the attributes from the div #home_content (first parameter: the attribute, what it needs to be)
           jQuery('#home_content').attr('class','sixteen columns');
           jQuery('#slider').attr('class','sixteen columns');

        }
        else{
            //change it back to normal (how the class was)
            jQuery('#home_content').attr('class','nine columns');
            jQuery('#slider').attr('class','nine columns');
        }

        /* Mobile Landscape Size to Tablet Portrait (devices and browsers) */
        if(jQuery(document).width() < 767 && jQuery(document).width() > 480) {
            //code
        }
        else{

        }

        /* Mobile Landscape Size to Tablet Portrait (devices and browsers) */
        if(jQuery(document).width() < 479) {
            //code
        }
        else{

        }
    }).trigger('resize'); // Trigger resize handlers.
});//ready
