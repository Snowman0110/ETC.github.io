<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get the form data
  $data = json_decode(file_get_contents('php://input'), true);

  // Prepare the email content
  $subject = "New Registration";
  $message = "A new registration has been submitted.\n\n";
  $message .= "First Name: " . $data['firstName'] . "\n";
  $message .= "Last Name: " . $data['lastName'] . "\n";
  $message .= "Address: " . $data['address'] . "\n";
  $message .= "Date of Birth: " . $data['dob'] . "\n";
  $message .= "Starting Time: " . $data['startTime'] . "\n";
  $message .= "Contact Number: " . $data['contactNumber'] . "\n";
  $message .= "Parent's Name: " . $data['parentName'] . "\n";
  $message .= "Parent's Contact Number: " . $data['parentContact'] . "\n";

  // Send the email to the admin
  $to = "snowygot36@gmail.com";
  $headers = "From: noreply@example.com";

  // Uncomment the line below to send the email
  // mail($to, $subject, $message, $headers);

  // Send a response back to the client
  $response = array('status' => 'success', 'message' => 'Registration submitted successfully.');
  echo json_encode($response);
}
?>
