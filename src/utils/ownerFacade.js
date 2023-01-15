import apiFacade from "./apiFacade.js";
import {API_URL} from "../../settings.js";

function OwnerFacade() {

    const getAllOwners = (updateAction, setErrorMessage) => {
        return apiFacade.fetchData("owners/all", updateAction, setErrorMessage)
    }

    const getOwnersByBoat = (boatName) => {
        const options = apiFacade.makeOptions("GET", null, null);
        return fetch(API_URL + "/api/owners/" + boatName, options)
            .then(apiFacade.handleHttpErrors)
    }

    return {
        getAllOwners,
        getOwnersByBoat
    }
}

const ownerFacade = OwnerFacade();
export default ownerFacade;