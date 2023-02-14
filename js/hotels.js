$(document).ready(function(){

    $("#btn3").click(function(){
      
      $("#paragraph").animate({
        left:'150px',
        opacity:'1',
        width:'100px',
        height:'100px'

      },3000)

    });

    });



function fn1()
          {
            $("#para1").fadeToggle(1000);
          }

          $("#btn2").click(function()
          {
            $("#para1").show();
          });

          


$(document).ready(function(){
        
    $("#btntoggle").click(function(){

      $("#secondparagraph").fadeToggle(1000,function(){
        alert("FadeToggle is done!")

      });

    });

  });

