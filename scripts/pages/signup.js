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


let registryUser = {
    name: '',
    surname: '',
    email: '',
    pass: ''
};

//VALIDAÇÕES
buttonReg.addEventListener('click', function (e) {

  if(validateRegistry(nameReg.value, surnameReg.value, emailReg.value, passwordReg.value, confirmPasswordReg.value)) {
        // e.preventDefault();
        //ESSE PREVENT_DEFAULT ME IMPEDE DE DAR REFRESH NA PÁGINA !!!!!!!!!!!!!!!!!

//NORMALIZAÇÃO DOS DADOS
        nameReg = textNormalization(nameReg.value);
        surnameReg = textNormalization(surnameReg.value);
        emailReg = textNormalization(emailReg.value);
        passwordReg = textNormalization(passwordReg.value);
        confirmPasswordReg = textNormalization(confirmPasswordReg.value);

        registryUser.name = nameReg;
        registryUser.surname = surnameReg;
        registryUser.email = emailReg;
        registryUser.pass = passwordReg;

        let registryUserJson = JSON.stringify(registryUser);

        console.log(registryUserJson);
    }
});    


//EVENTO PARA VALIDAÇÃO DO INPUT NAME ATRAVÉS DA FUNÇÃO required
nameReg.addEventListener('keyup', () => {

    let errorMessageNameReg = required(nameReg.value);
    errorNameReg.innerText = errorMessageNameReg;

    nameReg.style.border = errorMessageNameReg == '' ? '2px solid transparent' : '2px solid #e9554ebb';

    validateRegistry(nameReg.value, surnameReg.value, emailReg.value, passwordReg.value, confirmPasswordReg.value);
})


//EVENTO PARA VALIDAÇÃO DO INPUT SURNAME ATRAVÉS DA FUNÇÃO required
surnameReg.addEventListener('keyup', () => {

    let errorMessageSurnameReg = required(surnameReg.value);
    errorSurnameReg.innerText = errorMessageSurnameReg;

    surnameReg.style.border = errorMessageSurnameReg == '' ? '2px solid transparent' : '2px solid #e9554ebb';

    validateRegistry(nameReg.value, surnameReg.value, emailReg.value, passwordReg.value, confirmPasswordReg.value);
})


//EVENTO PARA VALIDAÇÃO DO EMAIL ATRAVÉS DA FUNÇÃO validateEmail
emailReg.addEventListener('keyup', () => {

    let errorMessageEmailReg = validateEmail(emailReg.value);
    errorEmailReg.innerText = errorMessageEmailReg;

    emailReg.style.border = errorMessageEmailReg == '' ? '2px solid transparent' : '2px solid #E9554EBB';

    validateRegistry(nameReg.value, surnameReg.value, emailReg.value, passwordReg.value, confirmPasswordReg.value);
});


//EVENTO PARA VALIDAÇÃO DA DEFINIÇÃO DE SENHA ATRAVÉS DA FUNÇÃO setPassword
passwordReg.addEventListener('keyup', () =>{

    let errorMessagePasswordReg = setPassword(passwordReg.value);
    errorPasswordReg.innerText = errorMessagePasswordReg;

    passwordReg.style.border = errorMessagePasswordReg == '' ? '2px solid transparent' : '2px solid #E9554EBB';
    
    validateRegistry(nameReg.value, surnameReg.value, emailReg.value, passwordReg.value, confirmPasswordReg.value);
})


//EVENTO PARA VALIDAÇÃO DAS SENHAS ATRAVÉS DA FUNÇÃO passwordValidation
confirmPasswordReg.addEventListener('keyup', () => {

    let errorMessageConfirmPasswordReg = passwordValidation(passwordReg.value, confirmPasswordReg.value);
    errorConfirmPasswordReg.innerText = errorMessageConfirmPasswordReg;

    confirmPasswordReg.style.border = errorMessageConfirmPasswordReg == '' ? '2px solid transparent' : '2px solid #E9554EBB';

    validateRegistry(nameReg.value, surnameReg.value, emailReg.value, passwordReg.value, confirmPasswordReg.value);
})


// function registryRequest(){

//     let configRegistryRequest = {
//         method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(registryUser)
//     }

//     fetch('https://ctd-todo-api.herokuapp.com/v1/users', configRegistryRequest)
//     .then(
//         response => {
//             if (response.status == 201 || response.status == 200) {
//                 console.log('deu certo');
//                 return response.json();
//         } 
//         // else{
//         //     //lança uma exceção em caso de erro
//         //     console.log('exceção');
//         //     throw response;
//         // }
//     })
//     .then(
//         response => {
//             success(response.status);
//             console.log(response.status);
//         }
//     )
//     .catch(
//         erro => {
//             if (erro.status == 400 || erro.status == 404) {
//                 console.log('erro');
//                 error('Usuário já registrado/Dados incompletos');
//             } 
//             // else {
//             //     console.log('ESSE ELSE É NECESSÁRIO?');
//             // }
//         }
//     );
// }

// registryRequest();


//FUNÇÃO PARA VALIDAÇÃO DO FORMULÁRIO APÓS O PREENCHIMENTO DE TODOS OS CAMPOS DE ACORDO COM REQUISITOS
function validateRegistry (name, surname, email, password, confirmPassword) {

    if (required(name) == '' && required(surname) == '' && validateEmail(email) == '' && setPassword(password) == '' && passwordValidation(password, confirmPassword) == '') {

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