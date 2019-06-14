/* eslint-disable no-else-return */
/* eslint-disable func-names */

function buildButton1(btn){
    return `<button id="${btn.id}" class="${btn.class}">${btn.text}</button>`;
}


function buildNavHTML(stateLinks){
    return stateLinks
        .map(
            (link) => `<li><a href="/${link.text.replace(/\s+/g, '').toLowerCase()}" data-navigo><span class="${link.icon}"></span>${link.text}</a></li>`
        ).join(' ');
}


export default function(state){
    return `


<nav class="container">
  <ul class="logged-in">
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
  </main>
  `;
}


