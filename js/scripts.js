function Place(location,landmarks, timeOfYear, notes){
    this.location = location;
    this.landmarks = landmarks;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
}


let obj1 = new Place("London, England", ["Regents Park", "Hampstead Heath", "Tate's Museum"], "October 2019", "My favorite city so far!");

let obj2 = new Place("Seattle, Washington", ["Pikes Place", "Space needle"], "July 2021", "One of my favorite close in places to visit!");

let obj3 = new Place("Amsterdam, Netherlands", ["Canals", "Van Gogh Museum"], "October 2019", "A magical fun-filled city. Try the Dutch apple pie!");


// function displayPlaceTest(objName){
//     $("#place").append("<a id='&quot;'+objName+'&quot;'>" + objName.location + "</a>" + "</br>");
//     $('#'+'&quot;'+objName+'&quot;').append("<p class='&quot;'+objName+'&quot;'>" + "Landmarks: " + objName.landmarks.join(", ") + "</p>");
//     $("#"+objName+"&quot;").append("<p class='&quot;'+objName+'&quot;'>" + "Time visited: " + objName.timeOfYear + "</p>");
//     $("#"+objName+"&quot;").append("<p class='&quot;'+objName+'&quot;'>" + "Notes: " +objName.notes + "</p>");
//     $("#"+objName+"&quot;").click(function(){
//         $("."+objName+"&quot;").toggle();
//     });
// };

function displayPlaces(){
    $("#place").append("<a id='obj1'>" + obj1.location + "</a>" + "</br>");
    $("#obj1").append("<p class='prop'>" + "Landmarks: " + obj1.landmarks.join(", ") + "</p>");
    $("#obj1").append("<p class='prop'>" + "Time visited: " + obj1.timeOfYear + "</p>");
    $("#obj1").append("<p class='prop'>" + "Notes: " +obj1.notes + "</p>");
    $("#obj1").click(function(){
        $(".prop").toggle();
    });
    
    $("#place").append("<a id='obj2'>" + obj2.location + "</a>" + "</br>");
      $("#obj2").append("<p class='prop1'>" + "Landmarks: " + obj2.landmarks.join(", ") + "</p>");
      $("#obj2").append("<p class='prop1'>" + "Time visited: " + obj2.timeOfYear + "</p>");
      $("#obj2").append("<p class='prop1'>" + "Notes: " +obj2.notes + "</p>");
    $("#obj2").click(function(){
      $(".prop1").toggle();  
  });
    $("#place").append("<a id='obj3'>" + obj3.location + "</a>" +"</br>");
      $("#obj3").append("<p class='prop2'>" + "Landmarks: " + obj3.landmarks.join(", ") + "</p>");
      $("#obj3").append("<p class='prop2'>" + "Time visited: " + obj3.timeOfYear + "</p>");
      $("#obj3").append("<p class='prop2'>" + "Notes: " +obj3.notes + "</p>");
    $("#obj3").click(function(){
      $(".prop2").toggle();
  });
}

$(document).ready(function(){
    displayPlaces();
    $("#formOne").submit(function(event){
        event.preventDefault();
        const loc = $("#location").val();
        const landmarks = $("#landmarks").val();
        const arrayLandmarks = landmarks.split(", ");
        const time= $("#time").val();
        const notes= $("#notes").val();
        let obj4 = new Place(loc, arrayLandmarks, time, notes);
        $("#place").append("<a id='obj4'>" + obj4.location + "</a>" +"</br>");
        $("#obj4").append("<p class='prop3'>" + "Landmarks: " + obj4.landmarks.join(", ") + "</p>");
        $("#obj4").append("<p class='prop3'>" + "Time visited: " + obj4.timeOfYear + "</p>");
        $("#obj4").append("<p class='prop3'>" + "Notes: " +obj4.notes + "</p>");
      $("#obj4").click(function(){
        $(".prop3").toggle();
    });
    })
});