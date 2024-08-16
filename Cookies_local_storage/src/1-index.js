document.getElementById("loginForm").addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const name_val = document.getElementById("fname").value;
  const email_val = document.getElementById("email").value;
  setCookies(name_val, email_val);
}

function setCookies(name, email) {
  const daysToExpire = 10;
  const date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  const path = "path=/";

  document.cookie = "name=" + name + ";" + expires + ";" + path;
  document.cookie = "email=" + email + ";" + expires + ";" + path;
}

document.getElementById("showCookie").addEventListener("click", handleShow);

function handleShow() {
  document.getElementById("cookieContainer").innerHTML = document.cookie;
  console.log("handleShow is clicked:");
}
