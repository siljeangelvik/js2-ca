const API_BASE_URL = 'https://nf-api.onrender.com';
const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;
const returnMessage = document.querySelector('.error');

const isValidUserName = userName => {
    let userNameRegex = /^[a-z0-9_æøå]{2,25}$/i;
    return userNameRegex.test(String(userName));
};

const isValidPassword = userPassword => {
    let passwordRegex = /^[a-z0-9_æøå]{8,25}$/i;
    return passwordRegex.test(String(userPassword));
};

function login() {
    let validUsername = username.value.trim();
    let validPassword = password.value.trim();

    if (!isValidUserName(validUsername)) {
        console.log("wrong username");
        return false;
    }

    if (!isValidPassword(validPassword)) {
        console.log("wrong pass");
        return false;
    }
    if (isValidUserName(validUsername) && isValidPassword(validPassword)) {
        console.log("Logged In");
        window.location="posts.html"
        return false;
    }
}

document.querySelector("#form").addEventListener("click", function(e){
    e.preventDefault();
    login();
});

async function loginUser(loginUrl, userData) {
    // console.log(userData);
    try {
        const postData = {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(loginUrl, postData);
        // console.log(response);
        const json = await response.json();
        // console.log(json);
    } catch (error) {
        console.log(error);
    }
}