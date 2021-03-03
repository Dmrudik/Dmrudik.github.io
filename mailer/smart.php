<?php 

$name = $_POST['name'];
$taxt = $_POST['text'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'dmrudiktest@gmail.com';                 // Наш логин
$mail->Password = 'Dm123123445';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('dmrudiktest@gmail.com', 'Pulse');   // От кого письмо 
$mail->addAddress('dmrudikg@gmail.com');     // Add a recipient


$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	E-mail: ' . $email . '<br>
	Сообщение: ' . $text . '';

	if(!$mail->send()) {
		return false;
	} else {
		return true;
	}
?>