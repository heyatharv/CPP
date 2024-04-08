<?php
 header('Access-Control-Allow-Origin: *');
 header('Content-Type: application/json');
 header('Access-Control-Allow-Methods: POST');
 header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
 include_once'./config/database.php';
 $table='product';
 $data=json_decode(file_get_contents('php://input'));
 $name=$data->name;
 $price=$data->price;
 $category=$data->category;
 $query='insert into '.$table.' (name,price,category) values (:name,:price,:category)';
 $stmt=$pdo->prepare($query);
 $stmt->bindParam(':name',$name);
 $stmt->bindParam(':price',$price);
 $stmt->bindParam(':category',$category);
 if($stmt->execute())
 {
    $response['message']='Product';
    echo json_encode($response);
 }
 else
 {
    $response['message']='error occured';
    echo json_encode($response);
 }

?>