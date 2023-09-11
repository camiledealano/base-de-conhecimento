function openUserRegister() {
    window.location.href = "/cadastro-usuario";
}

function openHomePage() {
    window.location.href = "/home";
}

function authenticate() {
    validateInputsLogin();

}

function validateInputsLogin() {
    const requestBody = {
        username: document.querySelector('#input-usuario').value,
        password: document.querySelector('#input-senha').value
    };

    fetch("http://localhost:9000/login", {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => {
        if (response.status === 200) {
           window.location.href = "/home";
        } else {
            window.location.href = "/login";
        }
    });

    // var form = document.querySelector('.user-login');
    // if (!form.checkValidity()) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     form.classList.add('was-validated');
    // }

    //validar inputs de login pra ver se nao tao vazios
}
