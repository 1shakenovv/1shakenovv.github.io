$("#sendMail").on("click",function() {
  var email = $("#email").val().trim(;)
  var name = $("#name").val().trim(;)
  var phone = $("#phone").val().trim(;)
  var message = $("#message").val().trim(;)

  if(email== "") {
    $("#errorMess").text("Введите Email")
  }
  else if(name== "") {
    $("#errorMess").text("Введите имя")
  }
  else if(phone== "") {
    $("#errorMess").text("Введите телефон")
  }
  else if(message.lenght <5 ) {
    $("#errorMess").text("Введите сообщение")
  }

});
