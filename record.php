<?php

$con = mysqli_connect("localhost","","","");

// Check connection
if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

if(!empty($_POST['latitude']) && !empty($_POST['longitude'])){

    $ip = $_SERVER['REMOTE_ADDR'];
    $latitude = $con->real_escape_string($_POST['latitude']);
    $longitude = $con->real_escape_string($_POST['longitude']);

    $sql = "INSERT INTO locFetch (ip, latitude, longitude) VALUES ('$ip', '$latitude', '$longitude')";

    if ($con->query($sql) === TRUE) {
        echo json_encode(array("New record created successfully"));
        http_response_code(200);
    } else {
        echo "Error: " . $sql . "<br>" . $con->error;
        http_response_code(400);
    }

}else{
    echo('Unknown page.');
    http_response_code(404);
}

$con->close();
exit();
?>