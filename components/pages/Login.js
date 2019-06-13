/* eslint-disable complexity */
import { login } from './../../util';

function buildButton1(btn){
    return `<button id="${btn.id}" class="${btn.class}">${btn.text}</button>`;
}

function buildButton2(btn){
    return `<button id="${btn.id}" class="${btn.class}" href="/${btn.text.replace(/\s+/g, '').toLowerCase()}" data-navigo>${btn.text}</button>`;
}


export default function(state){
    return `



        <div id="loginForm">
          <h3 id="successmessg"></h3>
        <h3 id="errormessg"></h3>
      <label>EMAIL ADDRESS
              <input id="txt-email" type="email" placeholder="example@email.com" required/>
              </label>
              <label>PASSWORD
              <input id="txt-password" type="password" placeholder="********" required/>
            </label>
              ${buildButton1(state.btns.fxnal[0])}
            </div>
  <p id="nupsu">New User? Please Register</p>
    ${buildButton2(state.btns.redirs[1])}
    <a class="lnk" href="/forgot" >Forgot Password?</a>
  `;
}
firebase.auth().onAuthStateChanged((user) => {
    if(user && window.location.pathname === '/login'){
        location.href = '/den';
    }
    else if(user){
        console.log('Logged in as', user.email);
    }
    else if(!user && window.location.pathname === '/login'){
        document.querySelector('#successmessg').textContent = 'You are currently logged out. Please login below.';
    }
    else if(!user && window.location.pathname === '/register'){
        document.querySelector('#successmessg').textContent = 'To register for a new Owull account please fill out the form below and click Register. If you already have an account please click Login to navigate to the Login page.' ;
    }
    else if(user && window.location.pathname === '/register'){
        location.href = '/den';
    }
    else{
        console.log('Logged out');
    }
}
);

login();

