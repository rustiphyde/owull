/* eslint-disable func-names */
/* eslint-disable complexity */
import { register } from './../../util';

function buildButton1(btn){
    return `<input type="button" id="${btn.id}" class="${btn.class}" value="${btn.text}"/>`;
}

function buildButton2(btn){
    return `<button id="${btn.id}" class="${btn.class}" href="/${btn.text.toLowerCase()}" data-navigo>${btn.text}</button>`;
}

export default function(state){
    return `<header id="skull">
    <h1><span class="logo">aaa</span><span class="owullo">a</span>WULL<span class="mirror">aaa</span></h1>
    <h2>PLEASE REGISTER BEL<span class="owullo2">a</span>W</h2>
  </header>
  <main class="container">
          <div id="signUpForm">
              <h3 id="successmessg"></h3>
            <h3 id="errormessg"></h3>
            <label>CHOOSE A USERNAME
            <input id="create-display-name" type="text" placeholder="Owull User" required/></label>
          <label>ENTER EMAIL ADDRESS

                  <input id="create-email" type="email" placeholder="example@email.com" required/>
                  </label>
                  <label>CHOOSE A PASSWORD
                  <input id="create-password" type="password" placeholder="********" required/>
                </label>
                ${buildButton1(state.btns.fxnal[1])}
                </div>
      <p id="aaupl">Already a User? Please Login</p>
        ${buildButton2(state.btns.redirs[0])}
  </main>`;
}


register();
