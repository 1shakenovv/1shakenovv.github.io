$("#sendMail").on("click",function() {
  var email = $("#email").val().trim(;)
  var name = $("#name").val().trim(;)
  var phone = $("#phone").val().trim(;)
  var message = $("#message").val().trim(;)

  if(email== "") {
    $("#errorMess").text("Введите Email");
    return false;
  } else if(name== "") {
    $("#errorMess").text("Введите имя");
    return false;
  } else if(phone== "") {
    $("#errorMess").text("Введите телефон");
    return false;
  } else if(message.length <5 ) {
    $("#errorMess").text("Введите сообщение");
    return false;
  }
  $("#errorMess").text("");

});
