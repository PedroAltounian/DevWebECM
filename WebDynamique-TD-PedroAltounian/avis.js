export function ajoutListenersAvis() {
  const piecesElements = document.querySelectorAll(".fiches article button");

  for (let i = 0; i < piecesElements.length; i++) {
    piecesElements[i].addEventListener("click", async (event) => {
      const id = event.target.dataset.id;

      // 1. Espera a resposta do servidor
      const reponse = await fetch(`http://localhost:8081/pieces/${id}/avis`);
      // 2. Converte a resposta (JSON) em objeto JavaScript
      const avis = await reponse.json();

      // 3. Mostra os avisos na página, dentro do <article> da peça
      const pieceElement = event.target.parentElement;
      const avisElement = document.createElement("p");
      for (let j = 0; j < avis.length; j++) {
        avisElement.innerHTML += `<b>${avis[j].utilisateur}:</b> ${avis[j].commentaire}<br>`;
      }
      pieceElement.appendChild(avisElement);
    });
  }
}
