document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".hidden");
  const triggerHeight = window.innerHeight * 0.8;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerHeight && !section.classList.contains("show")) {
      section.classList.add("show");

      const text = section.querySelector("p");
      const textContent = text.innerHTML;

      const textWithBrs = textContent.replace(/{{br}}/g, "<br>");
      text.innerHTML = "";

      let index = 0;
      let displayedText = "";

      function typeWriter() {
        if (index < textWithBrs.length) {
          displayedText += textWithBrs[index];
          text.innerHTML = displayedText;
          index++;

          const lastChar = displayedText.charAt(displayedText.length - 1);
          if (lastChar === "<") {
            setTimeout(() => {
              text.innerHTML = displayedText;
            }, 100);
          }

          setTimeout(typeWriter, 50);
        }
      }

      typeWriter();
    }
  });
});
