// Selecting elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');
const submitBtn = document.getElementById('submitBtn');

// Email validation function
function validateEmail() {
  const email = emailInput.value;
  if (email.length > 3 && email.includes('@') && email.includes('.')) {
    emailFeedback.textContent = "All good to go!";
    emailFeedback.className = "success";
    return true;
  } else {
    emailFeedback.textContent = "Email must be more than 3 characters and contain '@' and '.'";
    emailFeedback.className = "error";
    return false;
  }
}

// Password validation function
function validatePassword() {
  const password = passwordInput.value;
  if (password.length > 8) {
    passwordFeedback.textContent = "All good to go!";
    passwordFeedback.className = "success";
    return true;
  } else {
    passwordFeedback.textContent = "Password must be more than 8 characters.";
    passwordFeedback.className = "error";
    return false;
  }
}

// Add event listeners for onChange validation
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

// Submit button event
submitBtn.addEventListener('click', () => {
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isEmailValid && isPasswordValid) {
    const confirmed = confirm("Are you sure you want to sign up?");
    if (confirmed) {
      alert("Successful signup!");
    } else {
      // Reset form and reload page
      emailInput.value = "";
      passwordInput.value = "";
      emailFeedback.textContent = "";
      passwordFeedback.textContent = "";
      window.location.reload();
    }
  }
});
