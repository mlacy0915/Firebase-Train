$(btn).on("click", function (event) {
    event.preventDefault();
    
    var newRow = $("<tr>");
    
    var newName = $("<td id = 'Name'>");
    var newDestination = $("<td id = 'Destination'>");
    var newTime = $("<td id = 'Time'>");
    var newFrequency = $("<td id = 'Frequency'>");
    var newMinutesAway = $

    newName.text($("#submitName").val())
    newDestination.text($("#submitDestination").val())
    newTime.text($("#submitTime").val())
    newFrequency.text($("#submitFrequency").val())
    
    
    newRow.append(newName);
    newRow.append(newDestination);
    newRow.append(newTime);
    newRow.append(newFrequency)
    
    $("tbody").append(newRow)
    });