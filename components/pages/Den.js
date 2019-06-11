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
  <footer>${buildButton1(state.btns.fxnal[3])}
  <strong>&copy2019 Rusty Hoppins</strong>

  </footer>
</main>
  `;
}


function logout(){
  window.addEventListener('load', () => {
      const btnLogout = document.getElementById('btn-logout');


      if(btnLogout){
          btnLogout.addEventListener('click', () => {
              firebase.auth().signOut().then(
                  location.href = '/'
              );
          });
      }
  }
  );
}

logout();
