//FUNÇÃO PARA VALIDAÇÃO DE CAMPO OBRIGATÓRIO
function required(param){
    return (!param) ? 'Campo obrigatório' : '';
};


//FUNÇÃO PARA VALIDAÇÃO DE SENHA DE ACORDO COM REGEX 
function setPassword(receivedPassword) {
    if (!receivedPassword){
        return 'Defina uma senha.';
    }
    if(!receivedPassword.match(/^[0-9a-zA-Z$*&@#]{8,}$/)) {
        return 'A senha deve possuir ao menos 8 caracteres.';
    }
    if (!receivedPassword.match(/[A-Z]+/)){
        return 'A senha deve possuir ao menos uma letra maiúscula.';
    }
    if (!receivedPassword.match(/\d+/)){
        return 'A senha deve possuir ao menos um dígito numérico.';
    }
    if (!receivedPassword.match(/[a-z]+/)){
        return 'A senha deve possuir ao menos uma letra minúscula.';
    }
    return '';
};


//FUNÇÃO PARA VALIDAR SE AS SENHAS SÃO COMPATÍVEIS
function passwordValidation(pass, confirmPass) {
    if(!confirmPass){
        return 'Campo Obrigatório!';
    }
    if(pass !== confirmPass){
       return "Senhas diferentes!";
    } 
    return '';
};


//FUNÇÃO PARA VALIDAÇÃO DE EMAIL DE ACORDO COM REGEX
function validateEmail(email){
    if(!email) {
        return 'Campo obrigatório!';
    }
    if(!email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)){
        return 'E-mail inválido!';
    }
        return '';
};


//FUNÇÃO PARA NORMALIZAÇÃO DE TEXTO
function textNormalization (receivedText) {
    return receivedText.trim();
};


//FUNÇÃO PARA RETORNAR RESPOSTA DE SUCESSO DAS PROMISES
function success(successMessage) {
    console.log(successMessage);
}


//FUNÇÃO PARA RETORNAR RESPOSTA DE ERRO DAS PROMISES
function error(errorMessage) {
    console.log(errorMessage);
    alert(errorMessage);
}