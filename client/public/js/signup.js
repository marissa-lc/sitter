$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var passwordConfirmInput = $("input#password-confirm-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      passwordConfirm: passwordConfirmInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      $("#alert .msg").text("Please enter an email and password");
      $("#alert").fadeIn(500); 
      return;
    }

    if (userData.password !== userData.passwordConfirm) {
      $("#alert .msg").text("Passwords don't match");
      $("#alert").fadeIn(500); 
      return;
    }

    // If we have an email and password, and password & confirm password matches, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    })
      .then(function(data) {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    var serverErr = JSON.parse(err.responseText);
    var message = "";

    if (serverErr.errors && serverErr.errors.length > 0) {
      if (serverErr.errors[0].message.includes("email must be unique")) {
        message = "Email address already taken";
      }
      $("#alert .msg").text(message);
      $("#alert").fadeIn(500);      
    }
  }
});
