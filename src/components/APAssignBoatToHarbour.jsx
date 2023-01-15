import React, {useState} from 'react';
import boatFacade from "../utils/boatFacade.js";

function APAssignBoatToHarbour(props) {
    const [assign, setAssign] = useState(false)

    const initBoatToHarbour = {boatID: "", harbourID: ""}
    const [boatToHarbourInput, setBoatToHarbourInput] = useState(initBoatToHarbour)

    const performAssign = (evt) => {
        evt.preventDefault()

        assigning(boatToHarbourInput.boatID, boatToHarbourInput.harbourID)
        props.setRefresh(false)
        setAssign(false)

    }

    const assigning = (boatID, harbourID) => {
        boatFacade.assignBoatToHarbour(boatID, harbourID)
            .then(() => props.setRefresh(true))

    }

    const handleOnChange = (evt) => {
        setBoatToHarbourInput({...boatToHarbourInput, [evt.target.id]: evt.target.value})
    }

    return (
        <>
            {assign ? (
                <div>
                    <div>
                        <button onClick={() => {
                            setAssign(false)
                        }}>Cancel
                        </button>
                    </div>
                    <div>
                        <form onChange={handleOnChange}>
                            <table>
                                <thead>
                                <tr>
                                    <th>BOAT ID</th>
                                    <th>HARBOUR ID</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <input type="number" placeholder="Boat ID" name="boat_id" id="boatID"/>
                                    </td>
                                    <td>
                                        <input type="number" placeholder="Harbour ID" name="harbour_id" id="harbourID"/>
                                    </td>
                                    <td><button onClick={performAssign} type="submit">Assign</button></td>
                                </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            ) : (
                <div>
                    <button onClick={() => {
                        setAssign(true)
                    }}>Assign Boat to a new Harbour</button>
                </div>
            )}
        </>
    );
}

export default APAssignBoatToHarbour;