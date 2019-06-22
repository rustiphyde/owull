
function buildOkeNav(stateLinks){
    return stateLinks
        .map(
            (link) => `<li class="logged-in"><a href="#" class="modal-trigger" data-target="${link.target}"><i class="${link.icon}"></i>${link.text}</a></li>`
        ).join(' ');
}

// Dynamically create the main content on the Oke page
export default function(state){
    return `

  <section class="logged-in">
  <h2><span class="fas fa-music"></span> OKE LISTS <span class="fas fa-music"></span></h2>
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
