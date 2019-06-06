function buildLoginButton(btn){

}

export default function(state){
return `<header id="wlcm">


    <h1><span class="logo">aaa</span><span class="owullo">a</span>WULL<span class="mirror">aaa</span></h1>
    <h2>WELC<span class="owullo2">a</span>ME T<span class="owullo2">a</span> <span class="owullo2">a</span>WULL</h2>
    <h2>PLEASE L<span class="owullo2">a</span>GIN <span class="owullo2">a</span>R SIGN UP</h2>
  </header>
  <main class="container">
      <div class="loginForm">
          <h3 class="successmessg"></h3>
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

    <a class="lnk" href="forgot.html">Forgot Password?</a>
  </main>`;
