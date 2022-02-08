import moment from 'moment';


function dateApp() {
    if (process.env.NODE_ENV == "production" || process.env.VUE_APP_DATE == "") {

        return moment().format('YYYY-MM-DD');

    } else {

        return process.env.VUE_APP_DATE;
    }

}

function cleanDate(dateparm) {
    return dateparm.split("T")[0];
}


export { dateApp, cleanDate };