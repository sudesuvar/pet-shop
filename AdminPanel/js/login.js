      document.addEventListener("DOMContentLoaded", function () {
        // Access the form and the inputs
        const form = document.querySelector("form");
        const emailInput = document.querySelector("input[name='email']");
        const passwordInput = document.querySelector("input[name='password']");

        // Add event listener for form submission
        form.addEventListener("submit", function (e) {
          e.preventDefault(); // Prevent form submission for validation

          // Clear any previous error messages
          clearErrorMessages();

          let isValid = true;

          // Validate email
          if (!isValidEmail(emailInput.value)) {
            showError(emailInput, "Please enter a valid email address.");
            isValid = false;
          }

          // Validate password
          if (passwordInput.value.trim() === "") {
            showError(passwordInput, "Password is required.");
            isValid = false;
          }

          // Check if email and password match predefined credentials
          if (isValid) {
            if (
              emailInput.value === "sude@gmail.com" &&
              passwordInput.value === "123456"
            ) {
              // Redirect to index.html if credentials are correct
              window.location.href = "index.html";
            } else {
              // Show error if credentials are incorrect
              showError(passwordInput, "Incorrect email or password.");
            }
          }
        });

        // Function to validate email format
        function isValidEmail(email) {
          const emailPattern =
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
          return emailPattern.test(email);
        }

        // Function to show error messages
        function showError(input, message) {
          const errorElement = document.createElement("div");
          errorElement.classList.add("uk-text-danger", "uk-margin-small-top");
          errorElement.textContent = message;
          input.parentElement.appendChild(errorElement);
        }

        // Function to clear any error messages
        function clearErrorMessages() {
          const errorMessages = document.querySelectorAll(".uk-text-danger");
          errorMessages.forEach((error) => error.remove());
        }
      });