var firebaseConfig = {
    apiKey: "AIzaSyA_uWdnhq9gUOuNS9DgrlDgbe2fhVJMZis",
    authDomain: "fir-44d2e.firebaseapp.com",
    databaseURL: "https://fir-44d2e.firebaseio.com",
    projectId: "fir-44d2e",
    storageBucket: "",
    messagingSenderId: "805928601909",
    appId: "1:805928601909:web:f3aab9b1463d6e7291647c"
  };

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database()

$(btn).on("click", function (event) {
    event.preventDefault();
    
    var newName = $("#name-input").val().trim();
    var newDestination = $("#destination-input").val().trim();
    var newFrequency = moment($("#start-input").val().trim(), "MM/DD/YYYY").format("X");
    var newMinutesAway = $("#minutes-input").val().trim();
    
    console.log(newName.name);
    console.log(newDestination.destination);
    console.log(newTime.time);
    console.log(newFrequency.frequency);
    console.log(newMinutesAway.minutes);

    alerr("Train Added");

    $("").val("");
    $("").val("");
    $("").val("");
    $("").val("");
    $("").val("");

    var tFrequency = 10;
    var fristTime = "03:00";

    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    var currenttime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    var diffTime = moment().diff(moment(firstTimeConverted),"minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain)

    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    var newRow = $("<tr>").append(
        $("<td>").text(newName),
        $("<td>").text(newDestination),
        $("<td>").text(newTime),
        $("<td>").text(newFrequency),
        $("<td>").text(newMinutesAway),   
    );

    var 
    $("#train-table .tbody").append(newRow);
    // var newRow = $("<tr>");
    // var newName = $("<td id =" + Name + ">");
    // var newDestination = $("<td id = 'Destination'>");
    // var newTime = $("<td id = 'Time'>");
    // var newFrequency = $("<td id = 'Frequency'>");
    // var newMinutesAway = $

    // newName.text($("#submitName").val())
    // newDestination.text($("#submitDestination").val())
    // newTime.text($("#submitTime").val())
    // newFrequency.text($("#submitFrequency").val())
    
    
    // newRow.append(newName);
    // newRow.append(newDestination);
    // newRow.append(newTime);
    // newRow.append(newFrequency)
    
    // $("tbody").append(newRow)
    });