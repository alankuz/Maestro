$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  var email;
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.realName);
    console.log(data.realName)
    email=data.email
  });
  console.log('teacherposts')
  $.get("/api/teacherposts").then(function(data) {
    console.log(data[0].students)
    

     


     for(x=0; x<data.length; x++){
      var postEmails=data[x].students.split(',');
      var message = data[x].message
      console.log(postEmails)
      console.log(email.toString())
      for(i=0; i<postEmails.length; i++){
        if (email.toString() === postEmails[i]){
          $("#postcolumn").append("<div>" + message +"</div>") 
          console.log(postEmails[i]+"success")
          console.log(data[i].message+"success")

        } else {
          console.log(postEmails[i])
         console.log('else')
        }

      }}
      
    })
  
});
