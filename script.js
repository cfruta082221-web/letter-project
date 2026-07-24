const message = `My dearest 🦆daki,

I can't write you a written letter right now, so I'm making this webpage to say what I truly felt for you. As cliche as it sounds, but it's true.

I don't really know how to say this properly, but I want to try. When I start becoming comfortable with someone or when I start caring about them, I end up doing the exact opposite of what I actually want.

My feelings were genuine. I wasn't pretending, and I wasn't just saying things for the sake of saying them.

I really do like you. And I really want to know you more.

I don't expect anything from you.

I'm not good at this.

I don't always know what to say.

But here I am.

To whom it may only concern,

daki`;


function showLetter() {

  const letter = document.getElementById("letterBox");
  const intro = document.getElementById("introText");
  const button = document.querySelector(".btn");
  const music = document.getElementById("bgMusic");

  // Start music immediately when the button is clicked
  music.volume = 0.35;

  music.play()
    .then(() => {
      console.log("Music is playing");
    })
    .catch(error => {
      console.error("Music could not play:", error);
    });

  // Hide intro and button
  intro.style.opacity = "0";
  button.style.opacity = "0";

  setTimeout(() => {

    intro.style.display = "none";
    button.style.display = "none";

    // Show letter
    letter.style.display = "block";

    // Typing animation
    const typedText = document.getElementById("typedText");

    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.textContent += message.charAt(i);
        i++;
        setTimeout(typeWriter, 35);
      }
    }

    typeWriter();

  }, 800);
}
