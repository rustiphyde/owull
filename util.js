function login(){
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');

    btnLogin.addEventListener('click', (e) => {
        // get email and password
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // login event
        const promise = auth.signInWithEmailAndPassword(email, pass);

        promise.then(() => {
            location.href = './owull.html';
        });

        promise.catch((e) => document.querySelector('.errormessg').textContent = 'Email and/or Password is invalid. Please try again.',
            console.log(e.message));
    });
}

function signup(){
    const btnSignUpCreate = document.getElementById('btnSignUp-create');
    const createEmail = document.getElementById('createEmail');
    const createPassword = document.getElementById('createPassword');

    btnSignUpCreate.addEventListener('click', (e) => {
    // TODO - Create confirm password
        const email = createEmail.value;
        const pass = createPassword.value;
        const auth = firebase.auth();
        // sign in

        const promise = auth.createUserWithEmailAndPassword(email, pass);

        promise.then((e) => document.querySelector(
            '.successmessg'
        ).textContent = 'Sign Up Successful. Welcome to Owull. Please Click Login Below.');

        promise.catch((e) => document.querySelector(
            '.errormessg'
        ).textContent = `Sign Up Unsuccessful.
      ${e.message}`,
        console.log(e.message));
    });
}

function reset(){
    const btnReset = document.getElementById('btnReset');
    const enterEmail = document.getElementById('enterEmail');

    btnReset.addEventListener('click', (e) => {
        // TODO - Create confirm password
        const email = enterEmail.value;
        const auth = firebase.auth();
        // sign in

        const promise = auth.sendPasswordResetEmail(email);

        promise.then((e) => document.querySelector(
            '.successmessg'
        ).textContent = 'Email has been sent.');

        promise.catch((e) => document.querySelector(
            '.errormessg'
        ).textContent = `Please try again. Something went wrong.
      ${e.message}`,
        console.log(e.message));
    });
}


function logout(){
    const btnLogout = document.getElementById('btnLogout');

    btnLogout.addEventListener('click', (e) => {
        firebase.auth().signOut().then(
            location.href = './index.html'
        );
    });
}

export { login, signup, reset, logout };
