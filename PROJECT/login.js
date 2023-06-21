const login = document.getElementById("login");
const register = document.getElementById("register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const loginSubmit = document.getElementById("loginSubmit");
const registerSubmit = document.getElementById("registerSubmit");
const signupText = document.getElementById("signupText");
const loginText = document.getElementById("loginText");
const soundBtn = document.getElementById("soundBtn");
var loginMusic = new Audio(
  "https://github.com/ahmetenesbahar/login-register-page/blob/main/audio/loginMusic.mp3"
);

var signupMusic = new Audio(
  "https://github.com/ahmetenesbahar/login-register-page/blob/main/audio/signupMusic.mp3"
);

var errorMusic = new Audio(
  "https://github.com/ahmetenesbahar/login-register-page/blob/main/audio/error.mp3"
);

loginMusic.play();
loginMusic.volume = 0.3;
loginMusic.loop = true;
var i = 1;

soundBtn.addEventListener("click", () => {
  var isPlaying = false;
  loginMusic.volume = 0;
  signupMusic.volume = 0;

  if (i % 2 == 0) {
    isPlaying = true;
  }

  if (
    loginMusic.volume == 0 &&
    registerForm.classList.contains("active") &&
    isPlaying == true
  ) {
    loginMusic.play();
    loginMusic.volume = 0.3;
    loginMusic.loop = true;
  }
  if (
    signupMusic.volume == 0 &&
    loginForm.classList.contains("active") &&
    isPlaying == true
  ) {
    signupMusic.play();
    signupMusic.loop = true;
    signupMusic.volume = 0.3;
  }
  i++;
});

signupText.addEventListener("click", () => {
  registerForm.classList.remove("active");
  register.classList.add("btn-colored");
  login.classList.remove("btn-colored");
  loginForm.classList.add("active");
});

loginText.addEventListener("click", () => {
  registerForm.classList.add("active");
  login.classList.add("btn-colored");
  register.classList.remove("btn-colored");
  loginForm.classList.remove("active");
});

login.addEventListener("click", () => {
  document.title = "Login";
  registerForm.classList.add("active");
  login.classList.add("btn-colored");
  register.classList.remove("btn-colored");
  loginForm.classList.remove("active");
  loginMusic.play();
  signupMusic.pause();
  loginMusic.volume = 0.3;
  loginMusic.loop = true;
});

register.addEventListener("click", () => {
  loginMusic.pause();
  signupMusic.play();
  signupMusic.loop = true;
  signupMusic.volume = 0.3;
  document.title = "Register";
  registerForm.classList.remove("active");
  register.classList.add("btn-colored");
  login.classList.remove("btn-colored");
  loginForm.classList.add("active");
});

// Show / Hide Password

const eyeIcon = document.getElementById("eye-icon");
const secondEyeIcon = document.getElementById("eye-icon-2");
const thirdEyeIcon = document.getElementById("eye-icon-3");
const eyeOpen = document.getElementById("eyeOpen");
const secondeyeOpen = document.getElementById("secondeyeOpen");
const thirdeyeOpen = document.getElementById("thirdeyeOpen");
const eyeClose = document.getElementById("eyeClose");
const secondeyeClose = document.getElementById("secondeyeClose");
const thirdeyeClose = document.getElementById("thirdeyeClose");
const password = document.getElementById("password");
const secondPassword = document.getElementById("password2");
const thirdPassword = document.getElementById("password-3");
const passwordConfirm = document.getElementById("password-confirm");

eyeIcon.addEventListener("click", () => {
  const show =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", show);

  if (eyeOpen.classList.contains("active")) {
    eyeOpen.classList.remove("active");
    eyeClose.classList.add("active");
  } else {
    eyeOpen.classList.add("active");
    eyeClose.classList.remove("active");
  }
});

secondEyeIcon.addEventListener("click", () => {
  const show =
    secondPassword.getAttribute("type") === "password" ? "text" : "password";
  secondPassword.setAttribute("type", show);

  if (secondeyeOpen.classList.contains("active")) {
    secondeyeOpen.classList.remove("active");
    secondeyeClose.classList.add("active");
  } else {
    secondeyeOpen.classList.add("active");
    secondeyeClose.classList.remove("active");
  }
});

thirdEyeIcon.addEventListener("click", () => {
  const show =
    thirdPassword.getAttribute("type") === "password" ? "text" : "password";
  thirdPassword.setAttribute("type", show);

  if (thirdeyeOpen.classList.contains("active")) {
    thirdeyeOpen.classList.remove("active");
    thirdeyeClose.classList.add("active");
  } else {
    thirdeyeOpen.classList.add("active");
    thirdeyeClose.classList.remove("active");
  }
});

// Local Storage
const loginPassword = document.getElementById("password");
const loginEmail = document.getElementById("loginEmail");
const registerEmail = document.getElementById("registerEmail");
const registerUsername = document.getElementById("registerUsername");
const checkbox = document.getElementById("checkbox");

loginSubmit.addEventListener("click", () => {
  const loginPassword = document.getElementById("password");
  const loginEmail = document.getElementById("loginEmail");
  const loginObject = {
    email: loginEmail.value || "",
    password: loginPassword.value || "",
    rememberMe: true,
  };

  if (validateLoginForm(loginObject)) {
    if (checkbox.checked) {
      localStorage.setItem("loginForm", JSON.stringify(loginObject));
    } else {
      localStorage.removeItem("loginForm");
    }
  }
});

registerSubmit.addEventListener("click", () => {
  const registerPassword = document.getElementById("password2");
  const registerConfirmPassword = document.getElementById("password-3");
  const registerUsername = document.getElementById("registerUsername");
  const registerEmail = document.getElementById("registerEmail");
  const registerObject = {
    username: registerUsername.value || "",
    email: registerEmail.value || "",
    password: registerPassword.value || "",
    passwordConfirm: registerConfirmPassword.value || "",
  };

  if (validateRegisterForm(registerObject)) {
    localStorage.setItem("registerForm", JSON.stringify(registerObject));
  }
});

const getFromLocalStorage = () => {
  const loginObject = JSON.parse(localStorage.getItem("loginForm"));
  loginEmail.value = isNull("email", loginObject);
  loginPassword.value = isNull("password", loginObject);
  checkbox.checked = isNull("rememberMe", loginObject);

  const registerObject = JSON.parse(localStorage.getItem("registerForm"));
  registerEmail.value = isNull("email", registerObject);
  registerUsername.value = isNull("username", registerObject);
  secondPassword.value = isNull("password", registerObject);
};
getFromLocalStorage();

function isNull(data, obj) {
  return obj ? obj[data] : "";
}

//Form Validation

const warningBox = document.getElementById("warningBox");
const warningText = document.getElementById("warningText");
const warningBoxRegister = document.getElementById("warningBoxRegister");
const warningTextRegister = document.getElementById("warningTextRegister");

function validateLoginForm(data) {
  // Bütün (login)inputlar dolu mu ?
  //emailde gerçekten email mi var?
  //password min 8 char ortaya karışık olsun
  const emailValue = data.email.trim();
  const passwordValue = data.password.trim();

  if (emailValue === "") {
    warningText.innerText = "Login Failed : Email can't be blank !";
    warningBox.classList.remove("active");
    errorMusic.play();
    errorMusic.volume = 0.5;
    errorMusic.loop = true;
  } else if (!isEmail(emailValue)) {
    warningText.innerText = "Login Failed : Please enter a valid email !";
    warningBox.classList.remove("active");
    errorMusic.play();
    errorMusic.volume = 0.5;
    errorMusic.loop = true;
  }

  if (passwordValue === "") {
    warningText.innerText = "Login Failed : Password can't be blank !";
    warningBox.classList.remove("active");
    errorMusic.play();
    errorMusic.volume = 0.5;
    errorMusic.loop = true;
  } else if (!isPassword(passwordValue)) {
    warningText.innerText = "Login Failed : Please enter a valid password !";
    warningBox.classList.remove("active");
    errorMusic.play();
    errorMusic.volume = 0.5;
    errorMusic.loop = true;
  }

  if (!isPassword(passwordValue) && !isEmail(emailValue)) {
    warningText.innerText =
      "Login Failed : Your password and email is not valid !";
    warningBox.classList.remove("active");
    errorMusic.play();
    errorMusic.volume = 0.5;
    errorMusic.loop = true;
  }
  if (emailValue === "" && passwordValue === "") {
    warningText.innerText = "Login Failed : Inputs can't be blank !";
    warningBox.classList.remove("active");
    errorMusic.play();
    errorMusic.volume = 0.5;
    errorMusic.loop = true;
  }

  if (
    isEmail(emailValue) &&
    isPassword(passwordValue) &&
    emailValue != "" &&
    passwordValue != ""
  ) {
    warningBox.classList.add("active");
    errorMusic.pause();
  }
  return data;
}

function validateRegisterForm(data) {
  const emailValue = data.email.trim();
  const passwordValue = data.password.trim();
  const usernameValue = data.username.trim();
  const passwordConfirmValue = data.passwordConfirm.trim();

  if (usernameValue === "") {
    warningTextRegister.innerText =
      "Register Failed : Username can't be blank !";
    warningBoxRegister.classList.remove("active");
    errorMusic.play();
    errorMusic.volume = 0.5;
    errorMusic.loop = true;
  } else if (usernameValue[3] == null) {
    warningTextRegister.innerText =
      "Register Failed : Username can't be less than 4 characters !";
    warningBoxRegister.classList.remove("active");
    errorMusic.play();
    errorMusic.volume = 0.5;
    errorMusic.loop = true;
  }

  if (emailValue === "") {
    warningTextRegister.innerText = "Register Failed : Email can't be blank !";
    warningBoxRegister.classList.remove("active");
    errorMusic.play();
    errorMusic.volume = 0.5;
    errorMusic.loop = true;
  } else if (!isEmail(emailValue)) {
    warningTextRegister.innerText =
      "Register Failed : Please enter a valid email !";
    warningBoxRegister.classList.remove("active");
    errorMusic.play();
    errorMusic.volume = 0.5;
    errorMusic.loop = true;
  }

  if (passwordValue === "") {
    warningTextRegister.innerText =
      "Register Failed : Password can't be blank !";
    warningBoxRegister.classList.remove("active");
    errorMusic.play();
    errorMusic.volume = 0.5;
    errorMusic.loop = true;
  } else if (!isPassword(passwordValue)) {
    warningTextRegister.innerText =
      "Register Failed : Please enter a valid password !";
    warningBoxRegister.classList.remove("active");
    errorMusic.play();
    errorMusic.volume = 0.5;
    errorMusic.loop = true;
  } else if (passwordValue != passwordConfirmValue) {
    warningTextRegister.innerText =
      "Register Failed : Please enter the same password in inputs !";
    warningBoxRegister.classList.remove("active");
    errorMusic.play();
    errorMusic.volume = 0.5;
    errorMusic.loop = true;
  }
  if (!isPassword(passwordValue) && !isEmail(emailValue)) {
    warningTextRegister.innerText =
      "Register Failed : Your password and email is not valid !";
    warningBoxRegister.classList.remove("active");
    errorMusic.play();
    errorMusic.volume = 0.5;
    errorMusic.loop = true;
  }
  if (emailValue === "" && passwordValue === "") {
    warningTextRegister.innerText = "Register Failed : Inputs can't be blank !";
    warningBoxRegister.classList.remove("active");
    errorMusic.play();
    errorMusic.volume = 0.5;
    errorMusic.loop = true;
  }

  if (
    isEmail(emailValue) &&
    isPassword(passwordValue) &&
    emailValue != "" &&
    passwordValue != "" &&
    passwordValue === passwordConfirmValue &&
    usernameValue != ""
  ) {
    warningBoxRegister.classList.add("active");
    errorMusic.pause();
  }

  return data;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    password
  );
}
// Fungsi pengecekan apakah admin yang login
function performLogin() {
  // Mendapatkan nilai username dan password dari input
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Melakukan pengecekan login (misalnya, menggunakan objek pengguna)
  var users = [{
          username: "admin",
          password: "admin123",
          role: "admin"
      },
      {
          username: "user1",
          password: "user123",
          role: "user"
      },
      // Tambahkan pengguna lain di sini jika perlu
  ];

  var loggedInUser = users.find(function (user) {
      return user.username === username && user.password === password;
  });

  if (loggedInUser) {
      // Jika login berhasil, arahkan ke halaman yang sesuai dengan peran pengguna
      if (loggedInUser.role === "admin") {
          goToPage("../admin/admin.html");
      } else {
          goToPage("../user/home.html");
      }
  } else {
      // Jika login gagal, tampilkan pesan error atau lakukan tindakan lain
      alert("Username atau password salah!");
  }
}

function goToPage(url) {
  // Mengarahkan ke halaman yang ditentukan
  window.location.href = url;
}