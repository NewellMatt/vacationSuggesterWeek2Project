$(document).ready(function() {
  $("#celebrityDate").submit(function(event) {
    var age = parseInt($("input#age").val());
    var type = $("select#type").val();

    $("#hawaii").hide();
    $("#sm").hide();
    $("#gd").hide();

    if (age) {
      if (type === 'formDropTropical' && age >=50) {
        var oneVariable = "St Martin";
        $("#sm").show();
      }
      else if (type === 'formDropTropical' && age <50) {
        var oneVariable = "Hawaii";
        $("#hawaii").show();
      }
      else if (type === 'Dry' && age >=50) {
        var oneVariable = "Las Vegas";
      }
      else if (type === 'Dry' && age <50) {
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
