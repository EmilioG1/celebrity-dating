// BUSINESS LOGIC 

// UI LOGIC

$(document).ready(function() {
  $("form#user").submit(function(event) {
    event.preventDefault();
    const occupation = $("select#occupation").val();
    const name = $("input#name").val();
    const age = $("input#age").val();
    console.log(occupation);
    if (occupation === "1") {
      $("#witch").show();
      $(".output").text(name + " " + age);
    } else if (occupation === "2") {
      $("#frank").show();
      $(".output").text(name + " " + age);
    } else if (occupation === "3") {
      $("#dracula").show();
      $(".output").text(name + " " + age);
    } else {
      $("#medusa").show();
      $(".output").text(name + " " + age);
    }
  });
});
