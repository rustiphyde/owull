// import { reset } from './../../util';


function buildButton1(btn){
    console.log(btn);

    return `<button id="${btn.id}" class="${btn.class}">${btn.text}</button>`;
}

function buildButton2(btn){
    return `<button id="${btn.id}" class="${btn.class}" href="/${btn.text.replace(/\s+/g, '').toLowerCase()}" data-navigo>${btn.text}</button>`;
}


export default function(state){
    return `<header id="forgo"><h1><span class="logo">aaa</span><span class="owullo">a</span>WULL<span class="mirror">aaa</span></h1>
    <h2>F<span class="owullo2">a</span>RGOT Y<span class="owullo2">a</span>UR PASSW<span class="owullo2">a</span>RD<span class="quest">?</span></h2>
    <h3>IT'S <span class="owullo2">a</span>K, LET'S RESET IT</h3>
    </header>
  <main class="container">
      <div class="passwordResetForm">
          <h3 class="successmessg"></h3>
          <h3 class="errormessg"></h3>
        <label>ENTER YOUR EMAIL ADDRESS
                <input id="enterEmail" type="email" placeholder="example@email.com"/>
                </label>
                ${buildButton1(state.btns.fxnal[2])}
              </div>
              <p id="dyraa">Did You Remember After All? Please Login</p>
          ${buildButton2(state.btns.redirs[0])}
  </main>
    `;
}

// reset();
