const monBouton = document.getElementById('mon-bouton');
const scoreAffichage = document.getElementById('score');
const levelUp = document.getElementById('level-up');
const niveauAffichage = document.getElementById('niveau');
const efficience = document.getElementById('efficience');
const price = document.getElementById('price');
const priceAffichage = document.getElementById('price-affichage');
const txtLvl = document.getElementById('txtLvl');
const txtEff = document.getElementById('txtEff');
let score = 0;
let niveau = 0;
let efficienceScore = 1;

monBouton.addEventListener('click', () => {
    score = score + 1 * (efficienceScore);
    scoreAffichage.textContent = score;
    if (score >=10){
        if (score >= 10 * efficienceScore*0.5) {
            levelUp.style.opacity = 1;
        }
    }
});


levelUp.addEventListener('click', () => {
    if (score >= 10 * efficienceScore*0.5) {
        score = score - 10 * efficienceScore*0.5;
        scoreAffichage.textContent = score;
        niveau = niveau + 1;
        niveauAffichage.textContent = niveau;
        efficienceScore = 2 ** niveau;
        efficience.textContent = `x${efficienceScore}`;
        if (niveau >= 1) {
            txtLvl.style.opacity = 1;
            txtEff.style.opacity = 1;
        }
        if (score <= 10 * efficienceScore*0.5) {
            levelUp.style.opacity = 0;
        }
    }
});


