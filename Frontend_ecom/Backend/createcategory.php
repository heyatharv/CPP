<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once'./config/database.php';
$table='category';
$data=json_decode(file_get_contents("php://input"));
$name1=$data->name;
$query='insert into '.$table .'(name) values (:name)';
$stmt=$pdo->prepare($query);
$stmt->bindParam(':name',$name1);
if($stmt->execute())
{
    $response['message']='Category created';
    echo json_encode($response);
}
else
{
    $response['message']='Error occured';
    echo json_encode($response);
}
?>