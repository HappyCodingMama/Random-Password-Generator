const alertBox = document.querySelector('.alertBox');



function getPassword() {
      let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
      let passwordLength = 16;
      let password = "";

      for (let i = 0; i < passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
      }
      document.getElementById('password').value = password;
      alertBox.innerHTML = `New Password Copied : ${password}`
}

function copyPassword() {
      let copyPassText = document.getElementById('password');
      copyPassText.select();
      copyPassText.setSelectionRange(0, 9999);
      document.execCommand("copy");
      alertBox.classList.toggle('active');
      setTimeout(function () {
            alertBox.classList.toggle('active');
      }, 1000)
}