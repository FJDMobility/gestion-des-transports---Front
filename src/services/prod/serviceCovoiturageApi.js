import axios from "axios"
const urlcovoiturage = process.env.VUE_APP_URLCOVOITURAGE;


class serviceCovoiturageApi {

    static getAll (userId) {
        console.log("USER ID : " + userId);
        return axios.get(urlcovoiturage + "/all");     
    } 

/*    static annulerCovoiturage(id, userId) {
        axios.delete(urlcovoiturage +"/"+id)
    }*/

    // static create(client) {
    //     axios.create(urlbq, client);
    // }
}
export  {serviceCovoiturageApi}