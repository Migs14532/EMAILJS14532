 // Initialize EmailJS with your user ID
 (function(){
    emailjs.init("ekpgtPW3xJLqbhy-X");
})();


// Function to send email using EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Send the email using the form data
    console.log(this)
    emailjs.sendForm('service_q0ph04k','template_3bs11sn', this)
        .then(function() {
            alert('Message Sent Successfully!');
        }, function(error) {
            alert('Failed to send the message: ' + JSON.stringify(error));
        });
});
