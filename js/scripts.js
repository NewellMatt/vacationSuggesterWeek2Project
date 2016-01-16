$(document).ready(function() {
  $("#vacacationSuggester").submit(function(event) {
    var age = parseInt($("input#age").val());
    var type = parseInt($("select#typeOfClimate").val());
    var hobbieInput = parseInt($("input[name=hobbie]:checked").val());
    var nameInput = parseInt($("input#favoriteNumberID").val());
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
        if ((nameInput+type+age+hobbieInput+typeOfLocation > 0 && nameInput+type+age+hobbieInput+typeOfLocation <= 7) || (nameInput+type+age+hobbieInput+typeOfLocation > 28 && nameInput+type+age+hobbieInput+typeOfLocation <= 35)) {
        var oneVariable = "Bend, Oregon";
        $("#bo").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if ((nameInput+type+age+hobbieInput+typeOfLocation > 7 && nameInput+type+age+hobbieInput+typeOfLocation <= 14) || (nameInput+type+age+hobbieInput+typeOfLocation > 35)) {
        var oneVariable = "Hawaii";
        $("#hawaii").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if ((nameInput+type+age+hobbieInput+typeOfLocation > 14 && nameInput+type+age+hobbieInput+typeOfLocation <= 28) || (nameInput+type+age+hobbieInput+typeOfLocation > 35)) {
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
