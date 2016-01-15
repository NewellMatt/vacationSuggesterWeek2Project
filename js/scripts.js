$(document).ready(function() {
  $("#vacacationSuggester").submit(function(event) {
    var age = parseInt($("input#age").val());
    var type = parseInt($("select#typeOfClimate").val());
    var hobbieInput = parseInt($("input[name=hobbie]:checked").val());
    var nameInput = $("input#nameID").val();
    var typeOfLocation = parseInt($("select#typeOfLocation").val());

    $("#hawaii").hide();
    $("#sm").hide();
    $("#gd").hide();
    $("#lv").hide();
    $("#at").hide();
    $("#ak").hide();
    $("#ba").hide();
    $("#th").hide();
    $("#sb").hide();
    $("#bo").hide();


    if (age) {
        if ((type+age+hobbieInput+typeOfLocation > 0 && type+age+hobbieInput+typeOfLocation <= 7) || (type+age+hobbieInput+typeOfLocation > 28 && type+age+hobbieInput+typeOfLocation <= 35)) {
        var oneVariable = "Bend, Oregon";
        $("#bo").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if ((type+age+hobbieInput+typeOfLocation > 7 && type+age+hobbieInput+typeOfLocation <= 14) || (type+age+hobbieInput+typeOfLocation > 35)) {
        var oneVariable = "Hawaii";
        $("#hawaii").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if ((type+age+hobbieInput+typeOfLocation > 14 && type+age+hobbieInput+typeOfLocation <= 28) || (type+age+hobbieInput+typeOfLocation > 35)) {
        var oneVariable = "St Martin";
        $("#sm").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else {
          alert('Please Finish All Answers');
        }
      event.preventDefault();
    };
    });
      });
