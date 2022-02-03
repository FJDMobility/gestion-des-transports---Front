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
}

export { serviceCovoiturageApi }