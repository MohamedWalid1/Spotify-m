$(document).ready(function() {
  $(".toggle-modal").click(function() {
    $("#myModal").modal("toggle");
  });
});

$("#myModal").on("shown.bs.modal", function() {
  $("#myInput").trigger("focus");
});
