import apiFacade from "./apiFacade.js";
import {API_URL} from "../../settings.js";
import loginFacade from "./loginFacade.js";

function HarbourFacade() {

    const getAllHarbours = (updateAction, setErrorMessage) => {
        return apiFacade.fetchData("harbours/all", updateAction, setErrorMessage)
    }

    const getHarbourByHarbourName = (harbourName) => {
        const options = apiFacade.makeOptions("GET", null, null);
        return fetch(API_URL + "/api/harbours/" + harbourName, options)
            .then(apiFacade.handleHttpErrors)
    }

    const getHarbourName = () => {
        const token = loginFacade.getToken()
        if (token != null) {
            const payloadBase64 = loginFacade.getToken().split('.')[1]
            const decodedClaims = JSON.parse(window.atob(payloadBase64))
            return decodedClaims.username
        } else return ""
    }

    return {
        getAllHarbours,
        getHarbourByHarbourName
    }
}

const harbourFacade = HarbourFacade();
export default harbourFacade;