// import axios from "axios"
// const urlcovoiturage = process.env.VUE_APP_URLCOVOITURAGE;
// import { cleanDate, dateApp } from "@/utils/dateUtils"
// import {getcvResacovoituragesFromArray} from "@/services/rqResaCovoiturage"
import {getcvResacovoituragesFromArray} from "@/model/requests/rqResaCovoiturage"


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


    static addUserToCovoiturageRepo(covoiturageId, userId) {
        let repo = this.getCvResavoyagesRepo();
        userId;
        repo["id" == covoiturageId].participant.push(this.$store.getters.getUser);
        this.storeCvResavoyagesRepo(repo);
    }

    static sendReservation(covoiturageId, userId) {
        console.log("ajouter resa pour user : " + userId + "covoiturage : " + covoiturageId)
        let response = {};
        this.addUserToCovoiturageRepo(covoiturageId, userId);
        return new Promise(function (resolve) { resolve(response.OK); });
    }


}

export { serviceCovoiturageApi }