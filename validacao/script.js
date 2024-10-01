function validateForm(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    let errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';
    if(name ===''){
        errorMessage.textContent = 'Por favor, insira seu nome.';
        return false;
    }
    if(email ===''){
        errorMessage.textContent = 'Por favor, insira seu e-mail.';
        return false;
    }
    if(password===''){
        errorMessage.textContent = 'Por favor, insira sua senha.';
        return false;
    }
    if(confirmPassword  !=password){
        errorMessage.textContent = 'As senhas não são iguais.';
        return false;
    }
    return true;
}