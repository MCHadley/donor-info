<?php
include('common/database.php');

$db = new Db();
$connect = $db->connect();

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$streetAddress = $_POST['streetAddress'];
$city = $_POST['city'];
$stateRegion = $_POST['stateRegion'];
$country = $_POST['country'];
$postalCode = $_POST['postalCode'];
$phone = $_POST['phone'];
$email = $_POST['Email'];
$amount = $_POST['amount'];
$contactPref = $_POST['contactPref'];
$paymentPref = $_POST['paymentPref'];
$donateFreq = $_POST['donateFreq'];
$comments = $_POST['comments'];

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    if (isset($_POST)) {
        // sanitize input
        $firstSan = $db->clean($firstName);
        $lastSan = $db->clean($lastName);
        $addSan = $db->clean($streetAddress);
        $citySan = $db->clean($city);
        $regSan = $db->clean($stateRegion);
        $countrySan = $db->clean($country);
        $postalSan = $db->clean($postalCode);
        $phoneSan = $db->clean($phone);
        $emailSan = $db->clean($email);
        $amountSan = $db->clean($amount);
        $contactSan = $db->clean($contactPref);
        $paymentSan = $db->clean($paymentPref);
        $donateSan = $db->clean($donateFreq);
        $commentsSan = $db->clean($comments);

        $queryIn = 'INSERT INTO donors(
            lastname,
            firstname,
            street_address,
            city,
            state_region,
            country,
            postal_code,
            phone,
            email,
            contact_pref,
            amount,
            pay_pref,
            pay_freq,
            comments
        )';

        $queryVals = "VALUES('" . $lastSan . "',
        '" . $firstSan . "',
        '" . $addSan . "',
        '" . $citySan . "',
        '" . $regSan . "',
        '" . $countrySan . "',
        '" . $postalSan . "',
        '" . $phoneSan . "',
        '" . $emailSan . "',
        '" . $contactSan . "',
        '" . $amountSan . "',
        '" . $paymentSan . "',
        '" . $donateSan . "',
        '" . $commentsSan . "'";
        $queryFinal = $queryIn . $queryVals . ');';
        $message = '<p>Thank you for your donation, someone will be contacting you shortly</p>';
        $db->insert($queryFinal, $message);
    }
} else {
    echo ('<p>The email you entered is not a valid email, please go back and enter a valid email</p>');
    echo ('<a href="index.html">Go back</a>');
}
