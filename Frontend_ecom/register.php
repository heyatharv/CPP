<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Ecommerce";

$conn = new mysqli($servername, $username, $password,$dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully<br>"; // Debugging message

$table='user';
$data=json_decode(file_get_contents('php://input'));
$username=$_POST['uname'];
$password=$_POST['password'];
$phone=$_POST['phno'];

$insert_sql = "INSERT INTO user (username,password,phone_no) VALUES ('$username', '$password', '$phone')";
if ($conn->query($insert_sql) === TRUE) {
    header("Location: home.html");
} else {
    echo "Error inserting register details: ";
}

?>