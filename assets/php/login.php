<?php

function validar_usuario($username, $password) {
    // Configuración de la base de datos
    $host = 'localhost';
    $db   = 'a_la_linguini';
    $user = 'root';
    $pass = '';
    $charset = 'utf8mb4';

    // Crea una nueva conexión PDO
    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $pdo = new PDO($dsn, $user, $pass);

    // Prepara y ejecuta la consulta
    $stmt = $pdo->prepare('SELECT * FROM usuario WHERE Username = ?');
    $stmt->execute([$username]);

    // Comprueba si el usuario existe
    if ($stmt->rowCount() == 0) {
        // Prepara y ejecuta la consulta probando con el correo
        $stmt = $pdo->prepare('SELECT * FROM usuario WHERE Correo = ?');
        $stmt->execute([$username]);

        if ($stmt->rowCount() == 0) {
            return false;
        }

        // Comprueba la contraseña
        $correoLogin = $stmt->fetch();
        if ($password == $correoLogin['Contraseña']) {
            return true;
        } else {
            return false;
        }
    }

    // Comprueba la contraseña
    $user = $stmt->fetch();
    if ($password == $user['Contraseña']) {
        return true;
    } else {
        return false;
    }
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $username = $_GET['loginUser'];
    $password = $_GET['loginPassword'];

    // Asegúrate de validar y/o sanear tus entradas

    if (validar_usuario($username, $password)) {
        // Inicio de sesión exitoso
        echo 'Inicio de sesión exitoso';
        header('Location: ../../index.html?login=success');
        
    } else {
        // Errores incorrectos
        header('Location: ../../pages/login.html?login=failed');
    }
}
?>