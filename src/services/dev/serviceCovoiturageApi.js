// import axios from "axios"
// const urlcovoiturage = process.env.VUE_APP_URLCOVOITURAGE;
import { cleanDate, dateApp } from "@/utils/dateUtils"


class serviceCovoiturageApi {

    static getCovoiturageRepo() {
        return JSON.parse(localStorage.getItem("covoiturageRepo"));
        // return JSON.parse(localStorage.covoiturageRepo); //OK
        // console.log("getCovoiturage repo");
        // return localStorage.getItem("covoiturageRepo");
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


    static getcvResacovoituragesFromRepo(villeDepart, villeArrivee, dateRecherche) {
        console.log("getcvResacovoituragesFromRepo");
        console.log("villeDepart : " + villeDepart);
        console.log("villeArrivee : " + villeArrivee);
        console.log("dateRecherche : " + dateRecherche);


        let dateRechercheClean = cleanDate(dateRecherche);
        if (dateRechercheClean == "") {
            dateRechercheClean = dateApp();
        }

        console.log("dateRechercheClean: " + dateRechercheClean);

        let selectCovoituragesVilleDepart = []
          
        if (villeDepart != null && villeDepart != "") {
            let covoiturage = this.getCvResavoyagesRepo();
            selectCovoituragesVilleDepart = covoiturage.filter(covoiturage => (villeDepart == covoiturage.villeDepart
                && covoiturage.dateDepart >= dateRechercheClean
            ));
        } else {
            selectCovoituragesVilleDepart = this.getCvResavoyagesRepo();
        }

        if (villeArrivee != null && villeArrivee != "") {
            return selectCovoituragesVilleDepart.filter(covoiturage => (villeArrivee == covoiturage.villeArrivee
                && covoiturage.dateDepart >= dateRechercheClean));
        }
        return selectCovoituragesVilleDepart;
    }

    static getCovoiturageFromDepartArriveeDateFromAPiToStore(villeDepart, villeArrivee, dateRecherche) {
        // console.log("covoiturage getAll pour userId : ", userId);
        let response = { "data": {} };
        response["data"] = this.getcvResacovoituragesFromRepo(villeDepart, villeArrivee, dateRecherche);
        return new Promise(function (resolve) { resolve(response); });
    }


}

export { serviceCovoiturageApi }