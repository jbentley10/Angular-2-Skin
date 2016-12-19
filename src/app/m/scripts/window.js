window.formSubmitted = false;
window.internalLink = false;

$(document).ready(function(e) {
  $('a').click(function() {
    window.internalLink = true;
  });

  var exitMessage = '\n*****************************************\nWAIT!!\n\nSpecial Discount Activated!\n\nVALID TODAY ONLY!\n*****************************************\n\nClick STAY ON PAGE below to receive your instant discount.\n';

  if (exitMessage) {
    function pageUnload() {
      if (!window.internalLink) {
        window.internalLink = false;
        $("#exitOverlay").css('height', $(document).height());
        $(".exitpop").show();
        return exitMessage;
        return false;
      }
    }

    window.onbeforeunload = pageUnload;
  }
  //modalOnClick();
  $('#order_form').submit(function() {
    window.internalLink = true;
    $(".exitpop").hide();
  });

  $('#exitPopup').click(function() {
    exitAction();
    return false;
  });

  function exitAction() {
    $("#exitOverlay").hide();
    $(".exitpop").hide();
    $(".redbar").slideDown('fast');
    $("#discount_price").html('-$7.00');
    $("#total_price").html('$2.95');
    $("#shipping_price").val('2.95');
    window.location.href = "discount.php";
  }
});
