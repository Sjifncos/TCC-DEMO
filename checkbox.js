document.addEventListener('DOMContentLoaded', function() {
    // Get the password input and checkbox elements
    const passwordInput = document.querySelector('input[type="password"]');
    const checkbox = document.querySelector('#cbx-46');

    // Add event listener to checkbox
    checkbox.addEventListener('change', function() {
        // If checkbox is checked, show password, otherwise hide it
        passwordInput.type = this.checked ? 'text' : 'password';
    });
});
function togglePassword() {
    var passwordInput = document.querySelector('input[type="password"]');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}