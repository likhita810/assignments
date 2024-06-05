function printError(errId,errMsg) {
    document.getElementById(errId).innerHTML = errMsg;
}

function doValid() {
    // let username1=document.formValid.username.value;
    // alert(username1);

    let userName1 = document.getElementById('username').value;
    let password1 = document.getElementById('password').value;

    // console.log(userName1);
    // console.log(password1);

    let userNameErr = passwordErr = true;

    if (userName1=="") {
        printError("username","please enter your name");
        return false;
    }
}