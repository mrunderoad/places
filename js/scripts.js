function Place(location,landmarks, timeOfYear, notes){
    this.location = location;
    this.landmarks = landmarks;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
}

let obj1 = new Place("London, England", ["Regents Park", "Hampstead Heath", "Tate's Museum"], "October 2019", "My favorite city so far!");

let obj2 = new Place("Seattle, Washington", ["Pikes Place", "Space needle"], "July 2021", "One of my favorite close in places to visit!");

let obj3 = new Place("Amsterdam, Netherlands", ["Canals", "Van Gogh Museum"], "October 2019", "A magical fun-filled city. Try the Dutch apple pie!");


function displayPlaces(){
    $("#place").append("<a onClick='addProperties(); return false;'>" + obj1.location + "</a>" + "</br>");

    $("#place").append("<a href='#'>" + obj2.location + "</a>" + "</br>");
    $("#place").append("<a href='#'>" + obj3.location + "</a>" +"</br>");
}

$(document).ready(function(){
    displayPlaces();
});