const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btntempLogout = document.getElementById('btntempLogout');

btnLogin.addEventListener('click', (e) => {
    // get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    // eslint-disable-next-line no-undef
    const auth = firebase.auth();
    // sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);

    promise.catch((e) => {
        return document.querySelector('.errormessg').textContent = 'Email and/or Password invalid. Please try again.';
    },
    console.log(e.message));
});


btnSignUp.addEventListener('click', (e) => {
    location.href = './signup.html', console.log(e.message);
});

// eslint-disable-next-line no-undef
btntempLogout.addEventListener('click', (e) => {
    firebase.auth().signOut();
});
// Add realtime authentication listener
// eslint-disable-next-line no-undef
firebase.auth().onAuthStateChanged((firebaseUser) => {
    if(firebaseUser){
        console.log(firebaseUser);
    }
    else{
        console.log('You are now logged out.');
    }
});
