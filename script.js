document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".numbers");

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      button.classList.toggle("active");

      const display = document.getElementById("display");
      if (display) {
        display.textContent = 'You clicked: ${button.textContent}';

      }
    })
  })
})

document.addEventListener("DOMContentLoaded", function() {
  const submitButton = docuement.querySelectorAll(".submit-button")

  submitButtons.forEach(button => {
    button.addEventListener("click", function() {
      window.location.href = "thankyoupage.html";
    })
  })
})



