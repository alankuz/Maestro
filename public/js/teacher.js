var teacher;
$(document).ready(function () {
  $.get("/api/user_data").then(function(info) {
    teacher=info.realName
  });
// Grabs the list of students and puts them into a checklist  
    $.get("/api/studentlist")
    .then(function(data) {


        for(i=0; i<data.length; i++){
        $("#student").append('<label id="studentNames"><input type="checkbox" id="nameCheckBox" class="studentchecker" value="'+data[i].email+'"name="checkbox">' + data[i].realName)+ "</label>"}
        
      })
 
      // Submit button Pressed creates the values and submits them
    $("#submit").on("click", function () {
      event.preventDefault();
      
      
      var studentList = [];
      $.each($("input[name='checkbox']:checked"), function(){

          studentList.push($(this).val());

      });
     
     
     
     
        
        var lesson = {
          message: $("#message").val().trim(),
          students: studentList.join(','),
          teacher: $(".member-name").text().trim()
        }
        postLesson(lesson.message, lesson.students, lesson.teacher)
    });
    function postLesson(message, students, teacher){
    $.post("/api/lesson", {
      message: message,
      students:students,
      teacher:teacher    
    }).then(function(data) {
      window.location.replace(data);
    })
    
    $(".studentchecker").prop('checked',false);
    $("#message").val("");

    $("#comfirmed").html("<h4>message sent.</h4>");
  }
});

$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
 
  });
  
