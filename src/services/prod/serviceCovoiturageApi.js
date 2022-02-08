import axios from "axios"
const urlcovoiturage = process.env.VUE_APP_URLCOVOITURAGE;


class serviceCovoiturageApi {

    static getAll(headers) {
        console.log("header : " + headers);
        return axios.get(urlcovoiturage + "/all",{headers})
      }

    static getCovoiturageFromDepartArriveeDateFromAPiToStore(villeDepart, villeArrivee, dateRecherche) {
        return axios.get(urlcovoiturage +
            `/covoiturages?villeDepart=${villeDepart}&villeArrivee=${villeArrivee}&dateRecherche=${dateRecherche}`);
    }
    //requete :
    // covoiturage.filter(covoiturage => ((covoiturage.villeDepart.includes(villeDepart) && covoiturage.villeArrivee.includes(villeArrivee))
    // && covoiturage.dateDepart >= dateRechercheClean))


    static sendReservation(covoiturageId, user) {
        axios.post(urlcovoiturage + "covoiturages/reservation/add/", 
        { "covoiturageId": covoiturageId, "userid": user.id }, 
        // withCredentials: false,
        // auth: {
        //     username: 'janedoe',
        //     password: 's00pers3cret'
        //   },
        // responseType: 'json', // default
        )
    }
}

export { serviceCovoiturageApi }