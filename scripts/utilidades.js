//FUNÇÃO PARA VALIDAÇÃO DE CAMPO OBRIGATÓRIO
function campoObrigatorio(param){
    return (!param) ? 'Campo obrigatório' : '';
};


//FUNÇÃO PARA VALIDAÇÃO DE SENHA DE ACORDO COM REGEX 
function definirSenha(senhaRecebida) {
    if (!senhaRecebida){
        return 'Defina uma senha.';
    }
    if(!senhaRecebida.match(/^[0-9a-zA-Z$*&@#]{8,}$/)) {
        return 'A senha deve possuir ao menos 8 caracteres.';
    }
    if (!senhaRecebida.match(/[A-Z]+/)){
        return 'A senha deve possuir ao menos uma letra maiúscula.';
    }
    if (!senhaRecebida.match(/\d+/)){
        return 'A senha deve possuir ao menos um dígito numérico.';
    }
    if (!senhaRecebida.match(/[a-z]+/)){
        return 'A senha deve possuir ao menos uma letra minúscula.';
    }
    return '';
};


//FUNÇÃO PARA VALIDAR SE AS SENHAS SÃO COMPATÍVEIS
function validarSenhas(senha, confirmaSenha) {
    if(!confirmaSenha){
        return 'Campo Obrigatório!';
    }
    if(senha !== confirmaSenha){
       return "Senhas diferentes!";
    } 
    return '';
};


//FUNÇÃO PARA VALIDAÇÃO DE EMAIL DE ACORDO COM REGEX
function validarEmail(email){
    if(!email) {
        return 'Campo obrigatório!';
    }
    if(!email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)){
        return 'E-mail inválido!';
    }
        return '';
};


//FUNÇÃO PARA NORMALIZAÇÃO DE TEXTO
function normalizarTexto (textoRecebido) {
    return textoRecebido.trim();
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