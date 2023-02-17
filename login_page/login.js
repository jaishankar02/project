let formEmail = document.querySelector(".emailInput")
let formPhone = document.querySelector(".phoneInput")
let loginOptionchange = document.querySelector(".login-phoneNumber")
let changeTophone = document.querySelector(".changeTOphone")
let changeToemail = document.querySelector(".changeToemail")
loginOptionchange.onclick= function(){
    if(formPhone.style.display=="none"||formEmail.style.display==""){
        formPhone.style.display="block"
        formEmail.style.display="none"
        changeTophone.style.display="none"
        changeToemail.style.display="block"

    }
    else{
        formEmail.style.display="block"
        formPhone.style.display="none"
        changeTophone.style.display="block"
        changeToemail.style.display="none"
    }
}