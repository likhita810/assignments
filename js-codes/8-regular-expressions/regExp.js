function printError(errID,errMsg) {
    document.getElementById(errID).innerHTML = errMsg;
}

function doValid() {
    let username=document.getElementById('username').value;
    // only getElementBy__ will give entire element, to access only the conctent in it the built in method .value should be used.
    let password=document.getElementById('password').value;

    let usernameErr = true;
    let passwordErr = true;
    // console.log(usernameErr);
    // console.log(passwordErr); 
    // will return error on submitting

    if (username=="") {
        printError('username','please enter your username');
        // when username is empty, call the function printError with errId as username and errMsg as given stmt.
        return false;
    }
}