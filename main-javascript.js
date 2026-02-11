const urlInput = document.getElementById("url-input");
const urlButton = document.getElementById("url-submit");
const qrContainer = document.getElementById("qr-container");

function displayQR() {
    let qrcode = new QRCode(qrContainer);

    qrcode.makeCode(urlInput.value);
}

urlButton.addEventListener("click", displayQR);