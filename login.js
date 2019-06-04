const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btntempLogout = document.getElementById('btntempLogout');

btnLogin.addEventListener('click', (e) => {
    // get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);

    promise.then(() => {
        location.href = './owullden.html';
    });

    promise.catch((e) => document.querySelector('.errormessg').textContent = 'Email and/or is Password invalid. Please try again.',
        console.log(e.message));
});


btnSignUp.addEventListener('click', (e) => {
    location.href = './signup.html', console.log(e.message);
});

btntempLogout.addEventListener('click', (e) => {
    firebase.auth().signOut();
});


firebase.auth().onAuthStateChanged((firebaseUser) => {
    if(firebaseUser){
        console.log(firebaseUser);
    }
    else{
        console.log('You are now logged out.');
    }
});
