import { register } from './../../util';

function buildButton1(btn){
    return `<button id="${btn.id}" class="${btn.class}">${btn.text}</button>`;
}

function buildButton2(btn){
    return `<button id="${btn.id}" class="${btn.class}" href="/${btn.text.toLowerCase()}" data-navigo>${btn.text}</button>`;
}

export default function(state){
    return `<header id="sgnup">
    <h1><span class="logo">aaa</span><span class="owullo">a</span>WULL<span class="mirror">aaa</span></h1>
    <h2>PLEASE SIGN UP</h2>
  </header>
  <main class="container">
          <div class="signUpForm">
              <h3 class="successmessg"></h3>
            <h3 class="errormessg"></h3>
          <label>ENTER EMAIL ADDRESS
                  <input id="createEmail" type="email" placeholder="example@email.com"/>
                  </label>
                  <label>CREATE PASSWORD
                  <input id="createPassword" type="password" placeholder="********"/>
                </label>
                ${buildButton1(state.btns.fxnal[1])}
                </div>
      <p id="aaupl">Already a User? Please Login</p>
        ${buildButton2(state.btns.redirs[0])}
  </main>`;
}

register();
