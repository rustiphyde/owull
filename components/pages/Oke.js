
function buildButton1(btn){
    return `<button id="${btn.id}" class="${btn.class}">${btn.text}</button>`;
}

function buildNavHTML(stateLinks){
    return stateLinks
        .map(
            (link) => `<li><a href="/${link.text.replace(/\s+/g, '').toLowerCase()}" data-navigo><span class="${link.icon}"></span>${link.text}</a></li>`
        ).join(' ');
}

// Dynamically create the main content on the Oke page
export default function(state){
    return `
  <nav class="container list-nav logged-in">
  <ul class="logged-in">
    ${buildNavHTML(state.links.primary)}
  </ul>
  </nav>
  <main id="oke-main" class="container logged-in">
  <h2><span class="fas fa-music"></span> OKE LISTS <span class="fas fa-music"></span></h2>
  <nav class="container">
  <div class="container">
    <ul>
        <li class="logged-in">
            <a href="#" class="modal-trigger" data-target="modal-oke-new"><i class="fas fa-hammer"></i>BUILD</a>
          </li>
      <li class="logged-in">
        <a href="#" class="modal-trigger" data-target="modal-oke-edit"><i class="fas fa-pencil-alt"></i>EDIT</a>
      </li>
      <li class="logged-in">
        <a href="#" class="modal-trigger" data-target="modal-oke-view"><i class="fas fa-eye"></i>VIEW</a>
      </li>
    </ul>
  </div>
</nav>
</main>

<div id="oke-list-display"></div>

`
    ;
}
