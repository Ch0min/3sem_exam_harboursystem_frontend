import React, {useEffect, useState} from 'react';
import ownerFacade from "../utils/ownerFacade.js";

function OwnersToBoat(props) {
    const [owners, setOwners] = useState([])

    useEffect(() => {
        const getData = async () => {
            await ownerFacade.getAllOwners((data) => {
                setOwners(data)
            }, "Can't fetch the owners!")
        }
        getData()
    }, [])

    return (
        <>


            <table>
                <thead>
                <tr>
                    <th>NAME</th>
                    <th>ADDRESS</th>
                    <th>PHONE</th>
                    <th>USERNAME</th>
                </tr>
                </thead>
                <tbody>
                {owners.map((o) => {
                        if (props.boats.boatID === props.viewOwners) {
                            return (
                                <tr key={o.ownerID}>
                                    <td>{o.user.userName}</td>
                                    <td>{o.ownerName}</td>
                                    <td>{o.ownerPhone}</td>
                                    <td>{o.ownerAddress}</td>
                                </tr>
                            )
                        }
                    }
                )}
                </tbody>
            </table>


        </>
    );
}

export default OwnersToBoat;