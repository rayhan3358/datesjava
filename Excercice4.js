function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    
    document.getElementById('hours').innerHTML= hrs;
    document.getElementById('minutes').innerHTML= min;
    document.getElementById('seconds').innerHTML= sec;

}
setInterval(displayTime,10);

var dateDiv = document.querySelector('.date')
var affichageHeure = function() {
    var today,annee,listemois,mois,listJours,jourNumero,jourNom,heures,
    minutes,secondes,deuxChiffres

    today = new Date();

    annee = today.getFullYear();
    
    listemois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];
    mois = listemois[today.getMonth()];

    jourNumero= today.getDate();

    listJours = ["Dimache","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    jourNom = listJours[today.getDay()];

    deuxChiffres = function(element){
        if(element < 10){
            return element = "0"+ element;
        }else{
            return element;
        }

    }
    heures = deuxChiffres(today.getHours());
    

}