$(document).ready(function(){
    $("#success").addClass("successHidden");
    // $("#success").addClass("successHidden");
});

$("form").submit(function(){
    $('#contactform')[0].reset();
    $("#success").removeClass("successShow");
    $("#success").addClass("successShow");
    $("#success").fadeIn(10);
    document.getElementById("footer").scrollIntoView();
    $("#success" ).delay( 3500 ).fadeOut( 400 );

});
