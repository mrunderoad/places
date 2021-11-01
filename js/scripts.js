function Place(location,landmarks, timeOfYear, notes){
    this.location = location;
    this.landmarks = landmarks;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
}


let obj1 = new Place("London, England", ["Regents Park", "Hampstead Heath", "Tate's Museum"], "October 2019", "My favorite city so far!");

let obj2 = new Place("Seattle, Washington", ["Pikes Place", "Space needle"], "July 2021", "One of my favorite close in places to visit!");

let obj3 = new Place("Amsterdam, Netherlands", ["Canals", "Van Gogh Museum"], "October 2019", "A magical fun-filled city. Try the Dutch apple pie!");


let newObjCounter=0;

function displayPlaceTest(objName){
    newObjCounter +=1
    let newObj = "newObj"
    newObj = newObj+ newObjCounter;
    $("#place").append("<a id='"+newObj+"' >" + objName.location + "</a>" + "</br>");
    $("#"+newObj).append("<p class='"+newObj+"' >" + "Landmarks: " + objName.landmarks.join(", ") + "</p>");
    $("#"+newObj).append("<p class='"+newObj+"' >"+ "Time visited: " + objName.timeOfYear + "</p>");
    $("#"+newObj).append("<p class='"+newObj+"' >" + "Notes: " +objName.notes + "</p>");
    $("."+newObj).css("display","none");
    $("#"+newObj).click(function(){
        $("."+newObj).toggle();
    });
};

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

        displayPlaceTest(obj4);

    })
});