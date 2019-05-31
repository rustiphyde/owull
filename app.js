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
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout= document.getElementById('btnLogout');

  // Add login event
    btnLogin.addEventListener('click', e => {
      //get email and password
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      //sign in
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch( e => console.log(e.message));
    });
}());
