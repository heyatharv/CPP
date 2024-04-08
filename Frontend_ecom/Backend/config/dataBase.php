<?php
 define('DB_SERVER','localhost');
 define('DB_NAME','Ecommerce');
 define('DB_PASSWORD','');
 define ('DB_USER','root');
 try
 {
    $pdo=new PDO("mysql:host=".DB_SERVER.";port=3306;dbname=".DB_NAME,DB_USER,DB_PASSWORD);
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
 
 }
 catch(PDOException $e)
 {
    die("ERROR:Could not connect".$e->getMessage());
 }
 
?>