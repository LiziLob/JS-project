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
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', autoDisplay: false }, 'google_translate_element');
}
function translatePage() {
    google.translate.translatePage('de');
}
