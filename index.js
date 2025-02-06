document.addEventListener("DOMContentLoaded", function() {
    const texts = ["Front End Developer", "I.T Technician", "Music Producer"];
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    const typingText = document.getElementById("typing-text");
  
    function type() {
      if (currentCharIndex < texts[currentTextIndex].length) {
        typingText.textContent += texts[currentTextIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 2000); // Wait before erasing
      }
    }
  
    function erase() {
      if (currentCharIndex > 0) {
        typingText.textContent = texts[currentTextIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(erase, 50);
      } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(type, 500); // Wait before typing next text
      }
    }
  
    type();
  });