const conteneur = document.querySelector('.conteneur');
const sections = document.querySelectorAll('.sections');
const liens = document.querySelectorAll('a[data-value]');

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




const ouvrir = document.querySelectorAll('[data-modale]');
const fermer = document.querySelectorAll('.btn-fermer');

for(let ouvre of ouvrir){
    ouvre.addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.currentTarget.dataset.modale;
        const modale = document.getElementById(id);
        modale.showModal();
    });
}

for(let ferme of fermer){
    ferme.addEventListener('click', (event) => {
        const modale = event.currentTarget.closest('.modal'); 
        modale.close();
    });
}


