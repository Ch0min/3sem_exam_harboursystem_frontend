import React, {useState, useEffect} from 'react';
import boatFacade from "../utils/boatFacade.js";

function HarbourKastrupHavn(props) {
    const [boats, setBoats] = useState([])
    const [viewOwners, setViewOwners] = useState(0)
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        const getData = async () => {
            await boatFacade.getBoatsByHarbour(props.harbour, (data) => {
                setBoats(data)
            }, "Error can't fetch a Harbours boats!")
        }
        getData();
    }, []);

    return (
        <div className="table-styling">
            <h1>KASTRUP LYSTBÅDEHAVN</h1>
            <table>
                <thead>
                <tr>
                    <th>BRAND</th>
                    <th>MAKE</th>
                    <th>BOAT NAME</th>
                    <th>IMAGE</th>
                    <th>OWNERS</th>
                </tr>
                </thead>
                <tbody>
                {boats.map((data) => {
                        return (
                            <tr key={data.boatID}>
                                <td>{data.boatBrand}</td>
                                <td>{data.boatMake}</td>
                                <td>{data.boatName}</td>
                                <td>{data.boatImage}</td>
                                <td>
                                    {!clicked ? <button onClick={() => {
                                            setViewOwners(data.boatID)
                                            setClicked(true)
                                        }}
                                        >Show Owners
                                        </button> :
                                        <button onClick={() => {
                                            setViewOwners(0)
                                            setClicked(false)
                                        }}
                                        >Hide
                                        </button>}
                                </td>
                                {data.owners.map((owner) => {

                                        if (data.boatID === viewOwners) {

                                            return (
                                                    <tr key={owner.ownerID}>
                                                        <td>{owner.user.userName}</td>
                                                        <td>{owner.ownerName}</td>
                                                        <td>{owner.ownerPhone}</td>
                                                        <td>{owner.ownerAddress}</td>
                                                    </tr>
                                            )
                                        }
                                    }
                                )}
                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>
        </div>
    );
}

export default HarbourKastrupHavn;