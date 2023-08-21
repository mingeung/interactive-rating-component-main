const num = document.querySelectorAll(".num");
const submit = document.querySelector("#submit");

function handleSubmitBtn() {
  var link = "next.html";

  location.href = link;
  location.replace(link);
  window.open(link);
}

function handleNumBtn() {
  const numId = document.getElementById(this.id);
  numId.classList.toggle("selected");
  localStorage.setItem("select", numId.innerText);
}

num.forEach((num) => num.addEventListener("click", handleNumBtn));

submit.addEventListener("click", handleSubmitBtn);
