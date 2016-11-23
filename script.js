var input = $("#new-item-input")
var commentDisplay = $("comment-display")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    addListItem("graceList", valueToSave);
    commentDisplay
  }
})


onNewListItem("graceList", function(value) {
  commentDisplay.append("<div>" + value +"</div>")

}) 