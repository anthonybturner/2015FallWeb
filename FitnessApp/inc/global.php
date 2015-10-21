<?php

    $servername = getenv('IP');
    $username = getenv('C9_USER');
    $password = "";
    $database = "FitnessApp";
    $dbport = 3306;

    $connection = mysqli_connect($servername, $username, $password, $database, $dbport)or die(mysql_error());

   

    //And now to perform a simple query to make sure it's working
    $query = "SELECT * FROM FitnessApp_Users";
    $result = mysqli_query($connection, $query);
    
    while ($row = mysqli_fetch_assoc($result)) {
        echo "The ID is: " . $row['id'] . " and the Username is: " . $row['Name'];
    }
  

?>

