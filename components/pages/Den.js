import { logout } from './../../util';

function buildButton1(btn){
    return `<button id="${btn.id}" class="${btn.class}">${btn.text}</button>`;
}

// function buildUserName(){

//     window.addEventListener('load', (e) => {
//         // eslint-disable-next-line func-names
//         firebase.auth().onAuthStateChanged(function(user){
//             if(user.displayName == null || user.displayName == ''){
//                 return user.displayName = 'Owull User';
//             }

//             return user.displayName;
//         });
//     });
// }

function buildNavHTML(stateLinks){
    return stateLinks
        .map(
            (link) => `<li><a href="/${link.text.replace(/\s+/g, '').toLowerCase()}" data-navigo><span class="${link.icon}"></span>${link.text}</a></li>`
        ).join(' ');
}

export default function(state){
    return `

</header>
<nav class="container">
  <ul>
    ${buildNavHTML(state.links.primary)}
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
