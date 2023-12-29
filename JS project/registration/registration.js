function validateSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

   
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format. Please enter a valid email address.');
        return;
    }

    
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please enter matching passwords.');
        return;
    }

    var passwordStrength = getPasswordStrength(password);

   
    switch (passwordStrength) {
        case 'weak':
            alert('Weak password. Password should contain only English alphabet characters.');
            break;
        case 'average':
            alert('Average password. Password should contain English alphabet characters and numbers.');
            break;
        case 'strong':
            alert('Strong password. Password should contain uppercase and lowercase characters of the English alphabet, as well as numbers.');
            break;
        default:
            alert('Invalid password strength.');
    }
}

function getPasswordStrength(password) {
    var hasAlphabetOnly = /^[a-zA-Z]+$/.test(password);
    var hasAlphabetAndNumbers = /^[a-zA-Z0-9]+$/.test(password);
    var hasUppercaseLowercaseNumbers = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password);

    if (hasUppercaseLowercaseNumbers) {
        return 'strong';
    } else if (hasAlphabetAndNumbers) {
        return 'average';
    } else if (hasAlphabetOnly) {
        return 'weak';
    } else {
        return 'unknown';
    }
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', autoDisplay: false }, 'google_translate_element');
}
function translatePage() {
    google.translate.translatePage('de');
}

