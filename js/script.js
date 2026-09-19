// Select the contact form and the message area
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

// Run this code when the user submits the form
contactForm.addEventListener("submit", function (event) {
  // Prevent the page from refreshing
  event.preventDefault();

  // Get the name entered by the user
  const name = document.getElementById("name").value;

  // Display a confirmation message
  formMessage.textContent =
    "Thank you, " + name + "! Your message has been received.";

  // Clear the form fields
  contactForm.reset();
});