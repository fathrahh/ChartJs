const fileInput = document.querySelector('#fileInput');
const fileName = document.querySelector('.file-name');
const labelControl = document.querySelector(".label-control");

const regEx = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

fileInput.addEventListener('change', function () {
    const fileNames = this.value.match(regEx);
    fileName.textContent = fileNames[0];
    labelControl.style.color = "#B51B1B";
});