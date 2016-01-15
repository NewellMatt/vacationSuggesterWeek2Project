$(document).ready(function() {
  $("#vacacationSuggester").submit(function(event) {
    var age = parseInt($("input#age").val());
    var type = $("select#typeOfClimate").val();
    var hobbieInput = $("input[name=hobbie]:checked").val();
    var nameInput = $("input#nameID").val();

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


      if (type === 'formDropTropical' && age >=50 && hobbieInput === "radioValueBeachDay") {
        var oneVariable = "St Martin";
        $("#sm").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropTropical' && age >=50 && hobbieInput === "radioValueAdventure") {
        var oneVariable = "Hawaii";
        $("#hawaii").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropTropical' && age >=50 && hobbieInput === "radioValueSpa") {
        var oneVariable = "Hawaii";
        $("#hawaii").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropTropical' && age <50 && hobbieInput === "radioValueSpa") {
        var oneVariable = "Bahamas";
        $("#ba").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropTropical' && age <50 && hobbieInput === "radioValueBeachDay") {
        var oneVariable = "St Martin";
        $("#sm").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropTropical' && age <50 && hobbieInput === "radioValueAdventure") {
        var oneVariable = "Hawaii";
        $("#hawaii").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropDry' && age >=50 && hobbieInput === "radioValueSpa") {
        var oneVariable = "Las Vegas";
        $("#lv").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropDry' && age >=50 && hobbieInput === "radioValueBeachDay") {
        var oneVariable = "Hawaii";
        $("#hawaii").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropDry' && age <50 && hobbieInput === "radioValueBeachDay") {
        var oneVariable = "Hawaii";
        $("#hawaii").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropDry' && age <50 && hobbieInput === "radioValueSpa") {
        var oneVariable = "Las Vegas";
        $("#lv").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropDry' && age >=50 && hobbieInput === "radioValueAdventure") {
        var oneVariable = "Las Vegas";
        $("#lv").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropDry' && age <50 && hobbieInput === "radioValueAdventure") {
        var oneVariable = "Gobi Desert";
        $("#gd").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropMild' && age >=50 && hobbieInput === "radioValueBeachDay") {
        var oneVariable = "Bahamas";
        $("#ba").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropMild' && age >=50 && hobbieInput === "radioValueSpa") {
        var oneVariable = "Hawaii";
        $("#hawaii").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropMild' && age >=50 && hobbieInput === "radioValueAdventure") {
        var oneVariable = "Bahamas";
        $("#ba").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropMild' && age <50 && hobbieInput === "radioValueBeachDay") {
        var oneVariable = "Las Vegas";
        $("#lv").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropMild' && age <50 && hobbieInput === "radioValueSpa") {
        var oneVariable = "Hawaii";
        $("#hawaii").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();

      }
      else if (type === 'formDropMild' && age <50 && hobbieInput === "radioValueAdventure") {
        var oneVariable = "St Martin";
        $("#sm").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropPolar' && age >=50 && hobbieInput === "radioValueAdventure") {
        var oneVariable = "Alaska";
        $("#ak").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropPolar' && age >=50 && hobbieInput === "radioValueSpa") {
        var oneVariable = "Bend Oregon";
        $("#bo").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropPolar' && age >=50 && hobbieInput === "radioValueBeachDay") {
        var oneVariable = "WAIT why would you choose Polar? Just go to Hawaii!";
        $("#hawaii").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropPolar' && age <50 && hobbieInput === "radioValueAdventure") {
        var oneVariable = "Artic";
        $("#at").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropPolar' && age <50 && hobbieInput === "radioValueBeachDay") {
        var oneVariable = "Oregon Coast Surfing in the Snow!";
        $("#sb").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropPolar' && age <50 && hobbieInput === "radioValueSpa") {
        var oneVariable = "Bend, Oregon";
        $("#bo").show();
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
