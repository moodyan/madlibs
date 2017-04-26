$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name1Input = $("input#name1").val();
    var name2Input = $("input#name2").val();
    var verb1Input= $("input#verb1").val();
    var verb2Input = $("input#verb2").val();
    var bodypartInput = $("input#bodypart").val();

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".verb1").text(verb1Input);
    $(".verb2").text(verb2Input);
    $(".bodypart").text(bodypartInput);

    $("#story").show();

    event.preventDefault();
  });
});
