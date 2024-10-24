(function () {
    emailjs.init("ekpgtPW3xJLqbhy-X");
    console.log("EmailJS initialized");
  })();
  
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("Form submitted");
  
      emailjs.sendForm("service_j7zvhr1", "template_mhz2yqj", this).then(
        function () {
          console.log("Email sent successfully");
          alert("Message Sent Successfully!");
        },
        function (error) {
          console.error("Error sending email:", error);
          alert("Failed to send the message: " + JSON.stringify(error));
        }
      );
    });