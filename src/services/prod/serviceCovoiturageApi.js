import axios from "axios"
const urlcovoiturage = process.env.VUE_APP_URLCOVOITURAGE;


class serviceCovoiturageApi {

    static getAll(userId) {
        console.log("USER ID : " + userId);
        return axios.get(urlcovoiturage + "/all")
      }

    static getCovoiturageFromDepartArriveeDateFromAPiToStore(villeDepart, villeArrivee, dateRecherche) {
        return axios.get(urlcovoiturage + `/covoiturages?villeDepart=${villeDepart}&villeArrivee=${villeArrivee}&dateRecherche=${dateRecherche}`)

//requete :
// covoiturage.filter(covoiturage => ((covoiturage.villeDepart.includes(villeDepart) && covoiturage.villeArrivee.includes(villeArrivee))
// && covoiturage.dateDepart >= dateRechercheClean))

    }
}
export { serviceCovoiturageApi }