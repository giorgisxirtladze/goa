document.getElementById('submitBtn').addEventListener('click', function () {
  const input = document.querySelector('input[name="username"]');
  const username = input.value;
  alert(username);
  input.value = '';
});
