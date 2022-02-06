import { cleanDate, dateApp } from "@/utils/dateUtils";

function getcvResacovoituragesFromArray(villeDepart, villeArrivee, dateRecherche, cvArray) {
    console.log("getcvResacovoituragesFromArray");
    console.log("villeDepart : " + villeDepart);
    console.log("villeArrivee : " + villeArrivee);
    console.log("dateRecherche : " + dateRecherche);


    let dateRechercheClean = cleanDate(dateRecherche);
    if (dateRechercheClean == "") {
        dateRechercheClean = dateApp();
    }

    console.log("dateRechercheClean: " + dateRechercheClean);

    let covoiturage = cvArray;
    return covoiturage.filter(covoiturage => ((covoiturage.villeDepart.includes(villeDepart) && covoiturage.villeArrivee.includes(villeArrivee))
        && covoiturage.dateDepart >= dateRechercheClean
    ));

}


export {getcvResacovoituragesFromArray};