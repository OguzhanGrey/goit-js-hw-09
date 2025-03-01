const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const localStorageKey = "feedback-form-state";

document.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email || "";
    messageInput.value = message || "";
  }
});

form.addEventListener("input", () => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailInput.value.trim() || !messageInput.value.trim()) {
    alert("Lütfen tüm alanları doldurun.");
    return;
  }

  console.log({
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  });

  form.reset();
  localStorage.removeItem(localStorageKey);
});
