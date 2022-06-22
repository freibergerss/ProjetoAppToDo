//SELEÇÃO DOS ELEMENTOS HTML
let buttonReg = document.getElementById('buttonReg');
let nameReg = document.getElementById('nameReg');
let surnameReg = document.getElementById('surnameReg');
let emailReg = document.getElementById('emailReg');
let passwordReg = document.getElementById('passwordReg');
let confirmPasswordReg = document.getElementById('confirmPasswordReg');
let errorNameReg = document.getElementById('errorNameReg');
let errorSurnameReg = document.getElementById('errorSurnameReg');
let errorEmailReg = document.getElementById('errorEmailReg');
let errorPasswordReg = document.getElementById('errorPasswordReg');
let errorConfirmPasswordReg = document.getElementById('errorConfirmPasswordReg');


//ESTILIZAÇÃO INICIAL DO BUTTON - DISABLED
buttonReg.style.backgroundColor = '#979292a1';
buttonReg.innerText = 'Bloqueado';


let objetoUsuarioRegistro = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
};

//VALIDAÇÕES
buttonReg.addEventListener('click', function (e) {

  if(validarRegistro(nameReg.value, surnameReg.value, emailReg.value, passwordReg.value, confirmPasswordReg.value)) {
        // e.preventDefault();
        //ESSE PREVENT_DEFAULT ME IMPEDE DE DAR REFRESH NA PÁGINA !!!!!!!!!!!!!!!!!

//NORMALIZAÇÃO DOS DADOS
        nameReg = normalizaTextoRetiraEspacos(nameReg.value);
        surnameReg = normalizaTextoRetiraEspacos(surnameReg.value);
        emailReg = normalizaTextoRetiraEspacos(emailReg.value);
        passwordReg = normalizaTextoRetiraEspacos(passwordReg.value);
        confirmPasswordReg = normalizaTextoRetiraEspacos(confirmPasswordReg.value);

        objetoUsuarioRegistro.nome = nameReg;
        objetoUsuarioRegistro.sobrenome = surnameReg;
        objetoUsuarioRegistro.email = emailReg;
        objetoUsuarioRegistro.senha = passwordReg;

        let objetoEmJsonRegistro = JSON.stringify(objetoUsuarioRegistro);

        console.log(objetoEmJsonRegistro);
    }
});    


//EVENTO PARA VALIDAÇÃO DO INPUT NAME ATRAVÉS DA FUNÇÃO campoObrigatorio
nameReg.addEventListener('keyup', () => {

    let errorMessageNameReg = campoObrigatorio(nameReg.value);
    errorNameReg.innerText = errorMessageNameReg;

    nameReg.style.border = errorMessageNameReg == '' ? '2px solid transparent' : '2px solid #e9554ebb';

    validarRegistro(nameReg.value, surnameReg.value, emailReg.value, passwordReg.value, confirmPasswordReg.value);
})


//EVENTO PARA VALIDAÇÃO DO INPUT SURNAME ATRAVÉS DA FUNÇÃO campoObrigatorio
surnameReg.addEventListener('keyup', () => {

    let errorMessageSurnameReg = campoObrigatorio(surnameReg.value);
    errorSurnameReg.innerText = errorMessageSurnameReg;

    surnameReg.style.border = errorMessageSurnameReg == '' ? '2px solid transparent' : '2px solid #e9554ebb';

    validarRegistro(nameReg.value, surnameReg.value, emailReg.value, passwordReg.value, confirmPasswordReg.value);
})


//EVENTO PARA VALIDAÇÃO DO EMAIL ATRAVÉS DA FUNÇÃO validarEmail
emailReg.addEventListener('keyup', () => {

    let errorMessageEmailReg = validarEmail(emailReg.value);
    errorEmailReg.innerText = errorMessageEmailReg;

    emailReg.style.border = errorMessageEmailReg == '' ? '2px solid transparent' : '2px solid #E9554EBB';

    validarRegistro(nameReg.value, surnameReg.value, emailReg.value, passwordReg.value, confirmPasswordReg.value);
});


//EVENTO PARA VALIDAÇÃO DA DEFINIÇÃO DE SENHA ATRAVÉS DA FUNÇÃO definirSenha
passwordReg.addEventListener('keyup', () =>{

    let errorMessagePasswordReg = definirSenha(passwordReg.value);
    errorPasswordReg.innerText = errorMessagePasswordReg;

    passwordReg.style.border = errorMessagePasswordReg == '' ? '2px solid transparent' : '2px solid #E9554EBB';
    
    validarRegistro(nameReg.value, surnameReg.value, emailReg.value, passwordReg.value, confirmPasswordReg.value);
})


//EVENTO PARA VALIDAÇÃO DAS SENHAS ATRAVÉS DA FUNÇÃO validarSenhas
confirmPasswordReg.addEventListener('keyup', () => {

    let errorMessageConfirmPasswordReg = validarSenhas(passwordReg.value, confirmPasswordReg.value);
    errorConfirmPasswordReg.innerText = errorMessageConfirmPasswordReg;

    confirmPasswordReg.style.border = errorMessageConfirmPasswordReg == '' ? '2px solid transparent' : '2px solid #E9554EBB';

    validarRegistro(nameReg.value, surnameReg.value, emailReg.value, passwordReg.value, confirmPasswordReg.value);
})


//FUNÇÃO PARA VALIDAÇÃO DO FORMULÁRIO APÓS O PREENCHIMENTO DE TODOS OS CAMPOS DE ACORDO COM REQUISITOS
function validarRegistro (nome, sobrenome, email, password, confirmPassword) {

    if (campoObrigatorio(nome) == '' && campoObrigatorio(sobrenome) == '' && validarEmail(email) == '' && definirSenha(password) == '' && validarSenhas(password, confirmPassword) == '') {

        buttonReg.removeAttribute('disabled');
        buttonReg.style.backgroundColor = '#7898ff';
        buttonReg.innerText = 'Acessar';
        return true;

    } else {
        buttonReg.setAttribute('disabled', true);
        buttonReg.style.backgroundColor = '#979292a1';
        buttonReg.innerText = 'Bloqueado';
        return false;
    }
}