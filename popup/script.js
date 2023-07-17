function iniciaModal(modalID) {
  if (localStorage.fechaModal !== "modal-promocao") {
    const modal = document.getElementById(modalID);
    if (modal) {
      modal.classList.add("mostrar");
      modal.addEventListener("click", (e) => {
        if (e.target.id == "modal-promocao" || e.target.className == "fechar") {
          modal.classList.remove("mostrar");
          // localStorage.fechaModal = "modal-promocao";
        }
      });
    }
  }
}

const botao = document.getElementById("botao");
botao.addEventListener("click", () => iniciaModal("modal-promocao"));

document.addEventListener("scroll", () => {
  //essa função ativa o popup quando o scroll na vertical chegar a 800
  if (window.scrollY > 800) {
    iniciaModal("modal-promocao");
  }
});
