//SELEÇÃO DOS ELEMENTOS HTML
let emailLogin = document.getElementById('inputEmail');
let passwordLogin = document.getElementById('inputPassword');
let buttonLogin = document.getElementById('loginButton');
let errorEmailLogin = document.getElementById('erroEmailLogin');
let errorPasswordLogin = document.getElementById('erroPasswordLogin');

//ESTILIZAÇÃO INICIAL DO BUTTON - DISABLED
buttonLogin.style.backgroundColor = '#979292a1';
buttonLogin.innerText = 'Bloqueado';

let loginUser = {
    email: "",
    password: ""
}

buttonLogin.addEventListener('click', function (e) {
    
    if(validateLogin(emailLogin.value, passwordLogin.value)) {
        // e.preventDefault();
        //ESSE PREVENT_DEFAULT ME IMPEDE DE DAR REFRESH NA PÁGINA !!!!!!!!!!!!!!!!!

//NORMALIZAÇÃO DOS DADOS
        emailLogin = textNormalization(emailLogin.value);
        passwordLogin = textNormalization(passwordLogin.value);

        loginUser.email = emailLogin;
        loginUser.password = passwordLogin;

        let loginUserJson = JSON.stringify(loginUser);

        console.log(loginUserJson);
    }
});

//EVENTO PARA O INPUT EMAIL QUE VALIDA O EMAIL INSERIDO DE ACORDO COM REGEX
emailLogin.addEventListener('keyup', () => {

    let errorMessageEmailLogin = validateEmail(emailLogin.value);
    errorEmailLogin.innerText = errorMessageEmailLogin;

    emailLogin.style.border = errorMessageEmailLogin == '' ? '2px solid transparent' : '2px solid #e9554ebb';

    validateLogin(emailLogin.value, passwordLogin.value);
})

//EVENTO PARA O INPUT PASSWORD QUE VALIDA A SENHA INSERIDA (SEM REGRAS)
passwordLogin.addEventListener('keyup', () => {

    let errorMessagePasswordLogin = required(passwordLogin.value);
    errorPasswordLogin.innerText = errorMessagePasswordLogin;

    passwordLogin.style.border = errorMessagePasswordLogin == '' ? '2px solid transparent' : '2px solid #e9554ebb';

    validateLogin(emailLogin.value, passwordLogin.value);
})

//FUNÇÃO PARA VALIDAÇÃO DOS DADOS INSERIDOS E LIBERAÇÃO DO BUTTON PARA ENVIO DO FORMULÁRIO
function validateLogin(email, password) {

    if (password && validateEmail(email) == '') {

        buttonLogin.removeAttribute('disabled');
        buttonLogin.style.backgroundColor = '#7898ff';
        buttonLogin.innerText = 'Acessar';
        return true;

    } else {
        buttonLogin.setAttribute('disabled', true);
        buttonLogin.style.backgroundColor = '#979292a1';
        buttonLogin.innerText = 'Bloqueado';
        return false;
    }
}