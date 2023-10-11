//const baseURL = "../src/datas/"; //Local
const baseURL = "https://cehesse.github.io/Portfolio/assets/"; //Online Github Pages

// Fonction pour effectuer des appels à l"API

var callAPI = async (apiEndpointurl) => {
    try{
        const response = await fetch(`${baseURL}${apiEndpointurl}`);
        const datas = await response.json();
        return datas;
    }
    catch (error) {
        console.error("Erreur lors de l'appel à l'API : Endpoint URL inconnu");
    }
  }

export default callAPI;