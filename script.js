// Add your JavaScript code here
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var dob = document.getElementById("dob").value;
    var startTime = document.getElementById("startTime").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var parentName = document.getElementById("parentName").value;
    var parentContact = document.getElementById("parentContact").value;
  
    // Create object to store form data
    var formData = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      dob: dob,
      startTime: startTime,
      contactNumber: contactNumber,
      parentName: parentName,
      parentContact: parentContact
    };
  
    // Convert the form data to JSON format
    var jsonData = JSON.stringify(formData);
  
    // Send form data to the server (You can use AJAX or other methods to send the data)
    // For simplicity, we'll assume the form data is sent to register.php using the POST method
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "register.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Handle the server response if needed
        console.log(xhr.responseText);
      }
    };
    xhr.send(jsonData);
  
    // Clear form fields
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("startTime").value = "";
    document.getElementById("contactNumber").value = "";
    document.getElementById("parentName").value = "";
    document.getElementById("parentContact").value = "";
  });
  