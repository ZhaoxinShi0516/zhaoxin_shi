const nav = document.getElementById("nav");
const hero = document.querySelector(".hero");

function updateNav() {
  if (!nav || !hero) {
    return;
  }

  const threshold = hero.offsetHeight - 90;

  nav.classList.toggle(
    "scrolled",
    window.scrollY > threshold
  );
}

updateNav();

window.addEventListener(
  "scroll",
  updateNav,
  { passive: true }
);


/* Shared footer */

const footerContainer = document.getElementById("site-footer");

if (footerContainer) {
  fetch("./footer.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Could not load footer.html");
      }

      return response.text();
    })
    .then(data => {
      footerContainer.innerHTML = data;
    })
    .catch(error => {
      console.error("Footer loading error:", error);
    });
}