const monBouton = document.getElementById('mon-bouton');
const scoreAffichage = document.getElementById('score');
const levelUp = document.getElementById('level-up');
const niveauAffichage = document.getElementById('niveau');
const efficience = document.getElementById('efficience');
const price = document.getElementById('price');
const priceAffichage = document.getElementById('price-affichage');
let score = 0;
let niveau = 0;
let efficienceScore = 1;

monBouton.addEventListener('click', () => {
    score = score + 1 * (efficienceScore);
    scoreAffichage.textContent = score;
});


levelUp.addEventListener('click', () => {
    if (score >= 10 * efficienceScore*0.5) {
        score = score - 10 * efficienceScore*0.5;
        scoreAffichage.textContent = score;
        niveau = niveau + 1;
        niveauAffichage.textContent = niveau;
        efficienceScore = efficienceScore + niveau*2;
        efficience.textContent = `x${efficienceScore}`;
    }
});


