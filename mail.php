<?php

$recepient = "wl@rasmart.io";

$sitename = "Rasmart";

$name = trim($_POST["user_name"]);
$email = trim($_POST["user_email"]);
$amount = trim($_POST["user_amount"]);
$message = "Name: $name \nE-mail: $email \nAmount: $amount";

$pagetitle = "Новая заявка Whitelist с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");