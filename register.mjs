const button = document.getElementById('submit');

let usernamePattern = /^[a-z-A-Z-0-9_æøåÆØÅ]{3,15}$/g;
let emailPattern = /^[a-z0-9.æøå]*[a-z0-9]+@(stud.)?noroff.no$/i
let passwordPattern = /^[a-z-A-Z-0-9æøåÆØÅ]{8,30}$/;

async function validateInputs() {

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let validUsername = false;
    if (usernamePattern.test(String(username))) {
        validUsername = true;
        console.log(validUsername);
    }
    let validEmail = false;
    if (emailPattern.test(String(email))) {
        validEmail = true;
        console.log(validEmail);
    }

    let validPassword = false;
    if (passwordPattern.test(String(validPassword))) {
        validPassword = true;
        console.log(validPassword);
    }

    if (validUsername && validEmail && validPassword) {
        let userObject = {username: username, email: email, password: password};
        window.localStorage.setItem('user', JSON.stringify(userObject));
        console.log(userObject);
    }



}

button.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(validateInputs(event));
})

const API_BASE_URL = 'https://nf-api.onrender.com';
const API_REGISTER_URL = `${API_BASE_URL}/api/v1/social/auth/register`;

const requestOptions = {
    method: 'POST',
    body: JSON.stringify({
        "name": username,
        "email": email,
        "password": password,
        // "avatar": "https://img.service.com/avatar.jpg",
        // "banner": "https://img.service.com/banner.jpg"
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
};

fetch([requestOptions, API_REGISTER_URL])
    .then(results => { console.log(results)})
    .then()
/*
validateInputs(API_REGISTER_URL, requestOptions)
    .then((response) => response.json(requestOptions))
    .then(JSON => {
        console.log('Promise resolved');
      //  event(requestOptions);
        console.log(JSON);
        if (requestOptions.status === 200) {
            console.log(requestOptions);
       }
    });

console.log(requestOptions);


fetch(API_REGISTER_URL, requestOptions)
    .then((response) => response.json())
    .then((json) => console.log(json));
/**/
