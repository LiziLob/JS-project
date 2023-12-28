function authorize() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    var predefinedUsername = 'demo';
    var predefinedPassword = 'demo';

    if (username === predefinedUsername && password === predefinedPassword) {
        alert('Login successful!');
    
    } else {
        alert('Invalid credentials. Please try again.');
    }
}
