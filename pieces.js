import { ajoutListenersAvis } from "./avis.js";

const reponse = await fetch(`http://localhost:8081/pieces`);
const pieces = await reponse.json();

const sectionFiches = document.querySelector(".fiches");

// Fonction qui génère l'affichage à partir d'une liste de pièces
function genererPieces(pieces) {
	for (let i = 0; i < pieces.length; i++) {
		const article = pieces[i];

		// Une balise <article> par pièce
		const pieceElement = document.createElement("article");

		const imageElement = document.createElement("img");
		imageElement.src = article.image;

		const nomElement = document.createElement("h2");
		nomElement.innerText = article.nom;

		const prixElement = document.createElement("p");
		prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

		const categorieElement = document.createElement("p");
		categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

		const descriptionElement = document.createElement("p");
		descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";

		const disponibiliteElement = document.createElement("p");
		disponibiliteElement.innerText = `${article.disponibilité == "oui" ? "En stock" : "Rupture de stock"}`;

		const avisBouton = document.createElement("button");
		avisBouton.dataset.id = article.id;
		avisBouton.textContent = "Afficher les avis";

		// On rattache l'article à la section, puis les éléments à l'article
		sectionFiches.appendChild(pieceElement);
		pieceElement.appendChild(imageElement);
		pieceElement.appendChild(nomElement);
		pieceElement.appendChild(prixElement);
		pieceElement.appendChild(categorieElement);
		pieceElement.appendChild(descriptionElement);
		pieceElement.appendChild(disponibiliteElement);
		pieceElement.appendChild(avisBouton);
	}

	ajoutListenersAvis();
}

// Premier affichage de la page
genererPieces(pieces);

// Trier par prix croissant
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", () => {
	const piecesOrdonnees = Array.from(pieces);
	piecesOrdonnees.sort((a, b) => a.prix - b.prix);
	sectionFiches.innerHTML = "";
	genererPieces(piecesOrdonnees);
});

// Trier par prix décroissant
const boutonTrierDec = document.querySelector(".btn-trier_dec");
boutonTrierDec.addEventListener("click", () => {
	const piecesOrdonneesDec = Array.from(pieces);
	piecesOrdonneesDec.sort((a, b) => b.prix - a.prix);
	sectionFiches.innerHTML = "";
	genererPieces(piecesOrdonneesDec);
});

// Filtrer les pièces abordables (≤ 35 €)
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", () => {
	const piecesFiltrees = pieces.filter((piece) => piece.prix <= 35);
	sectionFiches.innerHTML = "";
	genererPieces(piecesFiltrees);
});

// Filtrer les pièces qui ont une description
const boutonFiltrerDesc = document.querySelector(".btn-filtrer_desc");
boutonFiltrerDesc.addEventListener("click", () => {
	const piecesFiltreesDesc = pieces.filter((piece) => piece.description);
	sectionFiches.innerHTML = "";
	genererPieces(piecesFiltreesDesc);
});