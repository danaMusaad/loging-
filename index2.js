const passwordInput = document.getElementById("password")
const togglePassword = document.getElementById("togglePassword")
const strengmsg = document.getElementById("passwordMessage")

togglePassword.addEventListener("click", function(){
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent  = "🔒";
    } else {
        passwordInput.type = "password"
        togglePassword.textContent = "👁️";
    }
})

passwordInput.addEventListener("input", function(){
    const password = passwordInput.value;

    if (password === "") {
        strengmsg.textContent = "";
        return;
    }

    let streng = "";
    if (password.length < 8){
        streng = "too short";
        strengmsg.style.color="red";
    } else if (
        /[a-z]/.test(password) &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[^a-zA-Z0-9]/.test(password)
    ){
        streng = "Strong password";
        strengmsg.style.color = "green";
    } else {
        streng = "Weak password";
        strengmsg.style.color="orange";
    }

    strengmsg.textContent = streng; 
});

