const urlInput = document.getElementById("url-input");
const urlButton = document.getElementById("url-submit");
const inputPage = document.getElementById("input-page");
const qrPage = document.getElementById("qr-page");
const qrContainer = document.getElementById("qr-container");

const downloadButton = document.getElementById("download-button");
const shareButton = document.getElementById("share-button");

let currentQR;

function displayQR() {
    let qrcode = new QRCode(qrContainer);

    currentQR = qrcode.makeCode(urlInput.value);
    inputPage.classList.add("hidden");
    qrPage.classList.remove("hidden");
    urlInput.value = "";

    console.log(qrContainer.querySelector('canvas').toDataURL("image/png"));
    downloadButton.href = qrContainer.querySelector('canvas').toDataURL("image/png");
}

function shareQR() {
    navigator.clipboard.writeText(qrContainer.querySelector('canvas').toDataURL("image/png"));
}

urlButton.addEventListener("click", displayQR);
shareButton.addEventListener("click", shareQR);