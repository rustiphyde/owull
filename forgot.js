const btnLoginRedirect = document.getElementById('btnLoginRedirect');
const btnReset = document.getElementById('btnReset');
const enterEmail = document.getElementById('enterEmail');

btnLoginRedirect.addEventListener('click', () => {
    location.href = './index.html';
});

btnReset.addEventListener('click', (e) => {
    // TODO - Create confirm password
    const email = enterEmail.value;
    const auth = firebase.auth();
    // sign in

    const promise = auth.sendPasswordResetEmail(email);

    promise.catch((e) => document.querySelector(
        '.errormessg'
    ).textContent = `Please try again. Something went wrong.
    ${e.message}`,
    console.log(e.message));
});
