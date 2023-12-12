
const passwords = {
    "admin": "admin",

};


document.getElementById("loginButton").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (passwords[username] && passwords[username] === password) {

        window.location.href = "main.html"; 
    } else {
        alert("Neplatné uživatelské jméno nebo heslo. Zkusto to znovu.");

    }
});