// // Register Form Submission
// document.getElementById('register-form').addEventListener('submit', async function (e) {
//     e.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
  
//     const res = await fetch('/api/register', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });
  
//     if (res.ok) {
//       alert('Registration successful. Check your email to verify.');
//       window.location.href = 'login.html';
//     } else {
//       alert('Registration failed');
//     }
//   });
  
//   // Login Form Submission
//   document.getElementById('login-form').addEventListener('submit', async function (e) {
//     e.preventDefault();
//     const email = document.getElementById('login-email').value;
//     const password = document.getElementById('login-password').value;
  
//     const res = await fetch('/api/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });
  
//     if (res.ok) {
//       alert('Login successful');
//       window.location.href = 'dashboard.html';
//     } else {
//       alert('Login failed');
//     }
//   });
  
//   // Pizza Customization Form
//   document.getElementById('pizza-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const base = document.getElementById('base').value;
//     const sauce = document.getElementById('sauce').value;
//     const cheese = document.getElementById('cheese').value;
//     const veggies = Array.from(document.querySelectorAll('input[name="veggies"]:checked')).map(el => el.value);
  
//     console.log({ base, sauce, cheese, veggies });
  
//     alert('Pizza customization submitted. Proceed to payment.');
//   });
  
//   // Razorpay Payment
//   document.getElementById('pay-button').addEventListener('click', async function () {
//     const res = await fetch('/api/createOrder', { method: 'POST' });
//     const order = await res.json();
  
//     const options = {
//       key: 'RAZORPAY_KEY_ID', // Replace with your Razorpay key
T
// Handle pizza order submission
// Handle pizza order submission
// Handle pizza order submission
const pizzaForm = document.getElementById('pizzaForm');
if (pizzaForm) {
  pizzaForm.addEventListener('submit', function(e) {
    e.preventDefault();
        alert('Pizza order submitted successfully!');

        // Simulate redirect to Razorpay payment page (in real scenario, integrate Razorpay)
        window.location.href = "payment.html";
      });
    }
    
    // Handle admin email notification (for low inventory threshold)
    const sendNotificationButton = document.querySelector('.btn');
    if (sendNotificationButton) {
      sendNotificationButton.addEventListener('click', function() {
        alert('Email notification sent to admin for low stock!');
      });
    }
    
    