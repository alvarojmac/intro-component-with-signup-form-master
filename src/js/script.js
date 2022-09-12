const form = document.querySelector('#form');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');



form.addEventListener('submit', e => {

    let firstName = fname.value.trim();
    let lastName = lname.value.trim();
    let emailValue = email.value.trim();
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordValue = password.value.trim();

    if (firstName === '') {
        errorFunc(fname, 'First name cannot be empty'); /* fname = req */
        e.preventDefault();
    }
    else {
        successFunc(fname)
    }

    if (lastName === '') {
        errorFunc(lname, 'Last name cannot be empty'); /* fname = req */
        e.preventDefault();
    }
    else {
        successFunc(lname)
    }

    if (emailValue === '') {
        errorFunc(email, 'Email cannot be empty'); /* fname = req */
        e.preventDefault();
    } else if (!emailValue.match(pattern)){
        errorFunc(email, 'Looks like not an email');
        e.preventDefault();
    }
    else {
        successFunc(email)
    }

    if (passwordValue === '') {
        errorFunc(password, 'Password cannot be empty'); /* fname = req */
        e.preventDefault();
    }
    else {
        successFunc(password)
    }
})

function errorFunc(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.className = 'error';
    span.className = 'error-text';
}

function successFunc(req) {
    req.className = 'success';
}
