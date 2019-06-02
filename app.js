(function(){

    const config = {
      apiKey: "AIzaSyCsjfvMICsJGDkgbMfau_LVi_mnFEWUkU8",
    authDomain: "owull-3714.firebaseapp.com",
    databaseURL: "https://owull-3714.firebaseio.com",
    projectId: "owull-3714",
    storageBucket: "owull-3714.appspot.com",
    messagingSenderId: "481614411046",
    appId: "1:481614411046:web:27a15a56e4bf80d7"
    };
  // Initialize Firebase
  firebase.initializeApp(config);

  //get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUpCreate = document.getElementById('btnSignUp-create');
  const btntempLogout= document.getElementById('btntempLogout');

  // Add login event
    btnLogin.addEventListener('click', e => {
      //get email and password
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      //sign in
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch( e => {
        return document.querySelector('.errormessg').textContent = `Email and/or Password invalid. Please try again.`,
        console.log(e.message)});
    })

    btnSignUp.addEventListener('click', e => {
      location.href = "./signup.html";
    });

    //Add sign up event
    btnSignUpCreate.addEventListener('click', e => {
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      //sign in
      const promise = auth.createUserWithEmailAndPassword(email, pass)
      .then();
      promise.catch( e =>{
        return document.querySelector('.errormessg').textContent = `Sign Up Unsuccessful.
        Please try again.`,
        console.log(e.message)});
    });

    btntempLogout.addEventListener('click', e => {
      firebase.auth().signOut();
    });

    //Add realtime authentication listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
       console.log(firebaseUser);
      }
      else {
        console.log('You are now logged out.');
      }

    })
}());
