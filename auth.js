/* eslint-disable complexity */
/* eslint-disable quote-props */
/* eslint-disable func-names */

// setup conditional UI
const loggedOutHTML = document.querySelectorAll('.logged-out');
const loggedInHTML = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
    if(user){
        // toggle UI
        loggedInHTML.forEach((item) => item.style.display = 'block');
        loggedOutHTML.forEach((item) => item.style.display = 'none');
    }
    else{
        // toggle UI
        loggedInHTML.forEach((item) => item.style.display = 'none');
        loggedOutHTML.forEach((item) => item.style.display = 'block');
    }
};
// catch function


// listen for auth status changes

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        const userNick = document.querySelector('.user-name');


        const userUid = firebase.auth().currentUser.uid;
        const firestore = firebase.firestore();
        const db = firestore.collection('Users').where('ID', '==', userUid);


        db.get()
            .then((snap) => {
                snap.docs.forEach((doc) => {
                    let owullName = doc.data().username;

                    userNick.innerHTML = `&nbsp;&nbsp;<span class="owullo2">O</span> ${owullName.toUpperCase()}  . . .`;
                });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = document.querySelector('#error-message');
                const errorForm = document.querySelector('#error-form');
                const errModa = document.querySelector('#modal-errors');

                if(errorCode){
                    errorMessage.innerHTML = `${error.message}`;

                    M.Modal.getInstance(errModa).open();

                    errorForm.addEventListener('submit', (e) => {
                        e.preventDefault();

                        M.Modal.getInstance(errModa).close();
                        errorForm.reset();
                    });
                }
            });

        setupUI(user);
    }
    else{
        setupUI();
    }
});

// signup
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const htmlUser = signupForm['signup-username'].value;
    const htmlEmail = signupForm['signup-email'].value;
    const htmlPass = signupForm['signup-password'].value;
    const auth = firebase.auth();

    // sign up the user
    auth.createUserWithEmailAndPassword(htmlEmail, htmlPass)
    // if there is an error stop the process

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = document.querySelector('#error-message');
            const errorForm = document.querySelector('#error-form');
            const errModa = document.querySelector('#modal-errors');

            if(errorCode){
                errorMessage.innerHTML = `${error.message}`;

                M.Modal.getInstance(errModa).open();

                errorForm.addEventListener('submit', (e) => {
                    e.preventDefault();

                    M.Modal.getInstance(errModa).close();
                    errorForm.reset();
                });
            }
        })
    // if no errors create the account
        .then(function(){
            const db = firebase.firestore();
            const userUid = firebase.auth().currentUser.uid;


            db.collection('Users').doc(userUid).set({
                email: htmlEmail,
                username: htmlUser,
                ID: userUid

            })
                .then(function(){
                    location.href = '/home';
                });
            const modal = document.querySelector('#modal-signup');

            M.Modal.getInstance(modal).close();
            signupForm.reset();
        });
});

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = loginForm['login-email'].value;
    const pass = loginForm['login-password'].value;
    const auth = firebase.auth();

    auth.signInWithEmailAndPassword(email, pass)

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = document.querySelector('#error-message');
            const errorForm = document.querySelector('#error-form');
            const errModa = document.querySelector('#modal-errors');

            if(errorCode === 'auth/invalid-email'){
                errorMessage.innerHTML = 'Please use the correct email address corresponding to your account. If you do not currently have an account please feel free to create one with the "Sign Up" tab';
            }
            else if(errorCode === 'auth/user-disabled'){
                errorMessage.innerHTML = 'I\'m sorry, but this account has been disabled.';
            }
            else if(errorCode === 'auth/user-not-found'){
                errorMessage.innerHTML = 'I\'m sorry but we do not currently have an account with these credentials in our system. Please make sure you have spelled everything correctly. If you do not currently have an account you can create one for free under the "Sign Up" tab.';
            }
            else if(errorCode === 'auth/wrong-password'){
                errorMessage.innerHTML = 'I\'m sorry, but the password does not match the one corresponding to this account in our system. Please make sure you have spelled everything correctly and try again. If you\'ve forgotten your password you can reset under the "Forgot" tab';
            }
            else{
                errorMessage.innerHTML = `${error.message}`;
            }
            M.Modal.getInstance(errModa).open();

            errorForm.addEventListener('submit', (e) => {
                e.preventDefault();

                M.Modal.getInstance(errModa).close();
                errorForm.reset();
            });
        })

        .then(() => {
            const modal = document.querySelector('#modal-login');

            M.Modal.getInstance(modal).close();
            loginForm.reset();
        });
});


// logout
const cancelOut = document.querySelector('#cancel-logout');

cancelOut.addEventListener('click', (e) => {
    e.preventDefault();

    const stay = document.querySelector('#modal-logout');

    M.Modal.getInstance(stay).close();

    logout.reset();
});

const logout = document.querySelector('#logout-form');

logout.addEventListener('submit', (e) => {
    e.preventDefault();


    firebase.auth().signOut();

    const out = document.querySelector('#modal-logout');

    M.Modal.getInstance(out).close();

    logout.reset();
});

const resetPW = document.querySelector('#reset-form');
const enterEmail = document.querySelector('#reset-email');

resetPW.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = enterEmail.value;
    const auth = firebase.auth();
    // sign in

    auth.sendPasswordResetEmail(email)

        .then(function(){
            const pw = document.querySelector('#modal-forgot');

            M.Modal.getInstance(pw).close();
            resetPW.reset();

            const openModal = document.querySelector('#modal-result');
            const ok = document.querySelector('#ok');
            const result = document.querySelector('#result-text');

            result.innerHTML = 'Your password reset email has been sent to the email address you provided.';

            M.Modal.getInstance(openModal).open();

            ok.addEventListener('click', (e) => {
                e.preventDefault();

                M.Modal.getInstance(openModal).close();
            });
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = document.querySelector('#error-message');
            const errorForm = document.querySelector('#error-form');
            const errModa = document.querySelector('#modal-errors');

            if(errorCode){
                errorMessage.innerHTML = 'The email you entered doesn\'t match any in our database. Please make sure you have entered the correct information and try again. If you do not have an account you can sign up for a free one in the "Sign Up" tab.';

                M.Modal.getInstance(errModa).open();

                errorForm.addEventListener('submit', (e) => {
                    e.preventDefault();

                    M.Modal.getInstance(errModa).close();
                    errorForm.reset();
                });
            }
        });
});

const editForm = document.querySelector('#edit-form');

editForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const changeUser = editForm['edit-username'].value;
    const auth = firebase.auth();

    const db = firebase.firestore();
    const userUid = auth.currentUser.uid;


    db.collection('Users').doc(userUid).update({
        username: changeUser
    })
        .then(function(){
            const modal = document.querySelector('#modal-edit');

            M.Modal.getInstance(modal).close();
            editForm.reset();

            location.href = '/home';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = document.querySelector('#error-message');
            const errorForm = document.querySelector('#error-form');
            const errModa = document.querySelector('#modal-errors');

            if(errorCode){
                errorMessage.innerHTML = `${error.message}`;

                M.Modal.getInstance(errModa).open();

                errorForm.addEventListener('submit', (e) => {
                    e.preventDefault();

                    M.Modal.getInstance(errModa).close();
                    errorForm.reset();
                });
            }
        });
});
// if no errors create the account
