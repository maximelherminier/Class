function togglePassword() {
    const passwordInput = document.getElementById("input_password");
    const checkbox = document.getElementById("see_password");
    if (checkbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}