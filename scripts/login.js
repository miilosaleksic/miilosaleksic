function userExists(username) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    return users.some(user => user.username === username);
  }
  
  function registerUser(username, password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username: username, password: password });
    localStorage.setItem("users", JSON.stringify(users));
  }
  
  function loginUser(username, password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    return users.find(user => user.username === username && user.password === password);
  }
  
  document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (userExists(username)) {
      alert("Korisničko ime već postoji. Molimo odaberite drugo.");
    } else {
      registerUser(username, password);
      alert("Korisnik je uspešno registrovan!");
      document.getElementById("signup-form").reset();
    }
  });
  
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;
    
    let user = loginUser(username, password);
    if (user) {
      alert("Uspešno ste prijavljeni!");
    } else {
      alert("Pogrešno korisničko ime ili lozinka. Molimo pokušajte ponovo.");
    }
  });
  
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;
    
    let user = loginUser(username, password);
    if (user) {
      localStorage.setItem("loggedInUser", username); 
      alert("Uspešno ste prijavljeni!");
      window.location.href = "main.html"; 
    } else {
      alert("Pogrešno korisničko ime ili lozinka. Molimo pokušajte ponovo.");
    }
  });