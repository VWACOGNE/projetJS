window.addEventListener("DOMContentLoaded", (event) => {

    // fonction en vanilla JS au demarrage du site: affichage de la météo de lyon
    let url = "https://www.metaweather.com/api/location/609125";
    fetch(url).then(res => res.json())
        .then(data => {
            console.log(data)
            createArticle(data);
            // affiche(data));
        })
        .catch(function () {
            let msg = document.createElement("p");
            msg.innerHTML = "Il y a eu un problème avec votre API";
            document.getElementById("errorAPI").append(msg);
        });
})

// fonction en vanilla JS au click de recherche: affichage de la météo choisie
function printMeteo(input) {
    //requete pour recupérer l'id de la ville
    let url = "https://www.metaweather.com/api/location/search/?query=" + input;
    fetch(url).then(res => res.json())
        .then(data => {
            let infoVille = data[0].woeid;

            //requete pour récupérer les infos de la ville en fonction de son id
            let url = 'https://www.metaweather.com/api/location/' + infoVille;
            fetch(url).then(res => res.json())
                .then(data => {
                    createArticle(data);
                })
        })
        .catch(function () {
            let msg = document.createElement("p");
            msg.innerHTML = "Il y a eu un problème avec votre API";
            document.getElementById("errorAPI").append(msg);
        });
}

//fonction qui créée mes articles
function createArticle(resultR) {
    //j'indique où mes éléments vont etre inséré dans mon HTML :
    let feed = document.querySelector('.feed')
    feed.innerHTML = "";

    for (let id = 0; id < resultR.consolidated_weather.length; id++) {
        //je créé mes élément HTML :
        let article = document.createElement('article');
        let title = document.createElement('h4');
        let date = document.createElement('p');
        let temp = document.createElement('p');
        let image = document.createElement('img');
        let temperature = document.createElement('p');
        //j'ajoute du contenu a mes éléments:
        title.innerText = resultR.title;
        date.innerText = resultR.consolidated_weather[id].applicable_date;
        temp.innerText = resultR.consolidated_weather[id].weather_state_name;
        let info = resultR.consolidated_weather[id].weather_state_abbr;
        image.src = ('https://www.metaweather.com/static/img/weather/png/64/' + info + '.png');
        temperature.innerText = 'Température max:' + resultR.consolidated_weather[id].max_temp + '°';
        //j'envoie mes éléments dans mon HTML
        article.append(title, date, temp, image, temperature);
        feed.append(article)
    }
}

function getValue() {
    let input = document.getElementById("ville").value;
    printMeteo(input);
}
