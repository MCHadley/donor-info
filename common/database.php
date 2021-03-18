<?php
// Database class
class Db
{
    // Database connection function
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

    public function select($query)
    {
        // connect to database
        $conn = $this->connect();
        // create query
        $result = mysqli_query($conn, $query);
        // run query result
        $row = mysqli_fetch_assoc($result);
        // return data
        return $row;
    }
}
