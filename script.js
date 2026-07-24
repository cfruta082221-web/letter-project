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

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  // 🎵 Play music
  const bgMusic = document.getElementById("bgMusic");
  bgMusic.volume = 0; // start silent
  bgMusic.play();

  // 🎵 Fade in effect
  let volume = 0;
  const fadeIn = setInterval(() => {
    if (volume < 1) {
      volume += 0.05; // increase slowly
      bgMusic.volume = volume;
    } else {
      clearInterval(fadeIn);
    }
  }, 200); // every 200ms

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;

        // Auto-scroll
        letterBox.scrollTop = letterBox.scrollHeight;

        setTimeout(typeWriter, 30); // typing speed
      }
    }

    typeWriter();
  }, 600);
}





