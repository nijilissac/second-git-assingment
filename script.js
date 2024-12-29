$(document).ready(function () {
    $('#accountForm').on('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        
        const name = $('#name').val();
        if (!name || name.length < 3 || name.length > 50) {
            isValid = false;
            $('#nameError').text('Name must be between 3 and 50 characters.');
        } else {
            $('#nameError').text('');
        }

       
        const email = $('#email').val();
        if (!email) {
            isValid = false;
            $('#emailError').text('Email is required.');
        } else {
            $('#emailError').text('');
        }

        
        const phone = $('#phone').val();
        if (!phone || phone.length < 10 || phone.length > 14) {
            isValid = false;
            $('#phoneError').text('Phone number must be between 10 and 14 characters.');
        } else {
            $('#phoneError').text('');
        }

       
        const age = parseInt($('#age').val(), 10);
        if (!age || age < 18 || age > 120) {
            isValid = false;
            $('#ageError').text('Age must be between 18 and 120.');
        } else {
            $('#ageError').text('');
        }

       
        const gender = $('#gender').val();
        if (!gender || gender.length < 4 || gender.length > 15) {
            isValid = false;
            $('#genderError').text('Gender must be between 4 and 15 characters.');
        } else {
            $('#genderError').text('');
        }

        
        const address = $('#address').val();
        if (address && address.length > 50) {
            isValid = false;
            $('#addressError').text('Address must not exceed 50 characters.');
        } else {
            $('#addressError').text('');
        }

       
        if (isValid) {
            alert('Form submitted successfully!');
            
        }
    });
});
