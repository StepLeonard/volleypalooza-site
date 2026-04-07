const signupForm = document.getElementById("signupForm");
const successMessage = document.getElementById("successMessage");

if (signupForm && successMessage) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    signupForm.hidden = true;
    successMessage.hidden = false;
  });
}