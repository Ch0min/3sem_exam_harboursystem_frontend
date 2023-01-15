import React, {useState} from 'react';
import boatFacade from "../utils/boatFacade.js";

function APCreateBoat(props) {
    const [create, setCreate] = useState(false)

    const initBoat = {boatBrand: "", boatMake: "", boatName: "", boatImage: "", harbourID: ""}
    const [boatInput, setBoatInput] = useState(initBoat)

    const performCreateBoat = (evt) => {
        evt.preventDefault();

        // Alerts if missing input.
        if (boatInput.boatMake.trim().length === 0 || boatInput.boatBrand.trim().length === 0 || boatInput.harbourID.trim().length === 0) {
            alert("The boat needs more information.")
            return
        }

        createBoat(boatInput.boatBrand, boatInput.boatMake, boatInput.boatName, boatInput.boatImage, boatInput.harbourID)
        props.setRefresh(false)
        setCreate(false)
    }

    const createBoat = (boatBrand, boatMake, boatName, boatImage, harbourID) => {
        boatFacade.createBoat(boatBrand, boatMake, boatName, boatImage, harbourID)
            .then(() => props.setRefresh(true))
    }

    const handleOnChange = (evt) => {
        setBoatInput({...boatInput, [evt.target.id]: evt.target.value})
    }

    return (
        <>
            {create ? (
                <div>
                    <div>
                        <button onClick={() =>
                            setCreate(false)
                        }>Cancel
                        </button>
                    </div>
                    <div>
                        <form onChange={handleOnChange}>
                            <table>
                                <thead>
                                <tr>
                                    <th>BRAND</th>
                                    <th>MAKE</th>
                                    <th>BOAT NAME</th>
                                    <th>IMAGE</th>
                                    <th>HARBOUR ID</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td>
                                        <input type="text" placeholder="Boat Brand" name="boat_brand" id="boatBrand"/>
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Boat Make" name="boat_make" id="boatMake"/>
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Boat Name" name="boat_name" id="boatName"/>
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Boat Image URL" name="boat_image" id="boatImage"/>
                                    </td>
                                    <td>
                                        <select defaultValue={"DEFAULT"} name="harbour_id" id="harbourID">
                                            <option value="DEFAULT" disabled>Choose Harbour</option>
                                            <option value="1">Kastrup Lystbådehavn</option>
                                            <option value="2">Køge Marina</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button onClick={performCreateBoat} type="submit">Create</button>
                                    </td>

                                </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            ) : (
                <div>
                    <button onClick={() => {
                        setCreate(true)
                    }}>Create a new Boat
                    </button>
                </div>
            )}
        </>
    );
}

export default APCreateBoat;