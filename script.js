(function () {
    emailjs.init("ekpgtPW3xJLqbhy-X");
    console.log("EmailJS initialized");
  })();
  
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("Form submitted");
  
      emailjs.sendForm("service_q0ph04k", "template_3bs11sn", this).then(
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