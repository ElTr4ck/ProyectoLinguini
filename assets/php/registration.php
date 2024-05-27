<?php
$servername = "localhost";
$username = "root"; // default username of PHPMyAdmin
$password = ""; // default password of PHPMyAdmin
$dbname = "a_la_linguini"; // name of the database

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $username = $_GET['username'];
    $correoSignup = $_GET['correoSignup'];
    $password = $_GET['password'];

    $sql = "INSERT INTO Usuario (Username, Correo, Contraseña)
    VALUES (:username, :correoSignup, :password)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':correoSignup', $correoSignup);
    $stmt->bindParam(':password', $password);
    $stmt->execute();

    header('Location: ../../pages/login.html?signup=success');
    
} catch(PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>