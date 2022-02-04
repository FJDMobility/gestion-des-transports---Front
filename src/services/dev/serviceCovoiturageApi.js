// import axios from "axios"
// const urlcovoiturage = process.env.VUE_APP_URLCOVOITURAGE;


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


    static getcvResacovoituragesFromRepo(villeDepart, villeArrivee) {
        if (villeDepart != null && villeDepart != "") {
            let covoiturage = this.getCvResavoyagesRepo();
            let selectCovoiturages = covoiturage.filter(covoiturage => villeDepart == covoiturage.villeDepart);
            return selectCovoiturages;
        }

        if (villeArrivee != null && villeArrivee != "") {
            return villeArrivee;
        }
    }

    static getCovoiturageFromDepartArriveeDate(villeDepart, villeArrivee) {
        // console.log("covoiturage getAll pour userId : ", userId);
        let response = { "data": {} };
        response["data"] = this.getcvResacovoituragesFromRepo(villeDepart, villeArrivee);
        return new Promise(function (resolve) {resolve(response);});
    }


}

export { serviceCovoiturageApi }