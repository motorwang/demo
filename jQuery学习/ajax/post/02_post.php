<?php

    // 解决乱码
    header("Content-Type:text/html;charset=utf-8");
    
    $username = $_POST["username"];
    $password = $_POST["password"];

    if($username == "xiaozhang" && $password == "123") {
        echo "登录对了";
    } else {
        echo "您的账号或者密码有误";
    }
?>