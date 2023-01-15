import apiFacade from "./apiFacade.js";
import {API_URL} from "../../settings.js";
import loginFacade from "./loginFacade.js";

function BoatFacade() {

    const getAllBoats = (updateAction, setErrorMessage) => {
        return apiFacade.fetchData("boats/all", updateAction, setErrorMessage)
    }

    const getBoatsByHarbour = (harbourName, updateAction, setErrorMessage) => {
        return apiFacade.fetchData("boats/" + harbourName, updateAction, setErrorMessage)
    }

    const createBoat = (boatBrand, boatMake, boatName, boatImage, harbourID) => {
        const options = apiFacade.makeOptions("POST", null,
            {
                "boatBrand": boatBrand,
                "boatMake": boatMake,
                "boatName": boatName,
                "boatImage": boatImage,
                "harbour": {
                    "harbourID": harbourID
                }
            })
        return fetch(API_URL + "/api/boats", options)
            .then(apiFacade.handleHttpErrors)
    }

    const assignBoatToHarbour = (boatID, harbourID) => {
        const options = apiFacade.makeOptions("POST", null, null);
        return fetch(API_URL + "/api/boats/assign/" + boatID + "/" + harbourID, options)
            .then(apiFacade.handleHttpErrors)
    }

    const updateBoat = (boatID, boatBrand, boatMake, boatName, boatImage, harbourID) => {
        const options = apiFacade.makeOptions("PUT", null,
            {
                "boatBrand": boatBrand,
                "boatMake": boatMake,
                "boatName": boatName,
                "boatImage": boatImage,
                "harbour": {
                    "harbourID": harbourID
                }
            }
        )
        return fetch(API_URL + "/api/boats/update/" + boatID, options)
            .then(apiFacade.handleHttpErrors)
    }


    // const updateBoat = (boat) => {
    //     const options = apiFacade.makeOptions("PUT", null, boat)
    //     return fetch(API_URL + "/api/boats/update", options)
    //         .then(apiFacade.handleHttpErrors)
    // }

    const deleteBoat = (boatID) => {
        const options = apiFacade.makeOptions("DELETE", null, null);
        return fetch(API_URL + "/api/boats/" + boatID, options)
            .then(apiFacade.handleHttpErrors)
    }

    return {
        getAllBoats,
        getBoatsByHarbour,
        createBoat,
        assignBoatToHarbour,
        updateBoat,
        deleteBoat
    }
}

const boatFacade = BoatFacade();
export default boatFacade;