<?php

if(isset($_POST['user_email']) and $_POST['user_email']!=''){

$user_email=$_POST['user_email'];

function valid_email($str) {
    return (!preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $str)) ? FALSE : TRUE;
    }
    
    if(!valid_email($user_email)){
    $message="Invalid email address.";
    }else{
    $message="Valid email address.";
    }

    echo $message;

}

?>