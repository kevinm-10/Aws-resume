
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://hfoaz6vemzwi4wl33j75h5cfym0iuygd.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}
updateCounter();