const message = `Hey bab I know its too late and cringe pajud pag approach but I want u to know that I really miss you. 
Taga gabie ko sig huna huna nimo and I really want it to stop kay dinako gusto ma damgohan ka kay sakit. 
Stuck sa what could've beens and what if and what should've been sa atong relationship. 
I don't think I can find someone better or someone who I can love the way I loved you hart. 
You bring a piece of me nga pangitaon sa uban. 
I love you and I miss you, sa damgo magunitan taka usab and maka uban sakit siya pero thats the only time I can feel you. 
I'd rather feel that pain, that delusion, than not feeling anything from you ever again. 
I don't wanna miss the chance. And I hope I can still see you and talk to you again. 
I miss you very much.`;  

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;

        // 📱 Auto-scroll as text appears
        letterBox.scrollTop = letterBox.scrollHeight;

        setTimeout(typeWriter, 30); // typing speed
      }
    }

    typeWriter();
  }, 600);
}
