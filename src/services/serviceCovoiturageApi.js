// import axios from "axios"



// const urlcovoiturage = process.env.VUE_APP_URLCOVOITURAGE;

let allcovoiturageuser = {
    "covoiturages":
        [{
            "id": 1,
            "dateDepart": "2022-02-15T8:00",
            "voiture": {
                "id": 1,
                "marque": "renault",
                "model": "twingo",
                "nbrPlaces": 3,
                "immatriculation": "1234 tt 25"
            },
            "participant": [{
                "id": 2,
                "nom": "Martin",
                "prenom": "Gerard",
                "mail": "gerard.martin@covoit.com"
            },
            {
                "id": 3, 
                "nom": "Durant",
                "prenom": "michel",
                "mail": "michel.durant@covoit.com"
            },
            {
                "id": 1,
                "nom": "Mourier",
                "prenom": "Denis",
                "mail": "denis.mourier@covoit.com"
            }
            ],
            "villeDepart": "Nîmes",
            "villeArrivee": "Montpellier",
            "placesDisponibles": 3
        },
        {
            "id": 2,
            "dateDepart": "2022-02-16T8:00",
            "voiture": {
                "id": 1,
                "marque": "renault",
                "model": "clio",
                "nbrPlaces": 2,
                "immatriculation": "567 tt 25"
            },
            "participant": [{
                "id": 3,
                "nom": "Durant",
                "prenom": "michel",
                "mail": "michel.durant@covoit.com"
            },
            {
                "id": 1,
                "nom": "Mourier",
                "prenom": "Denis",
                "mail": "denis.mourier@covoit.com"
            }],
            "villeDepart": "Nîmes",
            "villeArrivee": "Le grau du roi",
            "placesDisponibles": 0,
        },
        {
            "id": 3,
            "dateDepart": "2022-02-17T8:00",
            "voiture": {
                "id": 1,
                "marque": "renault",
                "model": "clio",
                "nbrPlaces": 2,
                "immatriculation": "567 tt 25"
            },
            "participant": [{
                "id": 1,
                "nom": "Mourier",
                "prenom": "Denis",
                "mail": "denis.mourier@covoit.com"
            }],
            "villeDepart": "Nîmes",
            "villeArrivee": "Uzes",
            "placesDisponibles": 0,
        }
        ]
};


export default class serviceCovoiturageApi {
    static getAll(userId) {
        console.log("covoiturage getAll pour userId : ", userId)
        // return axios.get(urlbq + "/all")
        return JSON.stringify(allcovoiturageuser) ;
    }


    // static create(client) {
    //     axios.create(urlbq, client);
    // }
}