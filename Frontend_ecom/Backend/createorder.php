<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
include_once'./config/database.php';
$table='orders';
$data=json_decode(file_get_contents('php://input'));
$order_summary=$data->order_summary;
$user=$data->user;
$status='placed';
$query='insert into '.$table.' (order_summary,user,status) values (:order_summary,:user,:status)';
$stmt=$pdo->prepare($query);
$stmt->bindParam(':order_summary',$order_summary);
 $stmt->bindParam(':user',$user);
 $stmt->bindParam(':status',$status);
 if($stmt->execute())
 {
    $response['message']='order placed';
    echo json_encode($response);
 }
 else
 {
    $response['message']='error occured';
    echo json_encode($response);
 }
?>


