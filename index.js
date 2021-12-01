window.onload = function () {
  let form = document.getElementById("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(this);
    for (const input of data.entries()) {
      console.log(input[0] + ": " + input[1]);
    }
  });
};

function validateForm() {}
