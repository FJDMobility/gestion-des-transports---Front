function loadTestData() {
// const allcovoiturageuser = require("./testDonneesBase.json");
const allcovoiturageuser = require("./covoiturages.json");
localStorage.removeItem("covoiturageRepo");
localStorage.setItem("covoiturageRepo", JSON.stringify(allcovoiturageuser));
}

export {loadTestData}