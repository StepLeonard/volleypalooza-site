const signupForm = document.getElementById("signupForm");
const successMessage = document.getElementById("successMessage");

if (signupForm && successMessage) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stops page reload

    // hide form
    signupForm.style.display = "none";

    // show message
    successMessage.hidden = false;
  });
}