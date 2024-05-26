<?php
$mail = $_POST['email'];
$password = $_POST['mdp'];
$conn = mysqli_connect('localhost:3306', 'root', 'root', 'react');
$req = "Select mail,password from user where mail='$mail' and password='$password' ;";
$res = mysqli_query($conn, $req);
$s = mysqli_num_rows($res);
?>