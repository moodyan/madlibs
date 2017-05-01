$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var blanks = ["name1", "name2", "verb1", "verb2", "bodypart"];

   blanks.forEach(function(blank) {
     var userInput = $("input#" + blank).val();
     $("." + blank).text(userInput);
   });

    $("#story").show();

    event.preventDefault();
  });
});
