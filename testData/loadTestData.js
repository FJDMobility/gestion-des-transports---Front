const allcovoiturageuser = require("./testDonneesBase.json");
localStorage.removeItem("covoiturageRepo");
localStorage.setItem("covoiturageRepo", JSON.stringify(allcovoiturageuser));
