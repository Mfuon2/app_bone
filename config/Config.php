<?php
$host = "localhost";
$db = "workdone";
$user = "root";
$pass = "pencil";

$conn = new mysqli($host,$user,$pass,$db);

if(!$conn){
    die('Error Occurred connecting to the database');
}  else {
    echo 'Connection Sussesfull';
}