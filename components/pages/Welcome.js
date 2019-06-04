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

    promise.catch(e => {
      return  document.querySelector('.errormessg').textContent = 'Email and/or is Password invalid. Please try again.',
        console.log(e.message)});
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

export default function(){
    return `<body class="container">

  <header id="wlcm">


    <h1><span class="logo">aaaaaaa</span>WELCOME TO <span class="owullo">a</span>WULL<span class="mirror">aaaaaaa</span></h1>
    <h2>PLEASE LOGIN OR SIGN UP</h2>
  </header>
  <main class="container">
      <div class="loginForm">
        <h3 class="errormessg"></h3>
      <label>EMAIL ADDRESS
              <input id="txtEmail" type="email" placeholder="example@email.com"/>
              </label>
              <label>PASSWORD
              <input id="txtPassword" type="password" placeholder="********"/>
            </label>
              <button id="btnLogin" class="btn">LOGIN</button>
            </div>
  <p id="nupsu">New User? Please Sign Up</p>
    <button id="btnSignUp" class="btn">SIGN UP</button>
    <button id="btntempLogout" class="btn">LOGOUT</button>
    <a class="lnk" href="forgot.html">Forgot Password?</a>
  </main>
  `;
}
