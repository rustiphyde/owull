
function buildNavHTML(stateLinks){
    return stateLinks
        .map(
            (link) => `<li><a href="/${link.text.replace(/\s+/g, '').toLowerCase()}" data-navigo><span class="${link.icon}"></span>${link.text}</a></li>`
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

<button class="modal-trigger btn-chooz-1" data-target="modal-oke-chooz">CHOOZ BY LIST</button>
<br>
<button class="modal-trigger btn-chooz-2" data-target="modal-artist-chooz">CHOOZ BY ARTIST</button>
<br>

<br>
<details>
<summary class="button-collapse">?</summary>
<div id="oke-roulette" class="content">

<br>
***FEELIN' BRAVE?***
<br>
<button id="btn-mega-chooz" class="bttn">MEGA CHOOZ</button>
<br>
***PUSH THE BUTTON***
<br>
<br>
</div>
</details>
 </section>`   ;
}
