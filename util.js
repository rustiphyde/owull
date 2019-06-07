exports.login =
function login(){
    window.addEventListener('load', (e) => {
        const btnLogin = document.getElementById('btnLogin');
        const txtEmail = document.getElementById('txtEmail');
        const txtPassword = document.getElementById('txtPassword');

        btnLogin.addEventListener('click', () => {
        // get email and password
            const email = txtEmail.value;
            const pass = txtPassword.value;
            const auth = firebase.auth();
            // login event
            const promise = auth.signInWithEmailAndPassword(email, pass);

            promise.then(() => {
                location.href = '/den';
            });

            promise.catch(() => document.querySelector('.errormessg').textContent = 'Email and/or Password is invalid. Please try again.', console.log(e.message)
            );
        }) ;
    });
};


exports.logout =
function logout(){
    window.addEventListener('load', (e) => {
        const btnLogout = document.getElementById('btnLogout');

        btnLogout.addEventListener('click', (e) => {
            firebase.auth().signOut().then(
                location.href = '/login'
            );
        });
    }
    );
};

exports.signup =
function signup(){
    window.addEventListener('load', (e) => {
        const btnSignUpCreate = document.getElementById('btnSignUp');
        const createEmail = document.getElementById('createEmail');
        const createPassword = document.getElementById('createPassword');

        btnSignUpCreate.addEventListener('click', () => {
        // TODO - Create confirm password
            const email = createEmail.value;
            const pass = createPassword.value;
            const auth = firebase.auth();
            // sign in

            const promise = auth.createUserWithEmailAndPassword(email, pass);

            promise.then(() => document.querySelector(
                '.successmessg'
            ).textContent = 'Sign Up Successful. Welcome to Owull. Please Click Login Below.');

            promise.catch(() => document.querySelector(
                '.errormessg'
            ).textContent = `Sign Up Unsuccessful.${e.message}`
            );
        });
    });
};

exports.reset =
function reset(){
    window.addEventListener('load', (e) => {
        const btnReset = document.getElementById('btnReset');
        const enterEmail = document.getElementById('enterEmail');

        btnReset.addEventListener('click', (e) => {
        // TODO - Create confirm password
            const email = enterEmail.value;
            const auth = firebase.auth();
            // sign in
            const promise = auth.sendPasswordResetEmail(email);

            promise.then(() => document.querySelector(
                '.successmessg'
            ).textContent = 'Email has been sent.');

            promise.catch(() => document.querySelector('.errormessg').textContent = `Please try again. Something went wrong.
          ${e.message}`, console.log(e.message));
        });
    });
};
