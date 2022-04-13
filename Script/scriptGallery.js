window.addEventListener("DOMContentLoaded", (event) => {
// fonction du dropdown (menu)
    document.getElementById("dropdownId").addEventListener('click', dropdown)
})
//Bouton de selection d'import d'image
    document.getElementById('importImg').addEventListener('click', getValueImg)

//bouton de selection mozaic ou colonne
    document.getElementById("column").addEventListener("click", column)
    document.getElementById("row").addEventListener("click", row)

//bouton de selection affichage colone ou mozaic
    let elements = document.getElementsByClassName("column");
    let elements2 = document.getElementsByClassName("img");
    let i;

    function row() {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.flexDirection = "row";
        }
        for (i = 0; i < elements2.length; i++) {
            elements2[i].style.width = "24vw"
        }
    }

    function column() {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.flexDirection = "column";
        }
        for (i = 0; i < elements2.length; i++) {
            elements2[i].style.width = "100vw"
        }
        console.log(elements2)
    }


    function getValueImg() {
        if (document.getElementById("lienImg").value == "") {
            alert("Renseignez un lien d'image");
            document.getElementById("lienImg").focus();
            return false;
        } else {
            let newImg = document.getElementById("lienImg").value;
            createImg(newImg)
        }
    }

//-------------------------- supprimer une image----------------------
    document.addEventListener('dblclick', suppr)

    function suppr(event) {
    let cible = event.target;
    let classImg = cible.getAttribute('class')
        if (classImg == 'img'){
            cible.remove();
        }

    }
//-------------------------- ajouter une image----------------------
    function createImg(resultR) {
        //j'indique où mes éléments vont etre inséré dans mon HTML :
        let column = document.querySelector('.column')
        // feed.innerHTML = "";

        //je créé mes élément HTML :
        let image = document.createElement('img');
        image.className = "img"
        //j'ajoute du contenu a mes éléments:
        image.src = (resultR);
        //j'envoie mes éléments dans mon HTML

        column.prepend(image)

    }
