function validation(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message').value;

    let message = '';

    if (email === '') {
        message = 'please enter an email.';
        msgBox.style.color = 'red';
    } else if (pass === '') {
        message = 'password must be at least 8 characters.';
        msgBox.style.color= 'red';
    } else if (age === '') {
        message = 'Age must be btn 12 and 50.';
        msgBox.style.color = 'red';
    }

    else {
        message = 'login successful';
        msgBox.style.color = 'green';
    }

    msgBox.innerText = message;
}