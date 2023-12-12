document.addEventListener("DOMContentLoaded", pwcheck);

function pwcheck() {
    let password = document.querySelector("#password").value;
    let confirm = document.querySelector("#confirm-password").value;

    let error = document.querySelector("#error");

    if((password == "") && (confirm == "")) {
        error.innerHTML = "* Passwords do not match"
    }
    if(password != confirm) {
        error.innerHTML = "* Passwords do not match"
    }
}