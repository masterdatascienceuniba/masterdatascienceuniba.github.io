<?php
/**
 * Ajax.
 * @author Provenza Vincenzo
 * @copyright 2012
 */

/** Includiamo la class PHPMailer */
include_once('PHPMailer.class.php');

/**La vostra e-mail, in cui ricevere l'email */
$email_oggetto = 'info@masterdatascience.it';

/**Il Nome del vostro oggetto web */
$nome_oggetto = '[MASTER DATA SCIENCE - INFOBOX]';

/** Recuperiamo i dati */
$nome = $_REQUEST['nome'];
$cognome = $_REQUEST['cognome'];
$email = $_REQUEST['email'];
$telefono = $_REQUEST['telefono'];
$referente = $_REQUEST['referente'];
$oggetto = $_REQUEST['oggetto'];
$messaggio = $_REQUEST['messaggio'];

//controlliamo i campi obbligatori
if(empty($nome) || empty($cognome) || empty($email) || empty($messaggio)) {
    echo '<p class="error">Compila tutti i campi</p>';
} else {

$msg = "<strong>Nome:</strong> $nome <br />";
$msg .= "<strong>Cognome:</strong> $cognome <br />";
$msg .= "<strong>E-mail:</strong> $email <br />";
$msg .= "<strong>Telefono:</strong> $telefono <br />";
$msg .= "<strong>Dove ci hai conosciuto:</strong> $referente <br />";
$msg .= "<strong>Oggetto:</strong> $oggetto <br />";
$msg .= "<strong>Messaggio:</strong> $messaggio <br />";

/** Istanziamo la classe PHPMailer */
$mail = new PHPMailer();
$mail->From = $email;
$mail->FromName = ''.$nome.' '.$cognome.'';
$mail->AddAddress($email_oggetto);
$mail->IsHTML(true);
$mail->CharSet = 'UTF-8';
$mail->Subject = 'Nuova E-mail Da '.$nome_oggetto;
$mail->Body = $msg;
if($mail->Send()) echo '<b><p class="validate" style="color:limegreen; font-size:16px;">E-mail spedita in modo corretto!</p></b>';

}
?>
