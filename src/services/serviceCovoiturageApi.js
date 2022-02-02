// import axios from "axios"



// const urlcovoiturage = process.env.VUE_APP_URLCOVOITURAGE;


export default class serviceCovoiturageApi {


    static getCovoiturageRepo() {
        return JSON.parse(localStorage.covoiturageRepo);
        // console.log("getCovoiturage repo");
        // return localStorage.getItem("covoiturageRepo");
    }


    static storeCovoiturageRepo(repo) {
        localStorage.setItem("covoiturageRepo", JSON.stringify(repo)) ;
    }


    static getAll(userId) {
        console.log("covoiturage getAll pour userId : ", userId)
        // return axios.get(urlbq + "/all")
        return this.getCovoiturageRepo();
    }

    static annulerCovoiturage(id, userId) {
        console.log("annulation du covoiturage : ", id);
        let covoiturageRepo = JSON.parse(this.getCovoiturageRepo());
        // let covoiturageRepo = this.getCovoiturageRepo();
        console.log(covoiturageRepo.covoiturages[id]);

        delete covoiturageRepo.covoiturages[id].participant[userId];
        // covoiturage

        console.log(covoiturageRepo.covoiturages[id]);
        this.storeCovoiturageRepo(covoiturageRepo);

    }

    // static create(client) {
    //     axios.create(urlbq, client);
    // }
}