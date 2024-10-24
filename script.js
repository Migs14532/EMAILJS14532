(function () {
  // Initialize EmailJS with your user ID
  emailjs.init("OW5mclnR7xtXXZpaO");
  console.log("EmailJS initialized");
})();

document
.getElementById("contact-form")
.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  console.log("Form submitted");

  // Use EmailJS to send the form data
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
