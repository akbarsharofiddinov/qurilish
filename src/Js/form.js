const button = document.getElementById("file-upload_btn");
const fileUpload = document.getElementById("file");

button.addEventListener("click", (e) => {
  fileUpload.click();
  e.preventDefault();
});

fileUpload.addEventListener("click", (event) => {
  event.stopPropagation();
});
