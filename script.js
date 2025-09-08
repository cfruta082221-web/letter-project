const message = `My dearest bubby, 
I know its too late and cringe pajud pag approach but I want u to know that I really miss you. 
Taga gabie ko sig huna huna nimo and I really want it to stop kay dinako gusto ma damgohan ka kay sakit. 
Stuck sa what could've beens and what if and what should've been sa atong relationship. 
I don't think I can find someone better or someone who I can love the way I loved you. 
You carry a part of me nga pangitaon sa uban. A piece that anyone who will love me next must understand nga that piece will be yours forever.
I miss you, double edge sword sa damgo kay tsada magunitan taka usab, I can hear your voice again and maka uban ka, pero sakit siya but thats the only time I can feel you. 
But I'd rather feel that pain, that delusion, than not feeling anything from you ever again.
And the stupidest thing about it is we tried. We really did, and I miss you for that. The petty things, the fights, the "mag okay nata" "mag love love nata"
The laughs in our own little world like as if no one can replicate those moments we shared. Your little idiosyncrasies that stays with me. The way you laugh when you're trying not to pag mo ingon kog ayaw katawa.
Even the tiny bits that you don't notice yourself that ako ray nakabalo. Those are the pieces of you that I miss the most.
And it sucks, and probably by the time you are reading this you already have a boyfriend but don't be mad if I hate him, and even tho I can't say I love you. 
I love you. 
I don't wanna miss the chance. So here I am building this project, formulating and trying to get this words out of my chest for you to read with this cringey ass song in the background trying to reach out to you. 
I know you're happy right now and I'm happy for you truly.
Ambot e send ba nako ni or dili but I'm sorry in advance if gi send jud ni nako sa imoha, wako kabalo unsa imong e ingon or ma feel or unsa ba. You'll probably delete the email or ignore it. I don't know, I don't really care at this point. 
I just want you to know that I fucking miss you. If you are wondering nga ga huna huna paba ko nimo, the answer is Yes.
And If you are still wondering if I'm still waiting then yes.
If you are still wondering if I am still hoping ng kita japun puhon, FUCKING YES.
I just don't know what to do. I keep on thinking about you. I guess fuck me, but here it is.

To whom it may only concern,

I miss you very much.`;  

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





