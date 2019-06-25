function buildNavHTML(stateLinks){
    return stateLinks
        .map(
            (link) => `<li><a href="/${link.text.replace(/\s+/g, '').toLowerCase()}" data-navigo><span class="${link.icon}"></span>${link.text}</a></li>`
        ).join(' ');
  }

export default function(){
    return `
<nav class="container logged-in">
    <ul class="logged-in">
        ${buildNavHTML(state.links.primary)}
    </ul>
</nav>
<main class="container">
<h2>COMING SOON</h2>
</main>`;
}
