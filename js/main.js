const conteneur = document.querySelector('.conteneur');
const sections = document.querySelectorAll('.sections');
const liens = document.querySelectorAll('.liens');

let nbSections = sections.length;
conteneur.style.setProperty('--nb-sections', nbSections);

conteneur.style.setProperty('--index', 0);

for(let lien of liens){
    lien.addEventListener('click', (event) => {
        event.preventDefault();
        let valeur = event.currentTarget.dataset.value;
        conteneur.style.setProperty('--index', valeur);
    });
}
