const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', () => {
  const savedData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  Object.keys(savedData).forEach(key => {
    form.elements[key].value = savedData[key] || '';
    formData[key] = savedData[key] || '';
  });
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
