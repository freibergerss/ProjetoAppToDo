//SELEÇÃO DOS ELEMENTOS HTML
let emailLogin = document.getElementById('inputEmail');
let passwordLogin = document.getElementById('inputPassword');
let buttonLogin = document.getElementById('loginButton');
let errorEmailLogin = document.getElementById('erroEmailLogin');
let errorPasswordLogin = document.getElementById('erroPasswordLogin');

//ESTILIZAÇÃO INICIAL DO BUTTON - DISABLED
buttonLogin.style.backgroundColor = '#979292a1';
buttonLogin.innerText = 'Bloqueado';

let objetoUsuario = {
    email: "",
    password: ""
}

buttonLogin.addEventListener('click', function (e) {
    
    if(validarLogin(emailLogin.value, passwordLogin.value)) {
        // e.preventDefault();
        //ESSE PREVENT_DEFAULT ME IMPEDE DE DAR REFRESH NA PÁGINA !!!!!!!!!!!!!!!!!

//NORMALIZAÇÃO DOS DADOS
        emailLogin = normalizarTexto(emailLogin.value);
        passwordLogin = normalizarTexto(passwordLogin.value);

        objetoUsuario.email = emailLogin;
        objetoUsuario.password = passwordLogin;

        let objetoEmJson = JSON.stringify(objetoUsuario);

        console.log(objetoEmJson);
    }
});

//EVENTO PARA O INPUT EMAIL QUE VALIDA O EMAIL INSERIDO DE ACORDO COM REGEX
emailLogin.addEventListener('keyup', () => {

    let errorMessageEmailLogin = validarEmail(emailLogin.value);
    errorEmailLogin.innerText = errorMessageEmailLogin;

    emailLogin.style.border = errorMessageEmailLogin == '' ? '2px solid transparent' : '2px solid #e9554ebb';

    validarLogin(emailLogin.value, passwordLogin.value);
})

//EVENTO PARA O INPUT PASSWORD QUE VALIDA A SENHA INSERIDA (SEM REGRAS)
passwordLogin.addEventListener('keyup', () => {

    let errorMessagePasswordLogin = campoObrigatorio(passwordLogin.value);
    errorPasswordLogin.innerText = errorMessagePasswordLogin;

    passwordLogin.style.border = errorMessagePasswordLogin == '' ? '2px solid transparent' : '2px solid #e9554ebb';

    validarLogin(emailLogin.value, passwordLogin.value);
})

//FUNÇÃO PARA VALIDAÇÃO DOS DADOS INSERIDOS E LIBERAÇÃO DO BUTTON PARA ENVIO DO FORMULÁRIO
function validarLogin(email, password) {

    if (password && validarEmail(email) == '') {

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