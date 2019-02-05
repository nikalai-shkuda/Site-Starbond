<?php

$recepient = "nikolayshkuda@mail.ru";
$sitename = "Starbond.by";

$name = trim($_POST["contactName"]);
$phone = trim($_POST["contactTelephone"]);
$text = trim($_POST["contactMessage"]);
$message = "Имя: $name \nТелефон: $phone \nСообщение: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


?>