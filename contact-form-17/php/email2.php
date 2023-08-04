<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';





//Import PHPMailer class into the global namespace


$msg = '';
//Don't run this unless we're handling a form submission
if (array_key_exists('email', $_POST)) {
    date_default_timezone_set('Etc/UTC');

   

    //Create a new PHPMailer instance
    $phpmailer = new PHPMailer();
    
    $phpmailer->isSMTP();
    $phpmailer->Host = 'smtp.office365.com';
    $phpmailer->SMTPAuth = true;
    $phpmailer->AuthType = 'LOGIN';
    $phpmailer->Port = 587;
    $phpmailer->Username = 'phpsecondary@outlook.com';
    $phpmailer->Password = 'Boca159951!';
    $phpmailer->SMTPSecure = 'tls';

    
    $phpmailer->setFrom('phpsecondary@outlook.com', 'Presupuesto nuevo por pagina web');
   
    // contacto@TusCajasNavidenas.com.ar
   
        $phpmailer->addAddress('contacto@TusCajasNavidenas.com.ar');
    
    
    if ($phpmailer->addReplyTo($_POST['email'], $_POST['name'])) {
        $phpmailer->Subject = 'PHPMailer contact form';
        //Keep it simple - don't use HTML
        $phpmailer->isHTML(false);
        //simple message body
        $phpmailer->Body = <<<EOT
Email: {$_POST['email']}
Nombre: {$_POST['name']}
Telefono: {$_POST['phone']}
Empresa: {$_POST['company']}
Message: {$_POST['message']}
EOT;
        //Send the message, check for errors
        if (!$phpmailer->send()) {
            
            echo 'Mailer error: ' . $mail->ErrorInfo;
            $msg = 'Hubo un error, contactese a traves de Whatsapp o por mail.';
        } else {
            $msg = 'Mensaje enviado!.';
        }
    } else {
        $msg = 'Email invalido, chequee el formato de su mail.';
    }
}
?>

<html lang="es">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<link href='https://fonts.googleapis.com/css?family=Lato:300,400|Montserrat:700' rel='stylesheet' type='text/css'>
	<style>
		@import url(//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.1/normalize.min.css);
		@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css);
	</style>
	<link rel="stylesheet" href="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/default_thank_you.css">
    
	<script src="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/jquery-1.9.1.min.js"></script>
	<script src="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/html5shiv.js"></script>
</head>
<body>
	<header class="site-header" id="header">
		<h1 class="site-header__title" data-lead-id="site-header-title">Gracias!</h1>
	</header>

	<div class="main-content">
		<i class="fa fa-check main-content__checkmark" id="checkmark"></i>
        <?php if (!empty($msg)) {
    echo "<h2>$msg</h2>";
} ?>
		<p class="main-content__body" data-lead-id="main-content-body">En la brevedad nos estaremos contactando con usted!</p>
	</div>

	<footer class="site-footer" id="footer">
		<p class="site-footer__fineprint" id="fineprint">© 2022 Tus cajas navideñas</p>
	</footer>
</body>
</html>
