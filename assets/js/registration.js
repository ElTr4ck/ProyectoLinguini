document.querySelector('form').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var correoSignup = document.getElementById('correoSignup').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (username === '' || correoSignup === '' || password === '' || confirmPassword === '') {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios.',
    });
    event.preventDefault();
    return;
}

    if (password !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Las contraseñas no coinciden.',
        });
        event.preventDefault();
        return;
    }

    var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*+])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número, un caracter especial y una letra minúscula.',
        });
        event.preventDefault();
        return;
    }
});

if (new URLSearchParams(window.location.search).has('signup')) {
    Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Nuevo registro creado exitosamente.',
    });
}