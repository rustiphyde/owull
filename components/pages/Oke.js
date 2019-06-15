
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
  <h2><span class="fas fa-music"></span> OKE LISTS <span class="fas fa-music"></span></h2>
  <form class="new-oke-list">
  <label>NAME YOUR OKE LIST
  <input id="create-new-oke-name" type="text" placeholder="List Name Here" required/>
  </label>
  ${buildButton1(state.btns.fxnal[4])}
  </form>
  </main>`;
}
