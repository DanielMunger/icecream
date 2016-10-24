

var flavors = ["choco", "vanilla", "mint chococlate chip", "cookie dough"]


$(document).ready(function() {

  flavors.forEach(function(flavor) {
    $("ul").append("<li>" + flavor + "</li>")
  });

});
