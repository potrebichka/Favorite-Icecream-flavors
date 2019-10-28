$(document).ready(function() {
  var flavors = ["Vanilla", "Chocolate", "Butter-pecan", "Strawberry", "Raspberry", "Mango"];

  flavors.forEach(function(flavor) {
    $("#list").append("<li>" + flavor + "</li>");
  });

});
