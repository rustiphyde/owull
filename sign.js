const btnSignUpCreate = document.getElementById('btnSignUp-create');
const createEmail = document.getElementById('createEmail');
const createPassword = document.getElementById('createPassword');
const btnLoginRedirect = document.getElementById('btnLoginRedirect');

// Login Redirect

btnLoginRedirect.addEventListener((e) => {
    location.href = './index.html';
});

// // Add sign up event
btnSignUpCreate.addEventListener('click', (e) => {
    const email = createEmail.value;
    const pass = createPassword.value;
    const auth = firebase.auth();
    // sign in

    const promise = auth.createUserWithEmailAndPassword(email, pass);

    promise.catch((e) => document.querySelector(
                '.errormessg'
            ).textContent = `Sign Up Unsuccessful.
      Please try again.`,
            console.log(e.message));
});
// eslint-disable-next-line indent

