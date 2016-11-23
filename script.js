var input = $("#new-item-input")
var commentDisplay = $("comment-display")

commentInput.keydown(function(e) {
  if (e.which == 13) {
    addListItem("comments", commentInput.val());
  }
})

onNewListItem("whats-my-name-again", function(newComment) {
  commentDisplay.append("<span>" + newComment + "</span>")
})



input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    addListItem("graceList", valueToSave);
  }
})


onNewListItem("graceList", function(value) {
  $("#list-display").append("<div>" + value +"</div>")

}) 