function buildNavHTML(stateLinks){
  return stateLinks
      .map(
          (link) => `<li><a href="/${link.text.replace(/\s+/g, '').toLowerCase()}" data-navigo><span class="${link.icon}"></span>${link.text}</a></li>`
      ).join(' ');
}


export default function(state){
    return `
    <nav class="container logged-in">
    <ul class="logged-in">
      ${buildNavHTML(state.links.primary)}
    </ul>
    </nav>
<main class="container">
<p id="homebase">Welcome to Owull! My name is Rusty Hoppins and I created Owull as a way to combat that pesky little gremlin known as "Indecision" that tends to plague the Bar scene. As a Karaoke DJ and Karaoke Singer myself, I've dealt with the little devil more times than I could possibly calculate, and not just in the realm of song choices. Indecision can completely ruin a mood and cause all kinds of other issues in a bar that nobody wants to deal with. After all, you go to a bar to have fun and enjoy yourself, right? So why let anything ruin that?<br>
That's where Owull comes in. Owull takes those annoying moments where Indecision rears his ugly head and turns them into a fun game of chance instead. Owull will randomly choose from a user's created list of songs (or whatever other items are added in future updates) and display the choice to the user at the push of a button. Owull also helps users organize their night with lists that they can view any time if they still want to choose for themselves.<br>
All songs are added simultaneously to a user's personal list as well as a master list of all songs ever added to Owull. Brave users are encouraged to find the Mega-Chooz button and let Owull choose a song at random from the master list. You never know WHAT you might end up with, and that's the fun of Owull.<br>
I encourage you to create as many "Oke Lists" as you want and have fun with it. If you have any questions, comments, concerns, complaints or suggestions please feel free to send me a personal email at rustiphyde@gmail.com.<br>
In future updates I intend to add all kinds of enjoyable activities and interactions to Owull so stay tuned folks the fun is just getting started.<br><span class="owullo"> O</span></p>
</main>
  `;
}


