// ===================================== Accordion js================================================
document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".accordion-header");
  
    headers.forEach((header) => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;  
        const icon = header.querySelector(".icon");
  
        headers.forEach((otherHeader) => {
          const otherContent = otherHeader.nextElementSibling;
          const otherIcon = otherHeader.querySelector(".icon");
  
          if (otherHeader !== header) {
            otherContent.classList.add("hidden");
            otherContent.style.maxHeight = null;
            otherIcon.classList.remove("active");
            otherIcon.src = "/assets/image/svg/plus-icon.svg";
          }
        });
  
        const isHidden = content.classList.contains("hidden");
        content.classList.toggle("hidden");
  
        if (isHidden) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = null;
        }
        icon.classList.toggle("active");
        icon.src = isHidden
          ? "assets/image/svg/minus-icon.svg"
          : "/assets/image/svg/plus-icon.svg";
      });
    });
  });

   //========================  current year  =============================
   const currentYear = new Date().getFullYear();
   document.getElementById("current-year").textContent = currentYear;