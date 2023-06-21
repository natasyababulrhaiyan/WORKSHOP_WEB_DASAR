// JavaScript code for login and register functionality
const userLoginForm = document.getElementById("loginForm");
const adminLoginForm = document.getElementById("adminLoginForm");
const registerForm = document.getElementById("registerForm");
const userLoginButton = document.getElementById("user-login");
const adminLoginButton = document.getElementById("admin-login");

// Event listener for user login button
userLoginButton.addEventListener("click", function () {
  userLoginForm.style.display = "block";
  adminLoginForm.style.display = "none";
});

// Event listener for admin login button
adminLoginButton.addEventListener("click", function () {
  userLoginForm.style.display = "none";
  adminLoginForm.style.display = "block";
});

// User login form submission
userLoginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("password").value;
  
  // Perform user login logic
  if (email === "user@example.com" && password === "userpassword") {
    // Successful login, redirect user to user dashboard
    window.location.href = "home.html";
  } else {
    // Failed login, display error message
    const warningText = document.getElementById("warningText");
    warningText.textContent = "Invalid email or password.";
    const warningBox = document.getElementById("warningBox");
    warningBox.classList.add("active");
  }
});

// Admin login form submission
adminLoginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("adminLoginEmail").value;
  const password = document.getElementById("adminPassword").value;
  
  // Perform admin login logic
  if (email === "admin@example.com" && password === "adminpassword") {
    // Successful login, redirect admin to admin dashboard
    window.location.href = "admin_dashboard.html";
  } else {
    // Failed login, display error message
    const adminWarningText = document.getElementById("adminWarningText");
    adminWarningText.textContent = "Invalid email or password.";
    const adminWarningBox = document.getElementById("adminWarningBox");
    adminWarningBox.classList.add("active");
  }
});

// Register form submission
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("registerUsername").value;
  const email = document.getElementById("registerEmail").value;
  const telepon = document.getElementById("registerTelepon").value;
  const password = document.getElementById("password2").value;
  
  // Perform registration logic
  // ...
  // Display success or error message
});
