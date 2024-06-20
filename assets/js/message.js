$(document).ready(function(){
    $("#success").addClass("successHidden");
});

// $("contactform").submit(function(){
//     $("#success").removeClass("successShow");
//     $("#success").addClass("successShow");
//     $("#success").fadeIn(10);
//     document.getElementById("footer").scrollIntoView();
//     $("#success" ).delay( 3500 ).fadeOut( 400 );

// });

$('#contactform').submit(function() {
    this.submit();
    var form = document.getElementById("contactform");
    form.reset();

    $("#success").removeClass("successShow");
    $("#success").addClass("successShow");
    $("#success").fadeIn(10);
    document.getElementById("footer").scrollIntoView();
    $("#success" ).delay( 3500 ).fadeOut( 400 );


    return false;
});


$(document).ready(function(){
var intervalId = window.setInterval(function(){
    // console.log("time");
    const d= new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let hour = d.getHours();
    let minute = d.getMinutes();
    // let currDate= String(year) + "-" + String(month) + "-" + String(day) + "T" + String(hour) + ":" + String(minute);
    let currDate= String(month) + "-" +String(day) + "-" + String(year) + " " + String(hour) + ":" + String(minute);
    $('#date').prop("value", currDate); 
    // console.log(currDate);
  }, 3000);  
});