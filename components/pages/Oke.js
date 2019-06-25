function buildNavHTML(stateLinks){
  return stateLinks
      .map(
          (link) => `<li><a href="/${link.text.replace(/\s+/g, '').toLowerCase()}" data-navigo><span class="${link.icon}"></span>${link.text}</a></li>`
      ).join(' ');
}

function buildOkeNav(stateLinks){
    return stateLinks
        .map(
            (link) => `<li class="logged-in"><a href="#" class="modal-trigger" data-target="${link.target}"><i class="${link.icon}"></i>${link.text}</a></li>`
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
  <section class="logged-in">
  <h2 class="list-title">OKE LISTS</h2>
  <nav class="container">
  <div class="container">
    <ul>
        ${buildOkeNav(state.links.oke)}
    </ul>
  </div>
</nav>

<button class="modal-trigger btn-chooz-1" data-target="modal-oke-chooz">CHOOZ BY LIST</button>
<br>
<button class="modal-trigger btn-chooz-2" data-target="modal-artist-chooz">CHOOZ BY ARTIST</button>
<br>

 </section>`   ;
}
