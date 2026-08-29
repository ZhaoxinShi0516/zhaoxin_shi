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
