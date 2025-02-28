const initFormHandler = () => {
    const htmlForm = document.querySelector("form.login-form");
    htmlForm.addEventListener("submit", formHandler)
}

const formHandler = (e) => {
    const errorMessage = 'All form fields must be filled in';
    e.preventDefault()

    const { email, password } = e.currentTarget.elements;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (!emailValue || !passwordValue) {
        alert(errorMessage);
        return;
    }

    const formData = {
        email: emailValue,
        password: passwordValue,
    };

    console.log(formData);
    e.currentTarget.reset();
}

document.addEventListener("DOMContentLoaded", initFormHandler);