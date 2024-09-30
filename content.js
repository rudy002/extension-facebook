// Fonction pour ajouter un bouton "extraire" à chaque post
function ajouterBoutonsExtraire() {
  // Sélectionne tous les conteneurs des boutons (J'aime, Commenter, Partager)
  const posts = document.querySelectorAll('div[aria-label="J’aime"]');

  // Boucle à travers chaque post pour ajouter un bouton "extraire"
  posts.forEach(post => {
    // Vérifiez si le bouton "extraire" est déjà présent pour éviter les doublons
    if (!post.parentNode.querySelector('.btn-extraire')) {
      // Créez un nouveau bouton "extraire"
      const extraireBtn = document.createElement('button');
      extraireBtn.innerText = 'Extraire';
      extraireBtn.classList.add('btn-extraire');
      extraireBtn.style.marginLeft = '10px'; // Ajouter de l'espace entre les boutons

      // Ajoutez le bouton juste après le conteneur des boutons actuels
      post.parentNode.appendChild(extraireBtn);
    }
  });
}

// Fonction pour observer les changements dans le DOM et ajouter les boutons dynamiquement
const observer = new MutationObserver(() => {
  ajouterBoutonsExtraire();
});

// Configuration de l'observation pour surveiller tout changement dans le corps de la page
observer.observe(document.body, { childList: true, subtree: true });

// Appel initial pour ajouter les boutons immédiatement
ajouterBoutonsExtraire();
