$(document).ready(function () {
    $.ajax({
        //L'URL de la requête

        url: 'https://www.metaweather.com/api/location/609125',

        //La méthode d'envoi (type de requête)
        method: "GET",

        //Le format de réponse attendu
        dataType: "json",
    })
        .done(function (response) {
            createArticle(response);
        })
});

function printMeteo(input) {
    $.ajax({
        url: "https://www.metaweather.com/api/location/search/?query=" + input,
        method: "GET",
        dataType: "json",
    })
        .done(function (response) {
            let infoVille = response[0].woeid;
            $.ajax({
                //L'URL de la requête

                url: 'https://www.metaweather.com/api/location/' + infoVille,

                //La méthode d'envoi (type de requête)
                method: "GET",

                //Le format de réponse attendu
                dataType: "json",
            })
                .done(function (response) {
                    createArticle(response);
                })
        })
        .fail(function (error) {
            let p = $('<p class="messageError">');
            p.text(("La requête s'est terminée en échec. Infos : " + JSON.stringify(error)));
            $('.formulaire').append(p);
        })
}

//fonction qui créé mes articles
function createArticle(resultR) {
    $('.feed').empty()
    for (let id = 0; id < resultR.consolidated_weather.length; id++) {
        let article = $('<article>');
        let title = $('<h4>');
        let date = $('<p>');
        let temp = $('<p>');
        let image = $('<img>');
        let temperature = $('<p>');

        title.text(resultR.title);
        date.text(resultR.consolidated_weather[id].applicable_date);
        temp.text(resultR.consolidated_weather[id].weather_state_name);
        let info = resultR.consolidated_weather[id].weather_state_abbr;
        image.attr("src", 'https://www.metaweather.com/static/img/weather/png/64/' + info + '.png');
        temperature.text('Température max:'+resultR.consolidated_weather[id].max_temp+'°');

        article.append(title, date, temp, image, temperature);
        $('.feed').append(article);
    }
}

function getValue() {
    let input = document.getElementById("ville").value;
    printMeteo(input);
}
