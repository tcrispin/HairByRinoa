/********f************
    
    Project 4
    Name: TJ Crispin
    Date: 12/13/2023
    Description: Project 4

********************/

document.getElementById('contactForm').addEventListener('submit', function (event) {
    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');
    var errorMessage = document.getElementById('error-message');

    if (name.validity.valueMissing || phone.validity.valueMissing || email.validity.valueMissing) {
        errorMessage.textContent = 'Please fill out all fields.';
        errorMessage.style.display = 'block';
        event.preventDefault();
    } else if (!/^\d{10}$/.test(phone.value)) {
        errorMessage.textContent = 'Please enter a valid 10-digit phone number.';
        errorMessage.style.display = 'block';
        event.preventDefault();
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        event.preventDefault();
    } else {
        errorMessage.style.display = 'none';
    }
});

document.getElementById('contactForm').addEventListener('focusin', function (event) {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        event.target.style.backgroundColor = '#e0e0e0';
        event.target.style.color = '#333';
    }
});

document.getElementById('contactForm').addEventListener('focusout', function (event) {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        event.target.style.backgroundColor = '';
        event.target.style.color = '';
    }
});
