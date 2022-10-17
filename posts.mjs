const out = document.querySelector("div#container");
const API_BASE_URL = 'https://nf-api.onrender.com';
const postsUrl = `${API_BASE_URL}/api/v1/social/posts`;

function listPosts(posts){
    console.log ("List:", posts);
    out.innerHTML = "";
    let newDivs = "";
    for (let post of posts) {
        console.log(post);
        newDivs += `<div>
      <img src="${post.image}" alt="${post.name}">
      <h2>${post.name}</h2>
      <p>From: ${post}</p>
    </div>`;
    }
    out.innerHTML = newDivs;
}

function myPromiseUsingXHR(postsUrl) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", postsUrl);

        xhr.setRequestHeader('accessToken', accessToken);
        //xhr.onload = function() { return resolve(xhr.responseText); };
        xhr.onload = () => resolve(xhr.responseText);

        //xhr.onerror = function() { return reject(xhr.statusText); };
        xhr.onerror = () => reject(xhr.statusText);

        xhr.send();
    });
}

myPromiseUsingXHR (postsUrl)
    .then(data => JSON.parse(data))
    .then(list => listPosts(list))
    .catch(error => out.innerHTML = "Something's wrong! " + error.message);

