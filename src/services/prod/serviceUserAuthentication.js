import axios from "axios"
const urlAuthtentcation = process.env.VUE_APP_BASE + "authenticate";
const urlUserInfo = process.env.VUE_APP_BASE + "user";

class serviceUserAuthentication {
    static autenticate(user) {
        return axios.post(urlAuthtentcation, user)
    }

    static getUserInformation(headers) {
        return axios.get(urlUserInfo, {headers})        
    }
}
export { serviceUserAuthentication }