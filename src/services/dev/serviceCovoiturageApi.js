// import axios from "axios"
// const urlcovoiturage = process.env.VUE_APP_URLCOVOITURAGE;
// import { cleanDate, dateApp } from "@/utils/dateUtils"
// import {getcvResacovoituragesFromArray} from "@/services/rqResaCovoiturage"
import { getcvResacovoituragesFromArray } from "@/model/requests/rqResaCovoiturage"


class serviceCovoiturageApi {

    static getCovoiturageRepo() {
        return JSON.parse(localStorage.getItem("covoiturageRepo"));
    }

    static storeCovoiturageRepo(repo) {
        localStorage.setItem("covoiturageRepo", JSON.stringify(repo));
    }

    static getAll(userId) {
        console.log("covoiturage getAll pour userId : ", userId);
        let response = { "data": {} };
        response["data"] = this.getCovoiturageRepo();
        return new Promise(function (resolve) {
            resolve(response);
            // reject("erreur getAll covoiturage test");

        })
    }
    // ******************************
    // ecran CovoiturageResa :
    // ******************************

    static getCvResavoyagesRepo() {
        return JSON.parse(localStorage.getItem("cvResavoyagesRepo"));
    }

    static storeCvResavoyagesRepo(repo) {
        localStorage.setItem("cvResavoyagesRepo", JSON.stringify(repo));
    }


    static getCovoiturageFromDepartArriveeDateFromAPiToStore(villeDepart, villeArrivee, dateRecherche) {
        // console.log("covoiturage getAll pour userId : ", userId);
        let response = { "data": {} };
        response["data"] = getcvResacovoituragesFromArray(villeDepart, villeArrivee, dateRecherche, this.getCvResavoyagesRepo());
        return new Promise(function (resolve) { resolve(response); });
    }

    static addParticipant(repo, covoiturageId, user) {
        repo.forEach(element => {
            if (element.id == covoiturageId) {
                element.participant.push(user)
            }
        })
        return repo;
    }

    static addUserToCovoiturageRepo(covoiturageId, user) {
        let repo = this.getCvResavoyagesRepo();
        repo = this.addParticipant(repo, covoiturageId, user);
        this.storeCvResavoyagesRepo(repo);
    }

    static sendReservation(covoiturageId, user) {
        console.log("ajouter resa pour user sur covoiturage id :" + covoiturageId)
        let response = {"data":{},
                        "status":200,
                        "statusText":"OK"};
        this.addUserToCovoiturageRepo(covoiturageId, user);
        return new Promise(function (resolve) { resolve(response); }); // utiliser plutôt axios pour générer une réponse valide ???
                                                                          // cf option -> adapter: function(config){}
    }


}

export { serviceCovoiturageApi }