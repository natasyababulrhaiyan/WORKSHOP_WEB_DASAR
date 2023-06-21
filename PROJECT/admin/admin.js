const showNavbar = (toggleid, navid, bodyid, headerid) => {
    const toggle = document.getElementById(toggleid),
      nav = document.getElementById(navid),
      bodypd = document.getElementById(bodyid),
      headerpd = document.getElementById(headerid),
      logoutBtn = document.getElementById('logout-btn'); // Get the logout button element
  
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
        toggle.classList.toggle('bx-x');
        bodypd.classList.toggle('body-pd');
        headerpd.classList.toggle('body-pd');
  
        // Check if the logout button text is "Logout" or "Login" and toggle it accordingly
        if (logoutBtn.innerText === 'Logout') {
          logoutBtn.innerText = 'Login';
          logoutBtn.addEventListener('click', handleLogin);
        } else {
          logoutBtn.innerText = 'Logout';
          logoutBtn.removeEventListener('click', handleLogin);
        }
      });
    }
  };
  
  // Function to handle the login event
  function handleLogin() {
    // Add your login logic here
    console.log('Login button clicked');
  }
  
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');
  
  const linkcolor = document.querySelectorAll('.nav__link');
  
  function colorlink() {
    if (linkcolor) {
      linkcolor.forEach((l) => l.classList.remove('active'));
      this.classList.add('active');
    }
  }