const formRef = document.querySelector('.login-form');
// console.log(formRef);

let loginData = {};
const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    if (email.value === '' || password.value === '') {
        alert('Заповніть всі поля!');
        return;
    }
    loginData.email = email.value;
    loginData.password = password.value;
    console.log(loginData);

    event.currentTarget.reset();
};

formRef.addEventListener('submit', handleSubmit);