<?php
// header('Access-Control-Allow-Origin: *');
// header('Content-Type: application/json');
// header('Access-Control-Allow-Methods: GET');
// header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
// include_once'./config/database.php';
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

$table='cart';
$data=json_decode(file_get_contents('php://input'));
$product_id=$_POST['product'];
$quantity=$_POST['quantity'];
$user_id=$_POST['user'];
echo $product_id;
$insert_sql = "INSERT INTO cart (product,quantity,user) VALUES ('$product_id', '$quantity', '$user_id')";
if ($conn->query($insert_sql) === TRUE) {
    header("Location: home.html"); // Debugging message
} else {
    echo "Error inserting repo details: ";
}

// $query='select * from ' .$table. '';
// $stmt=$pdo->prepare($query);
// if($stmt->execute())
// {
//     $product=$stmt->fetchAll(PDO::FETCH_OBJ);
//     echo json_encode(['cart'=>$product]);
// }
// else
// {
//     $response['message']='error occured';
//     echo json_encode($response);
// }
?>