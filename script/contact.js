$(document).ready(function () {

    var firstNameError= true,
        lastNameError= true,
        emailError = true,
        phoneError = true,
        messageError= true

    // Email Regex Pattern
    const regex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');

    // Form validation
    $('input, textarea').blur(function () {

        console.log('Validator triggered.')

        // First Name
        if (this.id === 'firstname') {
            if ($(this).val().length === 0) {
                setErrorClass($(this), "Vorname darf nicht leer sein");
                firstNameError = true;
            } else if ($(this).val().length > 0 && $(this).val().length < 2) {
                setErrorClass($(this), "Mindestlänge 2 Zeichen");
                firstNameError = true;
            } else {
                setSuccessClass($(this));
                console.log($(this).val())
                console.log(Number.isInteger($(this).val()))
                firstNameError = false;
            }
        }

        // Last Name
        if (this.id === 'lastname') {
            if ($(this).val().length === 0) {
                setErrorClass($(this), "Nachname darf nicht leer sein");
                lastNameError = true;
            } else if ($(this).val().length > 0 && $(this).val().length < 2) {
                setErrorClass($(this), "Mindestlänge 2 Zeichen");
                lastNameError = true;
            } else {
                setSuccessClass($(this));
                console.log($(this).val())
                console.log(Number.isInteger($(this).val()))
                lastNameError = false;
            }
        }

        // Email
        if (this.id === 'email') {
            if ($(this).val().length == '') {
                setErrorClass($(this), "E-Mail darf nicht leer sein");
                emailError = true;
            } else if (!regex.test($(this).val())) {
                setErrorClass($(this), "Keine gültige E-Mail");
                emailError = true;
            } else {
                setSuccessClass($(this));
                emailError = false;
            }
        }

        // Phone
        if (this.id === 'phone') {
            if ($(this).val().length > 0 && $(this).val().length < 7) {
                setErrorClass($(this), "Mindestlänge 7 Zeichen");
                phoneError = true;
            } else {
                setSuccessClass($(this));
                console.log($(this).val())
                console.log(Number.isInteger($(this).val()))
                phoneError = false;
            }
        }

        // Message
        if (this.id === 'message') {
            if ($(this).val().length === 0) {
                setErrorClass($(this), "Nachricht darf nicht leer sein");
                messageError = true;
            } else {
                setSuccessClass($(this));
                messageError = false;
            }
        }

        // label effect
        if ($(this).val().length > 0) {
            $(this).siblings('label').addClass('active');
        } else {
            $(this).siblings('label').removeClass('active');
        }
    });


    // Reload page
    $('a.profile').on('click', function () {
        location.reload(true);
    });

    // Set Success Class
    function setSuccessClass(e) {
        e.siblings('.error').text('').fadeOut();
        e.removeClass('hasError').addClass('hasSuccess');
    }

    // Set Error Class
    function setErrorClass(e, f) {
        e.siblings('span.error').text(f).fadeIn();
        e.removeClass('hasSuccess').addClass('hasError');
    }

});