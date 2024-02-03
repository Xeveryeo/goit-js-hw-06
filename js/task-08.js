const loginForm = document.querySelector('.login-form');
const emailInput = loginForm.elements['email'];
const passwordInput = loginForm.elements['password'];

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(emailInput.value.trim())) {
        alert('Please enter a valid email address.');
        return;
    }

    if (passwordInput.value.trim().length < 8) {
        alert('Please enter a password with at least 8 characters.');
        return;
    }

    const formData = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
    };

    console.log(formData);
    loginForm.reset();
});

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
