const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorField = document.getElementById("errorField");

    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!name || !email || !password) {
        errorField.textContent = "Please fill in all fields.";
        return;
    } if (password.length < 6) {
        errorField.textContent = "Password must be at least 6 characters long.";
        return;
    } if (!email.includes("@")) {
        errorField.textContent = "Please enter a valid email address.";
        return;
    } if (!specialCharRegex.test(password)) {
        errorField.textContent =
            "La contraseña debe contener al menos un carácter especial.";
        return;
    }

    const userData = {
        name,
        email,
        password
    }

    errorField.textContent = "";

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(data => {
            console.log("Server Response:", data);
        })
        .catch(error => {
            console.error("Error:", error);
        });


    form.reset();

    console.log("User Data:", userData);

});

