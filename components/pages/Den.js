import { logout } from './../../util';

function buildButton1(btn){
    return `<button id="${btn.id}" class="${btn.class}">${btn.text}</button>`;
}

function buildUserName(firebaseUser){
    window.addEventListener('load', (e) => {
        if(firebaseUser){
            return firebase.auth().currentUser.displayName;
        }
        
return 'Owull User';
    });
}


export default function(state){
    return `<header id="skull">
  <h1><span class="logo">aaa</span><span class="owullo">a</span>WULL<span class="mirror">aaa</span></h1>
  <h2>${buildUserName()}'s Den</h2>
</header>
<nav class="container">
  <ul>
    <li>DEN</li>
    <li>OKE</li>
    <li>BOOZ</li>
    <li>BARZ</li>
    </ul>
</nav>
<main class="container">
  <h2>PHAYVZ LIST</h2>

  <div class="phayvz">
      <span class="fas fa-music"></span>
    ${buildButton1(state.btns.fxnal[9])}
    ${buildButton1(state.btns.fxnal[5])}
    <h3 class="listName">LIST NAME HERE</h3>
  </div>
  <div class="phayvz">
      <span class="fas fa-store-alt"></span>
    ${buildButton1(state.btns.fxnal[9])}
    ${buildButton1(state.btns.fxnal[5])}
    <h3 class="listName">LIST NAME HERE</h3>
  </div>
  <div class="phayvz">
      <span class="fas fa-beer"></span>
    ${buildButton1(state.btns.fxnal[9])}
    ${buildButton1(state.btns.fxnal[5])}
    <h3 class="listName">LIST NAME HERE</h3>
  </div>
  <div class="phayvz">
      <span class="fas fa-glass-whiskey"></span>
    ${buildButton1(state.btns.fxnal[9])}
    ${buildButton1(state.btns.fxnal[5])}
    <h3 class="listName">LIST NAME HERE</h3>
  </div>
  <div class="phayvz">
      <span class="fas fa-music"></span>
    ${buildButton1(state.btns.fxnal[9])}
    ${buildButton1(state.btns.fxnal[5])}
    <h3 class="listName">LIST NAME HERE</h3>
  </div>
  <div class="phayvz">
      <span class="fas fa-glass-whiskey"></span>
    ${buildButton1(state.btns.fxnal[9])}
    ${buildButton1(state.btns.fxnal[5])}
    <h3 class="listName">LIST NAME HERE</h3>
  </div>
  <div class="phayvz">
      <span class="fas fa-cocktail"></span>
    ${buildButton1(state.btns.fxnal[9])}
    ${buildButton1(state.btns.fxnal[5])}
    <h3 class="listName">LIST NAME HERE</h3>
  </div>
  <footer>${buildButton1(state.btns.fxnal[3])}
  <strong>&copy2019 Rusty Hoppins</strong>

  </footer>
</main>
  `;
}


logout();
