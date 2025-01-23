const scriptURL = 'https://script.google.com/macros/s/AKfycbwypv7D7XF87W3tA2kMJWuVK5Lw4D_AZcA45q7ItPRkb13y6kxCeEScE9zOlAtWmHjU/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Sent Successfully!";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
});