var deleteLinks = document.querySelectorAll(".delete");

for (var i = 0; i < deleteLinks.length; i++) {
  deleteLinks[i].addEventListener("click", function(event) {
    event.preventDefault();

    var choice = confirm(this.getAttribute("data-confirm"));

    if (choice) {
      window.location.href = this.getAttribute("href");
    }
  });
}

document
  .getElementById("report-flag")
  .addEventListener("click", function(event) {
    event.preventDefault();
    openForm();
  });

function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function openForm1() {
  document.getElementById("myForm1").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function closeForm1() {
  document.getElementById("myForm1").style.display = "none";
}
