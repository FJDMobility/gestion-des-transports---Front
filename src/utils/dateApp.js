import moment from 'moment';


export default function dateApp() {
    if (process.env.NODE_ENV == "production" || process.env.VUE_APP_DATE == "") {

        return moment().format('YYYY-MM-DD');

    } else {

        return process.env.VUE_APP_DATE;
    }

}


export { dateApp };