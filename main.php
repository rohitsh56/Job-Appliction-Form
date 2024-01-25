<?php
// Replace these values with your actual database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pf";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form data
$name = $_POST['name'];
$number = $_POST['number'];
$email = $_POST['email'];
$profile = $_POST['profile'];
$skills = $_POST['skills'];
$location = $_POST['location'];

// File handling for resume attachment
$targetDir = "uploads/";
$targetFile = $targetDir . basename($_FILES["resume"]["name"]);

if (move_uploaded_file($_FILES["resume"]["tmp_name"], $targetFile)) {
    echo "The file ". htmlspecialchars( basename( $_FILES["resume"]["name"])). " has been uploaded.";
} else {
    echo "Sorry, there was an error uploading your file.";
}

// Insert data into database
$sql = "INSERT INTO pf_table (name, number, email, profile, skills, location, resume_path) VALUES ('$name', '$number', '$email', '$profile', '$skills', '$location', '$targetFile')";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
