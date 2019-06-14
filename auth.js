import messg from './store/Error';
/* eslint-disable quote-props */
/* eslint-disable func-names */
const userName = document.querySelector('.user-name');

// setup username
const nameSet = (data) => {
    if(data.length){
        let html = '';

        data.forEach((doc) => {
            const nickname = doc.data().name;

            const un = `
        ${nickname}'s Den
        `;

            html = un;
        });

        userName.innerHTML = html;
    }
    else{
        userName.innerHTML = `<br><br>
        <h2 class="logged-out"><br />NO USER IS CURRENTLY LOGGED IN
        <br><br>PLEASE LOGIN OR SIGN UP<br><br></h2>
        <br><br>
        <section id="skull2">
            <h1><span class="logo2">OOOOOOOOO</span><span class="owullo2">O</span>WULL<span class="mirror2">OOOOOOOOO</span></h1>
        </section>`;
    }
};
// listen for auth status changes

auth.onAuthStateChanged((user) => {
    if(user){
        const db = firebase.firestore();

        db.collection('users').get().then((snap) => {
            nameSet(snap.docs);
        });
    }
    else{
        nameSet([]);
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
            var errorCode = error.code;

            if(errorCode){
                console.log(`${messg.errors[1].text} ${error.message}`);
            }
        })
    // if no errors create the account
        .then(function(){
            const userUid = auth.currentUser.uid;
            const db = firebase.firestore();

            db.collection('users').doc(userUid).set({
                email: htmlEmail,
                emailVerified: false,
                name: htmlUser,
                online: false,
                onlock: false,
                password: htmlPass

            })
                .then(function(){
                    location.href = '/den';
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
            const userUid = auth.currentUser.uid;
            const firestore = firebase.firestore();
            const db = firestore.collection('users').doc(userUid).get()

                .then(function(doc){
                    if(doc.exists){
                        let owulluseris = doc.data().name;

                        console.log('owulluseris contains: ', owulluseris);
                    }
                    else{
                        console.log('No Such Document.');
                    }
                });
            const modal = document.querySelector('#modal-login');

            M.Modal.getInstance(modal).close();
            loginForm.reset();
        });
});

// logout
const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) => {
    e.preventDefault();
    firebase.auth().signOut();
});

