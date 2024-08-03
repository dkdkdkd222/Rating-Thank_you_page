document.addEventListener('DOMContentLoaded', () => {
  // Get the query parameters from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const selectedCount = urlParams.get('selected') || 0; // Default to 0 if no 'selected' param

  // Get the message element
  const messageElement = document.querySelector('.thank-you-message');

  // Create the thank you message
  const message = `Thank you for your feedback! You selected ${selectedCount} out of 5.`;

  // Display the message
  if (messageElement) {
    messageElement.textContent = message;
  }
});
