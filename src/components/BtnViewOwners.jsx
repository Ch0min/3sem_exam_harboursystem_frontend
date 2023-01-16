import React from 'react';

function BtnViewOwners(props) {

    const hideBtn = () => {
        const boatID = props.boats.boatID
        let text = "Show Owners";
        if (props.viewOwners === boatID) {
            text = "Hide"
        }
        return text;
    }

    return (
        <>
            <div>
                {!props.clicked ? <button onClick={() => {
                        props.setViewOwners(props.boats.boatID)
                        props.setClicked(true)
                    }}
                    >{hideBtn()}
                    </button>
                    :
                    <button onClick={() => {
                        props.setViewOwners(0)
                        props.setClicked(false)
                    }}
                    >{hideBtn()}
                    </button>}

                <table>
                    <tbody>
                    {props.boats.owners.map((o) => {
                            if (props.boats.boatID === props.viewOwners) {
                                return (
                                    <tr key={o.ownerID}>
                                        <td>{o.ownerName}</td>
                                        <td>{o.ownerPhone}</td>
                                        <td>{o.ownerAddress}</td>
                                        <td>{o.user.userName}</td>
                                    </tr>
                                )
                            }
                        }
                    )}
                    </tbody>
                </table>

            </div>
        </>
    );
}

export default BtnViewOwners;