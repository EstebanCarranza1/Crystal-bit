<?php
$baseFromJavascript = $_POST["base64"];

// remove the part that we don't need from the provided image and decode it
$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $baseFromJavascript));

$filepath = "/image.png"; // or image.jpg

// Save the image in a defined path
move_uploaded_file($filepath,$data);
echo "ok"
?>