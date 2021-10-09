function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  const $result = $("#result");
  let email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    email.css("border", "2px solid red");
    $result.text("email is valid ");
    $result.css("color", "green");
  } else {
    $result.text("email is not valid");
    $result.css("color", "red");
  }
  return false;
}

$("#email").on("input", validate);
