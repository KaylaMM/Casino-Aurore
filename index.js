jQuery(document).ready(function ($) {
  if (sessionStorage.getItem("saveAge") !== "true") {
    $(".ag-module").show();
  } else {
    $(".ag-module").hide();
    $(".overlay-verify").hide();
  }

  $(".btn-yes").click(function () {
    sessionStorage.setItem("saveAge", "true");
    $(".ag-module").hide();
    $(".overlay-verify").hide();
  });

  $(".btn-no").click(function () {
    window.alert("Sorry, you must be 21 or older to visit our site");
  });
});
