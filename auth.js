import messg from './store/Error';
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

        .catch(function(error){
            const errorCode = error.code;

            if(errorCode){
                console.log(`Got an error, ${errorCode}, ${error.message}`);
            }
        })
    // if no errors create the account
        .then(function(){
            const db = firebase.firestore();
            const userUid = firebase.auth().currentUser.uid;


            db.collection('Users').doc(userUid).set({
                email: htmlEmail,
                username: htmlUser,
                password: htmlPass,
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

        .catch(function(error){
            const errorCode = error.code;

            if(errorCode){
                console.log(`Got an error, ${errorCode}, ${error.message}`);
            }
        })

        .then(function(){
            location.href = '/home';

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
    const email = enterEmail.value;
    const auth = firebase.auth();
    // sign in

    auth.sendPasswordResetEmail(email)

        .catch(function(error){
            const errorCode = error.code;

            if(errorCode){
                console.log(`Got an error, ${errorCode}, ${error.message}`);
            }
        })

        .then(function(){
            const pw = document.querySelector('#modal-forgot');

            M.Modal.getInstance(pw).close();
            resetPW.reset();
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
        .catch(function(error){
            const errorCode = error.code;

            if(errorCode){
                console.log(`Got an error, ${errorCode}, ${error.message}`);
            }
        });
});
// if no errors create the account
