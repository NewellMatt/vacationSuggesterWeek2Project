$(document).ready(function() {
  $("#vacacationSuggester").submit(function(event) {
    var age = parseInt($("input#age").val());
    var type = $("select#typeOfClimate").val();
    var hobbieInput = $("input[name=hobbie]:checked").val();
    //var nameInput = $("input#nameID").val();
    var typeOfLocation = $("select#typeOfLocation").val();

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

      for(index=1;index<3;index++){
        if(age >=25){/*Young */}
        else if(type==='formDropTropical'||'formDropDry'||'formDropMild'||'formDropPolar'){/*ALL*/}
        else if(hobbieInput ==='radioValueAdventure'||'radioValueSpa'||'radioValueBeachDay'){/*ALL*/}
        else if(name.includes("a"||"e"||"i"||"o"||"u")){alert('Vowel')/*NAME CONTAINS Vowel*/}

        else {
            alert('Please Finish All Answers');
          }
      }

      /*
      if (type === 'formDropTropical' && age >=50 && hobbieInput === "radioValueBeachDay" && typeOfLocation === "formDropCarribean") {
        var oneVariable = "St Martin";
        $("#sm").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropTropical' && age >=50 && hobbieInput === "radioValueAdventure" && typeOfLocation === "formDropNorthAmerica") {
        var oneVariable = "Hawaii";
        $("#hawaii").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropTropical' && age >=50 && hobbieInput === "radioValueSpa" && typeOfLocation === "formDropNorthAmerica") {
        var oneVariable = "Hawaii";
        $("#hawaii").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropTropical' && age <50 && hobbieInput === "radioValueSpa" && typeOfLocation === "formDropCarribean") {
        var oneVariable = "Bahamas";
        $("#ba").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropTropical' && age <50 && hobbieInput === "radioValueBeachDay" && typeOfLocation === "formDropCarribean") {
        var oneVariable = "St Martin";
        $("#sm").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropTropical' && age <50 && hobbieInput === "radioValueAdventure" && typeOfLocation === "formDropNorthAmerica") {
        var oneVariable = "Hawaii";
        $("#hawaii").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropDry' && age >=50 && hobbieInput === "radioValueSpa" && typeOfLocation === "formDropNorthAmerica") {
        var oneVariable = "Las Vegas";
        $("#lv").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropDry' && age >=50 && hobbieInput === "radioValueBeachDay" && typeOfLocation === "formDropNorthAmerica") {
        var oneVariable = "Hawaii";
        $("#hawaii").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropDry' && age <50 && hobbieInput === "radioValueBeachDay" && typeOfLocation === "formDropNorthAmerica") {
        var oneVariable = "Hawaii";
        $("#hawaii").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropDry' && age <50 && hobbieInput === "radioValueSpa" && typeOfLocation === "formDropNorthAmerica") {
        var oneVariable = "Las Vegas";
        $("#lv").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropDry' && age >=50 && hobbieInput === "radioValueAdventure" && typeOfLocation === "formDropNorthAmerica") {
        var oneVariable = "Las Vegas";
        $("#lv").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropDry' && age <50 && hobbieInput === "radioValueAdventure" && typeOfLocation === "formDropAsia") {
        var oneVariable = "Gobi Desert";
        $("#gd").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropMild' && age >=50 && hobbieInput === "radioValueBeachDay" && typeOfLocation === "formDropCarribean") {
        var oneVariable = "Bahamas";
        $("#ba").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropMild' && age >=50 && hobbieInput === "radioValueSpa" && typeOfLocation === "formDropNorthAmerica") {
        var oneVariable = "Hawaii";
        $("#hawaii").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropMild' && age >=50 && hobbieInput === "radioValueAdventure" && typeOfLocation === "formDropCarribean") {
        var oneVariable = "Bahamas";
        $("#ba").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropMild' && age <50 && hobbieInput === "radioValueBeachDay" && typeOfLocation === "formDropNorthAmerica") {
        var oneVariable = "Las Vegas";
        $("#lv").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropMild' && age <50 && hobbieInput === "radioValueSpa" && typeOfLocation === "formDropNorthAmerica") {
        var oneVariable = "Hawaii";
        $("#hawaii").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();

      }
      else if (type === 'formDropMild' && age <50 && hobbieInput === "radioValueAdventure" && typeOfLocation === "formDropCarribean") {
        var oneVariable = "St Martin";
        $("#sm").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropPolar' && age >=50 && hobbieInput === "radioValueAdventure" && typeOfLocation === "formDropNorthAmerica") {
        var oneVariable = "Alaska";
        $("#ak").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropPolar' && age >=50 && hobbieInput === "radioValueSpa" && typeOfLocation === "formDropNorthAmerica") {
        var oneVariable = "Bend Oregon";
        $("#bo").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropPolar' && age >=50 && hobbieInput === "radioValueBeachDay" && typeOfLocation === "formDropNorthAmerica") {
        var oneVariable = "WAIT why would you choose Polar? Just go to Hawaii!";
        $("#hawaii").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropPolar' && age <50 && hobbieInput === "radioValueAdventure" && typeOfLocation === "formDropNorthAmerica") {
        var oneVariable = "Artic";
        $("#at").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropPolar' && age <50 && hobbieInput === "radioValueBeachDay" && typeOfLocation === "formDropNorthAmerica") {
        var oneVariable = "Oregon Coast Surfing in the Snow!";
        $("#sb").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }
      else if (type === 'formDropPolar' && age <50 && hobbieInput === "radioValueSpa" && typeOfLocation === "formDropNorthAmerica") {
        var oneVariable = "Bend, Oregon";
        $("#bo").show();
        $("#vacaName").text(oneVariable);
        $("#printToScreen").show();
      }

      */

      event.preventDefault();
    };
    });
      });
