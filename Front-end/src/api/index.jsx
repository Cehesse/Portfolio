//const baseURL = "../src/datas/";
const baseURL = "http://cehess.github.io/Portfolio/api/";

// Fonction pour effectuer des appels à l"API

var callAPI = async (apiEndpointurl) => {
    try{
        const response = await fetch(`${baseURL}${apiEndpointurl}`);
        const datas = await response.json();
        //console.log(datas)
        return datas;
    }
    catch (error) {
        console.error("Erreur lors de l'appel à l'API : Endpoint URL inconnu");
    }
  }

export default callAPI;