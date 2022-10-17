const API_BASE_URL = 'https://nf-api.onrender.com';
const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;
const returnMessage = document.querySelector('.error');

const isValidUserName = userName => {
    let userNameRegex = /^[a-z0-9_æøå]{2,25}$/i;
    return userNameRegex.test(String(userName));
};

const isValidEmail = userEmail => {
    const emailRegex = /^[a-z0-9_æøå]{4,25}@(stud.)?noroff\.no$/i;
    return emailRegex.test(String(userEmail));
};

const isValidPassword = userPassword => {
    let passwordRegex = /^[a-z0-9_æøå]{8,25}$/i;
    return passwordRegex.test(String(userPassword));
};

function register() {
    let validUsername = username.value.trim();
    let validEmail = email.value.trim();
    let validPassword = password.value.trim();

    if (!isValidUserName(validUsername)) {
        console.log("wrong username");
        return false;
    }

    if (!isValidEmail(validEmail)) {
        console.log("wrong email");
        return false;
    }
    if (!isValidPassword(validPassword)) {
        console.log("wrong pass");
        return false;
    }
    if (isValidUserName(validUsername) && isValidEmail(validEmail) && isValidPassword(validPassword)) {
        console.log("Logged In");
        window.location="index.html"
        return false;
    }
}

document.querySelector("#form").addEventListener("click", function(e){
    e.preventDefault();
    register();
});

async function registerUser(registerUrl, userData) {
    // console.log(userData);
    try {
        const postData = {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(registerUrl, postData);
        // console.log(response);
        const json = await response.json();
        // console.log(json);
    } catch (error) {
        console.log(error);
    }
}