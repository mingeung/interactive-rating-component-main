const level = localStorage.getItem("select");
const youSelect = document.querySelector("#select");

youSelect.innerText = `You selected ${level} out of 5`;
