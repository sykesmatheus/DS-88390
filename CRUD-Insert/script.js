const form = document.getElementById('registrationForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if(name.trim()=== '' || email.trim() === '' || password.trim() === ''){
        message.textContent = 'Todos os campos são obrigatorios.';
        return;
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
        message.textContent = 'Por favor, insira um email válido.';
        return;
    }
    if(password.lenghth < 6){
        message.textContent = 'A senha deve ter pelo menos 6 caracteres.'
    }
});