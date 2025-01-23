const scriptURL = 'https://script.google.com/macros/s/AKfycbwypv7D7XF87W3tA2kMJWuVK5Lw4D_AZcA45q7ItPRkb13y6kxCeEScE9zOlAtWmHjU/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
const loaderOverlay = document.getElementById('loader');

function showLoader() {
    loaderOverlay.style.display = 'flex';
}

function hideLoader() {
    loaderOverlay.style.display = 'none';
}

form.addEventListener('submit', e => {
    e.preventDefault();
    showLoader();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            hideLoader();
            msg.innerHTML = "Message Sent Successfully!";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000)
            form.reset();
        })
        .catch(error =>{ 
            hideLoader();
            console.error('Error!', error.message);
            msg.innerHTML = "Something went wrong. Please try again!";
        })
});