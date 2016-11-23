var input = $("#new-item-input")
var commentDisplay = $("comment-display")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    console.log ("hi")
    var valueToSave = input.val();
    addListItem("graceList", valueToSave);
  }
})


onNewListItem("graceList", function(value) {
  $("#comment-display").append("<div>" + value +"</div>")

}) 