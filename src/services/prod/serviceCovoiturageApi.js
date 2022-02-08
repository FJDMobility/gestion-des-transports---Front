import axios from "axios"
const urlcovoiturage = process.env.VUE_APP_URLCOVOITURAGE;


class serviceCovoiturageApi {

    static getAll(headers) {
        console.log("header : " + headers);
        return axios.get(urlcovoiturage + "/all",{headers})
      }

    /*    static annulerCovoiturage(id, userId) {
            axios.delete(urlcovoiturage +"/"+id)
        }*/

    // static create(client) {
    //     axios.create(urlbq, client);
    // }
}
export { serviceCovoiturageApi }