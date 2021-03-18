<?php

class Db
{
    public function connect()
    {
        static $connection;
        if (!isset($connection)) {
            $config = parse_ini_file('./config.ini');
            $connection = mysqli_connect('localhost', $config['username'], $config['password'], $config['dbname']);
        }
        if ($connection === false) {
            echo ("Could not connect to the database");
            return mysqli_connect_error();
        } else {
            return $connection;
        }
    }
}
