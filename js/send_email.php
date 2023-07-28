<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Customize the email body as per your requirement
    $email_body = "Name: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\nMessage: $message";

    // Send the email
    mail("lalitsikarwar2001@gmail.com", "New Contact Form Submission", $email_body);

    // Provide feedback to the user
    echo "Thank you for contacting me! Your message has been sent.";
}
?>
