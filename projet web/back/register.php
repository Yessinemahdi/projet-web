<?php
$mail = $_POST['email'];
$password = $_POST['password'];
$user = $_POST['username'];
$conn2 = mysqli_connect('localhost:3306', 'root', 'root', 'react');
$req2 = "insert into creer values('$user','$password','$mail') ;";
$res2 = mysqli_query($conn2, $req2);
$s = mysqli_num_rows($res2);
?>