import { logout } from './../../util';

function buildButton1(btn){
    return `<button id="${btn.id}" class="${btn.class}">${btn.text}</button>`;
}


export default function(state){
    return `<header id="den">
  <h1><span class="logo">aaa</span><span class="owullo">a</span>WULL<span class="mirror">aaa</span></h1>
  <h2 class="displayName">Rustiphyde's Den</h2>
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
    <button class="btnOpen">OPEN</button>
    <button class="btnChooz">CHOOZ</button>
    <h3 class="listName">LIST NAME HERE</h3>
  </div>
  <div class="phayvz">
      <span class="fas fa-store-alt"></span>
    <button class="btnOpen">OPEN</button>
    <button class="btnChooz">CHOOZ</button>
    <h3 class="listName">LIST NAME HERE</h3>
  </div>
  <div class="phayvz">
      <span class="fas fa-beer"></span>
    <button class="btnOpen">OPEN</button>
    <button class="btnChooz">CHOOZ</button>
    <h3 class="listName">LIST NAME HERE</h3>
  </div>
  <div class="phayvz">
      <span class="fas fa-glass-whiskey"></span>
    <button class="btnOpen">OPEN</button>
    <button class="btnChooz">CHOOZ</button>
    <h3 class="listName">LIST NAME HERE</h3>
  </div>
  <div class="phayvz">
      <span class="fas fa-music"></span>
    <button class="btnOpen">OPEN</button>
    <button class="btnChooz">CHOOZ</button>
    <h3 class="listName">LIST NAME HERE</h3>
  </div>
  <div class="phayvz">
      <span class="fas fa-glass-whiskey"></span>
    <button class="btnOpen">OPEN</button>
    <button class="btnChooz">CHOOZ</button>
    <h3 class="listName">LIST NAME HERE</h3>
  </div>
  <div class="phayvz">
      <span class="fas fa-cocktail"></span>
    <button class="btnOpen">OPEN</button>
    <button class="btnChooz">CHOOZ</button>
    <h3 class="listName">LIST NAME HERE</h3>
  </div>
  <footer><strong>&copy2019 Rusty Hoppins</strong>
      ${buildButton1(state.btns.fxnal[3])}
  </footer>
</main>
  `;
}

logout();
