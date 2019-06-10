import { login } from './../../util';

function buildButton1(btn){
    return `<button id="${btn.id}" class="${btn.class}">${btn.text}</button>`;
}

function buildButton2(btn){
    return `<button id="${btn.id}" class="${btn.class}" href="/${btn.text.replace(/\s+/g, '').toLowerCase()}" data-navigo>${btn.text}</button>`;
}


export default function(state){
    return `
    <header id="wlcm">
    <h1><span class="logo">aaa</span><span class="owullo">a</span>WULL<span class="mirror">aaa</span></h1>
    <h2>WELC<span class="owullo2">a</span>ME T<span class="owullo2">a</span> <span class="owullo2">a</span>WULL</h2>
    <h2>PLEASE L<span class="owullo2">a</span>GIN <span class="owullo2">a</span>R REGISTER</h2>
  </header>
  <main class="container">
      <div id="loginForm">
          <h3 id="successmessg"></h3>
        <h3 id="errormessg"></h3>
      <label>EMAIL ADDRESS
              <input id="txtEmail" type="email" placeholder="example@email.com" required/>
              </label>
              <label>PASSWORD
              <input id="txtPassword" type="password" placeholder="********" required/>
            </label>
              ${buildButton1(state.btns.fxnal[0])}
            </div>
  <p id="nupsu">New User? Please Register</p>
    ${buildButton2(state.btns.redirs[1])}
    <a class="lnk" href="/forgot" >Forgot Password?</a>
  </main>`;
}

login();

