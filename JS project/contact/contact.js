function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Simple form validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

    // You can perform further actions like sending the form data to a server here

    // For this example, let's just show an alert
    alert('Form submitted successfully:\n\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
}
