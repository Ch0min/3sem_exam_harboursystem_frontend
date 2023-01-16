import React, {useState, useEffect} from 'react';
import boatFacade from "../utils/boatFacade.js";

import "../styles/styles.css";
import BtnViewOwners from "../components/BtnViewOwners.jsx";

function HarbourKoegeMarina(props) {
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
            <h1>KØGE MARINA</h1>
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
                                    <BtnViewOwners boats={data} viewOwners={viewOwners} setViewOwners={setViewOwners}
                                                   clicked={clicked} setClicked={setClicked}/>
                                </td>
                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>
        </div>
    );
}

export default HarbourKoegeMarina;
