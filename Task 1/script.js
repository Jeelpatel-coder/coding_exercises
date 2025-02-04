const URL = `https://quotes-api-self.vercel.app/quote`;

const button = document.querySelector("button");

const p = document.querySelector("p");

const h2 = document.querySelector("h2");

async function getData(){
    let response = await fetch(URL);
    console.log(response);
    let result = await response.json();
    console.log(result);
    p.innerText = result.quote;
    h2.innerText = result.author;
}

button.addEventListener("click", getData);