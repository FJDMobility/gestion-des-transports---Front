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
        let selectedItems = getcvResacovoituragesFromArray(villeDepart, villeArrivee, dateRecherche, this.getCvResavoyagesRepo());
        // nettoyage de l'objet covoiturage de la base de Dev 
        // pour être dans les conditions de la Prod
        selectedItems.forEach(element => {
        delete element['voiture'];
        delete element['participant'];
        delete element['organisateur'];
        });
        
        // ---------------------------------------------------
        console.log("retour liste covoiturage (sans les participants, ...) : " + JSON.stringify(selectedItems[0]))
        response["data"] = selectedItems;
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
        let response = {
            "data": {},
            "status": 200,
            "statusText": "OK"
        };
        this.addUserToCovoiturageRepo(covoiturageId, user);
        return new Promise(function (resolve) { resolve(response); }); // utiliser plutôt axios pour générer une réponse valide ???
        // cf option -> adapter: function(config){}
    }

    static getCovoiturageFullDataFromApi(covoiturageId) {
        let repo = this.getCvResavoyagesRepo();
        let covoiturageresa = repo
            .filter(cvElement => {
                return cvElement.id == covoiturageId;
            })
            // .map((cvElement) => {
            //     return cvElement.participant
            // });
        console.log("service - getCovoiturageFullDataFromApi covoiturageresa = " + covoiturageresa)
        console.log("covoiturageId : " + covoiturageId)
        let response = { "data": {} };
        response["data"] = covoiturageresa;
        return new Promise(function (resolve) { resolve(response); });
     
    }

    static getParticipantsCovoiturage(covoiturageId) {
        let repo = this.getCvResavoyagesRepo();
        let participants = repo
            .filter(cvElement => {
                return cvElement.id == covoiturageId;
            })
            .map((cvElement) => {
                return cvElement.participant
            });
        let response = { "data": {} };
        response["data"] = participants;
        return new Promise(function (resolve) { resolve(response); });
     
    }



    static getOrganisateurCovoiturage(covoiturageId) {
        let repo = this.getCvResavoyagesRepo();
        let organisateur = repo
            .filter(cvElement => {
                return cvElement.id == covoiturageId;
            })
            .map((cvElement) => {
                return cvElement.organisateur
            });
        let response = { "data": {} };
        response["data"] = organisateur;
        return new Promise(function (resolve) { resolve(response); });
       
    }


    static getVehiculeCovoiturage(covoiturageId) {
        let repo = this.getCvResavoyagesRepo();
        let voiture = repo
            .filter(cvElement => {
                return cvElement.id == covoiturageId;
            })
            .map((cvElement) => {
                return cvElement.voiture
            });
        let response = { "data": {} };
        response["data"] = voiture;
        return new Promise(function (resolve) { resolve(response); });
        

    }
}


export { serviceCovoiturageApi }