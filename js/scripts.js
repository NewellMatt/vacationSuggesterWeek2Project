$(document).ready(function() {
  $("#celebrityDate").submit(function(event) {
    var age = parseInt($("input#age").val());
    var type = $("select#typeOfClimate").val();

    $("#hawaii").hide();
    $("#sm").hide();
    $("#gd").hide();
    $("#lv").hide();

    if (age) {
      if (type === 'formDropTropical' && age >=50) {
        var oneVariable = "St Martin";
        $("#sm").show();
      }
      else if (type === 'formDropTropical' && age <50) {
        var oneVariable = "Hawaii";
        $("#hawaii").show();
      }
      else if (type === 'formDropDry' && age >=50) {
        var oneVariable = "Las Vegas";
        $("#lv").show();
      }
      else if (type === 'formDropDry' && age <50) {
        var oneVariable = "Gobi Desert";
        $("#gd").show();


      $("#vacaName").text(oneVariable);
      $("#printToScreen").show();
      }
      else {
          alert('Please enter your age!');
        }
      event.preventDefault();
    };
    });
      });
