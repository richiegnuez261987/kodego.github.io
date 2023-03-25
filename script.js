$(document).ready(function(){

    $.ajax({
        url:'calculator.html',
        caches:false,
        success:function(data){
          $("#maincontaner").html(data);
        }
      })

$(document).on("change","#format",function(e){
        e.preventDefault();
     if($(this).val() == 1 ){

        $.ajax({
            url:'calculator.html',
            caches:false,
            success:function(data){
              $("#maincontaner").html(data);
            }
          })
     }else{
        
    $.ajax({
        url:'converter.html',
        caches:false,
        success:function(data){
          $("#maincontaner").html(data);
        }
      })
     }
})
// calculator
$(document).on("click","#btn",function(e){
    e.preventDefault();
    clearScreen();
})

$(document).on("click","#btn1",function(e){
    e.preventDefault();
    display($(this).val());
})

$(document).on("click","#btn2",function(e){
    e.preventDefault();
    display($(this).val());
})
$(document).on("click","#btn3",function(e){
    e.preventDefault();
    display($(this).val());
})
$(document).on("click","#btnd",function(e){
    e.preventDefault();
    display($(this).val());
})
$(document).on("click","#btn4",function(e){
    e.preventDefault();
    display($(this).val());
})
$(document).on("click","#btn5",function(e){
    e.preventDefault();
    display($(this).val());
})
$(document).on("click","#btn6",function(e){
    e.preventDefault();
    display($(this).val());
})
$(document).on("click","#btnmm",function(e){
    e.preventDefault();
    display($(this).val());
})
$(document).on("click","#btn8",function(e){
    e.preventDefault();
    display($(this).val());
})
$(document).on("click","#btn9",function(e){
    e.preventDefault();
    display($(this).val());
})
$(document).on("click","#btnp",function(e){
    e.preventDefault();
    display($(this).val());
})
$(document).on("click","#btndot",function(e){
    e.preventDefault();
    display($(this).val());
})
$(document).on("click","#btn0",function(e){
    e.preventDefault();
    display($(this).val());
})
$(document).on("click","#btne",function(e){
    e.preventDefault();
    calculate();
})
$(document).on("click","#btnmul",function(e){
    e.preventDefault();
    display($(this).val());
})    

$(document).on("change","#selUnits",function(e){
    e.preventDefault();
    var selunits = $(this).val();

if (selunits =="Length"){
      $.ajax({
        url:'Length.html',
        caches:false,
        success:function(data){
          $("#optdetails").html(data);
          $("#lblto").html('Meter');
          $("#lblfrom").html('Meter');
        }
      })
}


else if(selunits =="Volume"){
      $.ajax({
        url:'Volume.html',
        caches:false,
        success:function(data){
          $("#optdetails").html(data);
          $("#lblto").html('Liter');
          $("#lblfrom").html('Liter');
        }
      })
}
else if(selunits =="Mass"){
      $.ajax({
        url:'Mass.html',
        caches:false,
        success:function(data){
          $("#optdetails").html(data);
          $("#lblto").html('Kilogram');
          $("#lblfrom").html('Kilogram');
        }
      })
}
else if(selunits =="Time"){
      $.ajax({
        url:'Time.html',
        caches:false,
        success:function(data){
          $("#optdetails").html(data);
          $("#lblto").html('Hour');
          $("#lblfrom").html('Hour');
        }
      })
}

 $("#opt1").trigger("change");
 $("#opt2").trigger("change");
})   

// converter

$(document).on("click","#btn1c",function(e){
    e.preventDefault();
    displaytoconvert($(this).val());

    $("#coninput").trigger("change");
})

$(document).on("click","#btn2c",function(e){
    e.preventDefault();
    displaytoconvert($(this).val());
    
    $("#coninput").trigger("change");
})

$(document).on("click","#btn3c",function(e){
    e.preventDefault();
    displaytoconvert($(this).val());
    
    $("#coninput").trigger("change");
})

$(document).on("click","#btn4c",function(e){
    e.preventDefault();
    displaytoconvert($(this).val());
    
    $("#coninput").trigger("change");
})

$(document).on("click","#btn5c",function(e){
    e.preventDefault();
    displaytoconvert($(this).val());
    
    $("#coninput").trigger("change");
})

$(document).on("click","#btn6c",function(e){
    e.preventDefault();
    displaytoconvert($(this).val());
    
    $("#coninput").trigger("change");
})
$(document).on("click","#btn7c",function(e){
    e.preventDefault();
    displaytoconvert($(this).val());
    
    $("#coninput").trigger("change");
})

$(document).on("click","#btn8c",function(e){
    e.preventDefault();
    displaytoconvert($(this).val());
    
    $("#coninput").trigger("change");
})

$(document).on("click","#btn9c",function(e){
    e.preventDefault();
    displaytoconvert($(this).val());
    
    $("#coninput").trigger("change");
})

$(document).on("click","#btn0c",function(e){
    e.preventDefault();
    displaytoconvert($(this).val());
    
    $("#coninput").trigger("change");
})
$(document).on("click","#btncccc",function(e){
    e.preventDefault();
   
$("#coninput").val("");
$("#conresult2").val("");    

// document.getElementById("coninput").value = "";
//  document.getElementById("conresult2").value = ""
})

$(document).on("change","#coninput",function(e){
    e.preventDefault();

    var selunits = $("#selUnits").val();


    if (selunits == "Length"){
        converLength();
    }
    else if(selunits =="Volume"){
        converVolume();
    }
    else if(selunits =="Mass"){
        converMass();
    }
    else if(selunits =="Time"){
        converTime();
    }
    
})
$(document).on("change","#opt2",function(e){
    e.preventDefault();
    $("#lblto").html($(this).val());

   
})
$(document).on("change","#opt1",function(e){
    e.preventDefault();
    $("#lblfrom").html($(this).val());

})
function converLength(){
   
var opt1 = $("#opt1").val();
var opt2 = $("#opt2").val();    
var coninput = $("#coninput").val();

    if(opt1 == "Meter" &&  opt2 =="Meter" ){
        $("#conresult2").val(coninput);
    }else if(opt1 == "Meter" &&  opt2 =="Kilometer" ){
        $("#conresult2").val(coninput / 1000);
    }else if(opt1 == "Meter" &&  opt2 =="Centimeter" ){
        $("#conresult2").val(coninput * 100);
    }else if(opt1 == "Kilometer" &&  opt2 =="Kilometer" ){
        $("#conresult2").val(coninput);
    }else if(opt1 == "Kilometer" &&  opt2 =="Meter" ){
        $("#conresult2").val(coninput * 1000);
    }else if(opt1 == "Kilometer" &&  opt2 =="Centimeter" ){
        $("#conresult2").val(coninput * 100000);
    }else if(opt1 == "Centimeter" &&  opt2 =="Centimeter" ){
        $("#conresult2").val(coninput);
    }else if(opt1 == "Centimeter" &&  opt2 =="Kilometer" ){
        $("#conresult2").val(coninput / 100000);
    }else if(opt1 == "Centimeter" &&  opt2 =="Meter" ){
        $("#conresult2").val(coninput / 100);
    }


}


function converTime(){
   
    var opt1 = $("#opt1").val();
    var opt2 = $("#opt2").val();    
    var coninput = $("#coninput").val();
    
        if(opt1 == "Hour" &&  opt2 =="Hour" ){
            $("#conresult2").val(coninput);
        }else if(opt1 == "Hour" &&  opt2 =="Minute" ){
            $("#conresult2").val(coninput * 60 );
          
        }else if(opt1 == "Hour" &&  opt2 =="Second" ){
            $("#conresult2").val(coninput * 3600);
        }else if(opt1 == "Minute" &&  opt2 =="Minute" ){
            $("#conresult2").val(coninput);
        }else if(opt1 == "Minute" &&  opt2 =="Hour" ){
            $("#conresult2").val(coninput / 60);
        }else if(opt1 == "Minute" &&  opt2 =="Second" ){
            $("#conresult2").val(coninput * 60);
        }else if(opt1 == "Second" &&  opt2 =="Second" ){
            $("#conresult2").val(coninput);
        }else if(opt1 == "Second" &&  opt2 =="Hour" ){
            $("#conresult2").val(coninput / 3600);
        }else if(opt1 == "Second" &&  opt2 =="Minute" ){
            $("#conresult2").val(coninput / 60);
        }
    
    
    }
function converMass(){
   
    var opt1 = $("#opt1").val();
    var opt2 = $("#opt2").val();    
    var coninput = $("#coninput").val();
    
        if(opt1 == "Kilogram" &&  opt2 =="Kilogram" ){
            $("#conresult2").val(coninput);
        }else if(opt1 == "Kilogram" &&  opt2 =="Gram" ){
            $("#conresult2").val(coninput * 1000);
        }else if(opt1 == "Kilogram" &&  opt2 =="Tonne" ){
            $("#conresult2").val(coninput / 1000);
        }else if(opt1 == "Gram" &&  opt2 =="Gram" ){
            $("#conresult2").val(coninput);
        }else if(opt1 == "Gram" &&  opt2 =="Kilogram" ){
            $("#conresult2").val(coninput / 1000);
        }else if(opt1 == "Gram" &&  opt2 =="Tonne" ){
            $("#conresult2").val(coninput / 1000000);
        }else if(opt1 == "Tonne" &&  opt2 =="Tonne" ){
            $("#conresult2").val(coninput);
        }else if(opt1 == "Tonne" &&  opt2 =="Gram" ){
            $("#conresult2").val(coninput * 1000000);
        }else if(opt1 == "Tonne" &&  opt2 =="Kilogram" ){
            $("#conresult2").val(coninput * 1000);
        }
    
    
    }

    function mlToCubicMeter(ml) {
        const cubicMeter = ml / 1000000;
        return cubicMeter;
      }
function converVolume(){
   
    var opt1 = $("#opt1").val();
    var opt2 = $("#opt2").val();    
    var coninput = $("#coninput").val();
    
        if(opt1 == "Liter" &&  opt2 =="Liter" ){
            $("#conresult2").val(coninput);
        }else if(opt1 == "Liter" &&  opt2 =="Mililiter" ){
            $("#conresult2").val(coninput * 1000);
        }else if(opt1 == "Liter" &&  opt2 =="Cubic Meter" ){
            $("#conresult2").val(coninput / 1000);
        }else if(opt1 == "Mililiter" &&  opt2 =="Mililiter" ){
            $("#conresult2").val(coninput);
        }else if(opt1 == "Mililiter" &&  opt2 =="Liter" ){
            $("#conresult2").val(coninput / 1000);
        }else if(opt1 == "Mililiter" &&  opt2 =="Cubic Meter" ){
            $("#conresult2").val(coninput/1000000 );
        }else if(opt1 == "Cubic Meter" &&  opt2 =="Cubic Meter" ){
            $("#conresult2").val(coninput);
        }else if(opt1 == "Cubic Meter" &&  opt2 =="Mililiter" ){
            $("#conresult2").val(coninput * 1000000);
        }else if(opt1 == "Cubic Meter" &&  opt2 =="Liter" ){
            $("#conresult2").val(coninput / 1000);
        }
    
    
    }


// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

function displaytoconvert(value) {
    document.getElementById("coninput").value += value;
}
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
    // This function evaluates the expression and returns result
function calculate() {
    var p =  $("#result").val();
    var q = eval(p);
    // document.getElementById("result").value = q;
    $("#result").val(q)
}

  });

