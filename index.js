$(document).ready(function(){
    $.ajax({
        //L'URL de la requête
        url: "https://www.metaweather.com/api/location/44418/",

        //La méthode d'envoi (type de requête)
        method: "GET",

        //Le format de réponse attendu
        dataType : "json",
    })
        //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
        /*On peut par exemple convertir cette réponse en chaine JSON et insérer
         * cette chaine dans un div id="res"*/
        .done(function(response){
            for (let id = 0; id < response.consolidated_weather.length; id++){
                console.log(response.title)
            console.log(response.consolidated_weather[id])
                console.log(response.consolidated_weather[id].applicable_date)
                console.log(response.consolidated_weather[id].weather_state_name)
                let article = $('<article>');
                let title = $('<h4>');
                let date = $('<p>');
                let temp= $('<p>');

                title.text(response.title);
                date.text(response.consolidated_weather[id].applicable_date);
                temp.text(response.consolidated_weather[id].weather_state_name)
                article.append(title, date, temp);
                $('.feed').prepend(article);
          //  let data = JSON.stringify(response);
          //  $("div#res").append(data);
            }

            //$('<p>').html(response.consolidated_weather[id].applicable_date).appendTo('article');
        })

        //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
        //On peut afficher les informations relatives à la requête et à l'erreur
        .fail(function(error){
            alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        //Ce code sera exécuté que la requête soit un succès ou un échec
        .always(function(){
            alert("Requête effectuée");
        });
});
