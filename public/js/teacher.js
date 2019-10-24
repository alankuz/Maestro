$(document).ready(function () {
    $.get("/api/studentlist")
    .then(function(data) {
        console.log(data);


        for(i=0; i<data.length; i++){
        $("#student").append('<input type="checkbox" id="'+i+'"name="'+data[i].realName +'">' + data[i].realName);}
      });


    $("form#lesson").on("submit", function () {

        event.preventDefault();

        var lesson = {
            student: $("#student").val(),
            message: $("#message").val().trim()
        }
        console.log(lesson);
    });

    $.post("/api/lesson", lesson).then(function () {
        window.location.replace(data);
    });

  $("#student").val("");
  $("#message").val("");
});

$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
 
  });
  
