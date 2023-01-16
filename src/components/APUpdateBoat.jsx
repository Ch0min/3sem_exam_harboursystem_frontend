import React, {useEffect, useState} from 'react';
import boatFacade from "../utils/boatFacade.js";

function APUpdateBoat(props) {
    const [boats, setBoats] = useState([])
    const [update, setUpdate] = useState(0)

    const initInfo = {boatID: "", boatBrand: "", boatMake: "", boatName: "", boatImage: "", harbourID: ""}
    const [infoInput, setInfoInput] = useState(initInfo)

    useEffect(() => {
        const getData = async () => {
            await boatFacade.getAllBoats((data) => {
                setBoats(data);
            }, "Can't fetch any boats")
        }
        getData();
    }, [props.refresh]);

    const performUpdate = (evt) => {
        evt.preventDefault();

        updateInfo(infoInput.boatID, infoInput.boatBrand, infoInput.boatMake, infoInput.boatName,
            infoInput.boatImage, infoInput.harbourID)
        setUpdate(0)
        props.setRefresh(false)
    }

    const updateInfo = (boatID, boatBrand, boatMake, boatName, boatImage, harbourID) => {
        boatFacade.updateBoat(boatID, boatBrand, boatMake, boatName, boatImage, harbourID)
            .then(() => props.setRefresh(true))
    }

    const handleOnChange = (evt) => {
        setInfoInput({...infoInput, [evt.target.id]: evt.target.value})
        console.log(infoInput)
    }

    // Skal angive alle inputs, samt fejl i en key.

    return (
        <div>
            <div>
                <form onChange={handleOnChange}>
                    <table>
                        <thead>
                        <tr>
                            <th>BOAT ID</th>
                            <th>BOAT BRAND</th>
                            <th>BOAT MAKE</th>
                            <th>BOAT NAME</th>
                            <th>BOAT IMAGE</th>
                            <th>HARBOUR ID</th>
                            <th>HARBOUR NAME</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {boats.map((data) => {
                            if (update === data.boatID) {
                                return (
                                    <tr key={data.boatID}>
                                        <td>
                                            <input type="number" placeholder={data.boatID} name="boat_id"
                                                   id="boatID"/>
                                        </td>
                                        <td>
                                            <input type="text" placeholder={data.boatBrand} name="boat_brand"
                                                   id="boatBrand"/>
                                        </td>
                                        <td>
                                            <input type="text" placeholder={data.boatMake} name="boat_make"
                                                   id="boatMake"/>
                                        </td>
                                        <td>
                                            <input type="text" placeholder={data.boatName} name="boat_name"
                                                   id="boatName"/>
                                        </td>
                                        <td>
                                            <input type="text" placeholder={data.boatImage} name="boat_image"
                                                   id="boatImage"/>
                                        </td>
                                        <td></td>
                                        <td>
                                            <select defaultValue={data.harbour.harbourID} name="harbour_id"
                                                    id="harbourID">
                                                <option value="DEFAULT" disabled>Choose Harbour</option>
                                                <option value="1">Kastrup Lystbådehavn</option>
                                                <option value="2">Køge Marina</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button className="btn-standard" onClick={performUpdate} type="submit"><i className="fa fa-mail-forward"></i> Submit</button>
                                            <br/>
                                            <button className="btn-cancel" onClick={() => {
                                                setUpdate(0)
                                            }}><i className="fa fa-close"></i> Cancel
                                            </button>
                                        </td>
                                    </tr>
                                )
                            } else {
                                return (
                                    <>
                                        <tr key={data.boatID}>
                                            <td>{data.boatID}</td>
                                            <td>{data.boatBrand}</td>
                                            <td>{data.boatMake}</td>
                                            <td>{data.boatName}</td>
                                            <td>{data.boatImage}</td>
                                            <td>{data.harbour.harbourID}</td>
                                            <td>{data.harbour.harbourName}</td>
                                            <td>
                                                <button className="btn-standard" onClick={() => {
                                                    setUpdate(data.boatID)
                                                }}><i className="fa fa-pencil"></i> Update
                                                </button>
                                                <br/>
                                                <button className="btn-trash" onClick={() => {
                                                    boatFacade.deleteBoat(data.boatID)
                                                        .then(() => props.setRefresh(false))   // Still refreshes the site
                                                }}><i className="fa-solid fa fa-trash"></i> delete</button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            }
                        })}
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default APUpdateBoat;