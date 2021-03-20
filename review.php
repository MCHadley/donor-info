<?php include('common/header.php'); ?>

<h1>Wikimedia Donation Form</h1>
<h3>Please review your information</h3>

<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$streetAdd  = $_POST['streetAddress'];
$city = $_POST['city'];
$stateReg = $_POST['stateRegion'];
$country = $_POST['country'];
$postalCode = $_POST['postalCode'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$contactPref = $_POST['contactPref'];
$paymentPref = $_POST['paymentPref'];
$donateFreq = $_POST['donateFreq'];
$comments = $_POST['comments'];
printf(
    '<table>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Street Address</th>
    <th>City</th>
    <th>State/Region</th>
    <th>Country</th>
    <th>Postal Code</th>
    <th>Phone Number</th>
    <th>Email</th>
    <th>Preferred Form of Contact</th>
    <th>Preferred Form of Payment</th>
    <th>Frequency of Donation</th>
    <th>Comments</th>
    <tr>
    <td>%s</td>
    <td>%s</td>
    <td>%s</td>
    <td>%s</td>
    <td>%s</td>
    <td>%s</td>
    <td>%s</td>
    <td>%s</td>
    <td>%s</td>
    <td>%s</td>
    <td>%s</td>
    <td>%s</td>
    <td>%s</td>
    </tr>
    </table>',
    $firstName,
    $lastName,
    $streetAdd,
    $city,
    $stateReg,
    $country,
    $postalCode,
    $phone,
    $email,
    $contactPref,
    $paymentPref,
    $donateFreq,
    $comments,
);
echo ("<button type='submit' value='submit' id='finalSubmit'>Submit</button>");
echo ("<button type='cancel' value='cancel' id='cancel'>Cancel</button>");
include('common/footer.php');
