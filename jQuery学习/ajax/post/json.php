<?php
    header("Content-Type:text/html;charset=utf-8");

    $data = file_get_contents('person.txt');

    echo $data;
?>