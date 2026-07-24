const message = `My dearest 🦆daki, 
I can't write you a written letter right now, so I'm making this webpage to say what I truly felt for you. As cliche as it sounds but it's true.
I don't really know how to say this properly, but I want to try. when I start becoming comfortable with someone or when I start caring about them,
I end up doing the exact opposite of what I actually want.

My feelings were genuine. I wasn't pretending, and I wasn't just saying things for the sake of saying them. 
I really do like you. And I really want to know you more.
I don't expect anything from you. 
I'm not good at this. 
I don't always know what to say. 
But here I am.

To whom it may only concern,
daki`;  

function openLetter() {
  const letter = document.getElementById("letter");
  const intro = document.querySelector(".intro");
  const button = document.querySelector(".btn");
  const music = document.getElementById("music");

  intro.style.opacity = "0";
  button.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    button.style.display = "none";

    letter.style.display = "block";

    // Music starts after the button click
    music.volume = 0.35;
    music.play();

  }, 800);
}




