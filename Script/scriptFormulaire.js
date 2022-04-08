function getValueForm() {
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
    title.innerText = titleForm;
    commentaire.innerText = commentaireForm;

    //j'envoie mes éléments dans mon HTML
    article.append(title, commentaire);
    form.append(article)

}