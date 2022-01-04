/* Natural Language Accordion Form © Yogev Ahuvia
 * ===============================================
 * An input form that is using the accordion
 * style to offer a focused input criteria in
 * natural language.
 */

$(document).ready(function() {
  $(".preload").removeClass("preload");
});

$("input, select").on("focus", function(e) {
  var pane = $(this).parents(".pane");
  activate(pane);
});

$(".pane").on("click", function() {
  activate($(this));
});

$(".pane.submit").on("click", function() {
  submit();
});

function activate(pane) {
  if (!pane.hasClass("active")) {
    $(".pane.active").removeClass("active");
    pane.addClass("active");
  }
}

function submit() {
  $(".submit").hide();
  $(".pane:not(.active)").addClass("active");
  $(".pane.active, body").addClass("locked");
  $("input, select").attr("disabled", "disabled");
}

function unsubmit() {
  $("input").val("");
  
  $("input, select").attr("disabled", null);
  $(".pane.active, body").removeClass("locked");
  $(".pane.active:not(:nth-child(2))").removeClass("active");
  $(".submit").show();
}