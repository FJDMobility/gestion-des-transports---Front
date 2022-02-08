function loadTestData() {
// const allcovoiturageuser = require("./testDonneesBase.json");
const allcovoiturageuser = require("./covoiturages.json");
localStorage.removeItem("covoiturageRepo");
localStorage.setItem("covoiturageRepo", JSON.stringify(allcovoiturageuser));

const cvResavoyages = require("./cvResavoyagesRepo.json");
localStorage.removeItem("cvResavoyagesRepo");
localStorage.setItem("cvResavoyagesRepo", JSON.stringify(cvResavoyages));
}


export {loadTestData}