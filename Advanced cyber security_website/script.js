document.addEventListener('DOMContentLoaded', function() {
  const passwordField = document.getElementById('password');
  const passwordStrength = document.getElementById('passwordStrength');
  const captcha = document.getElementById('captcha');
  const captchaInput = document.getElementById('captchaInput');

  function generateCaptcha() {
      const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
      let captchaText = '';
      for (let i = 0; i < 6; i++) {
          captchaText += symbols.charAt(Math.floor(Math.random() * symbols.length));
      }
      captcha.textContent = captchaText;
  }

  function checkPasswordStrength() {
      const password = passwordField.value;
      let strength = 'Weak';

      if (password.length >= 8) {
          if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[@$!%*?&]/.test(password)) {
              strength = 'Strong';
          } else {
              strength = 'Medium';
          }
      }

      passwordStrength.textContent = `Password Strength: ${strength}`;
      passwordStrength.style.color = strength === 'Strong' ? 'green' : 'red';
  }

  passwordField.addEventListener('input', checkPasswordStrength);
  generateCaptcha();
});
