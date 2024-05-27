document.querySelector('form').addEventListener('submit', function(event) {
    var username = document.getElementById('loginUser').value;
    var password = document.getElementById('loginPassword').value;

    if (username === '' ||  password === '') {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios.',
    });
    event.preventDefault();
    return;
}
});

if (new URLSearchParams(window.location.search).has('login')) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Los datos ingresados son incorrectos.',
    });
}