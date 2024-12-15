
function handleSubmit(event) {
    event.preventDefault();
  
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      service: document.getElementById('service').value,
      message: document.getElementById('message').value
    };
  
    fetch('https://script.google.com/macros/s/AKfycbwQYnrbiDmVvScYkLP-K0dPzQE9hMYEZsex2fYM0185Dr5gPUkRbemyR0hm8B9LaX-O/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
      alert('Form Submitted Successfully!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error submitting form.');
    });
  }
  