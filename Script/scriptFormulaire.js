document.getElementById('importCom').addEventListener('click', getValueForm)
function getValueForm() {

    if (document.getElementById("title").value === "") {
        alert("Renseignez un titre d'article");
        document.getElementById("title").focus();
        return false;
    }
    if (document.getElementById("commentaire").value === "") {
        alert("Pensez à taper un message !");
        document.getElementById("commentaire").focus();
        return false;
    }
    message = document.getElementById("commentaire").value;
    if (message.length < 10 || message.length >= 120) {
        alert("Tapez un message compris entre 10 et 120 caractères");
        return false;
    }

    let title = document.getElementById("title").value;
    let commentaire = document.getElementById("commentaire").value;
    createArticleCom(title, commentaire);
}

function createArticleCom(titleForm, commentaireForm) {

    let form = document.querySelector('.form')
    //je créé mes élément HTML :
    let article = document.createElement('article');
    let title = document.createElement('h4');
    let commentaire = document.createElement('p');

    //j'ajoute du contenu a mes éléments:
    article.className = 'commentaire'
    title.innerText = titleForm;
    commentaire.innerText = commentaireForm;

    //j'envoie mes éléments dans mon HTML
    article.append(title, commentaire);
    form.append(article)

}
//-------------------------- supprimer un com----------------------
document.addEventListener('dblclick', supprCom)

function supprCom(event) {
    let cible = event.target;
    let classC = cible.getAttribute('class')
    if (classC == 'commentaire'){
        cible.remove();
    }

}