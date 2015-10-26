<?php

include_once '../Models/User.php';

$user = User::Get();
my_print($user);
