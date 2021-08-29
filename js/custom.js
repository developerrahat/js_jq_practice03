// accordion start
$(document).ready(function() {
    $(".pannel").click(function () {
        $(".flip").slideToggle();
    });




    // fade in
    $("#btn1").click(function() {
        $("#bOne").fadeIn();
        $("#bTwo").fadeIn("slow");
        $("#bThree").fadeIn(2000);
    })
    $("#btn2").click(function() {
        $("#bOne").fadeOut();
        $("#bTwo").fadeOut("slow");
        $("#bThree").fadeOut(2000);
    })
    $("#btn3").click(function() {
        $("#bOne").fadeToggle();
        $("#bTwo").fadeToggle("slow");
        $("#bThree").fadeToggle(2000);
    })



    // slide img
    $("#btn4").click(function() {
        $(".text").slideDown();
    })
    $("#btn5").click(function() {
        $(".text").slideUp();
    })


    // alert show

    $("#btn6").click(function() {
        window.alert("Thanks to show alert message");
    })
 
    

    // change text
    $("#btn7").click(function() {
        $("#subHead").html("Welcome to SSB");
        $("#subHead").css({"color":"red"});

    })
    $("#btn8").click(function() {
        $("#subHead").html("Hello SSB");
        $("#subHead").css({"color":"black"});

    })

    $("#btn9").click(function () {
        $("#subHead2").css({"color":"blue","fontSize":"50px"})
    })

    $("#btn10").click(function () {
        $("#subHead2").css({"color":"#ffc107","fontSize":"32px"})
    })


    $("#subHead2").css({"color":"#ffc107"})



    // other page code
    
    $( "#accordion" ).accordion({
        collapsible: true
    });

// auto complete
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
      $( "#autoFill" ).autocomplete({
        source: availableTags
      });



    //   date picker

    $( function() {
        $( "#datepicker" ).datepicker();
      } );


    //   product selection
    $( function() {
        var circle = $( "#circle" );
     
        $( "#radius" ).selectmenu({
          change: function( event, data ) {
            circle.css({
              width: data.item.value,
              height: data.item.value
            });
          }
         });
     
        $( "#color" ).selectmenu({
           change: function( event, data ) {
             circle.css( "background", data.item.value );
           }
         });
      } );




    //   nabtab 
    $( function() {
        $( "#tabs" ).tabs({
        });
      } );



    //   drag dialog
    $( function() {
        $( "#dial" ).dialog();
      } );



      
     // effect page code start
     $("#hBtn").click(function () {
       $("h5").hide(500);
     })
     $("#sBtn").click(function () {
       $("h5").show("slow");
       
     })

     $("#tgBtn").click(function () {
      $("h5").toggle(1000);
    })

     $("h5").css({"color":"red"});







    
});

// change mood

function darkMood() {
    document.body.style.backgroundColor = "black"
    document.getElementById("dHead").style.color = "red";
}

function lightMood() {
    document.body.style.backgroundColor = "#58B19F"
}





