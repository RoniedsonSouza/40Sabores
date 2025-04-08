// config.js
const routes = {
    home: "index.html",
    produtos: "produtos.html",
    lojas: "lojas.html",
    historia: "historia.html"
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-link]").forEach(el => {
      const rota = el.getAttribute("data-link");
      if (routes[rota]) {
        if (el.tagName.toLowerCase() === "a") {
          el.setAttribute("href", routes[rota]);
        } else {
          el.addEventListener("click", () => {
            window.location.href = routes[rota];
          });
        }
      }
    });
  });
  