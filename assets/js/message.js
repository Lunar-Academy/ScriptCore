$(document).ready(function(){
    $("#success").addClass("successHidden");
    $("#successsignup").addClass("successHidden");
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
    // form.reset();

    $("#success").removeClass("successShow");
    $("#success").addClass("successShow");
    $("#success").fadeIn(10);
    document.getElementById("footer").scrollIntoView();
    $("#success" ).delay( 3500 ).fadeOut( 400 );


    return false;
});

$('#signupform').submit(function() {
    this.submit();
    var form = document.getElementById("signupform");
    // form.reset();

    $("#successsignup").removeClass("successShow");
    $("#successsignup").addClass("successShow");
    $("#successsignup").fadeIn(10);
    document.getElementById("wrapper").scrollIntoView();
    $("#successsignup" ).delay( 3500 ).fadeOut( 400 );


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

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.getElementById("accomplishment-counter");
  animateValue(obj, 0, 200, 5000);  