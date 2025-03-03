const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signInBtn = document.getElementById('sign-in');
const signUpBtn = document.getElementById('sign-up');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailIput = document.getElementById('email-1');
const passwordIput = document.getElementById('password-1');
const nameInput = document.getElementById('name');

if (!container || !registerBtn || !loginBtn || !signInBtn || !signUpBtn || !emailInput || !passwordInput || !nameInput) {
    console.error('One or more elements not found');
}

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

signInBtn.addEventListener('click', () => {
    const email = emailIput.value;
    const password = passwordIput.value;

    if (email === '' || password === '') {
        alert('Please fill in both Email and Password.');
    } else{
        alert(`Sign In Successfull`)
    }
});
signUpBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    if (name === '' || email === '' || password === '') {
        alert('Please fill in Name, Email, and Password.');
    } else {
        alert(`Sign Up Successful!\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);
    }
});