import React, {useState, useEffect} from 'react';

function OwnersOverview({ownerFacade}) {
    const [owners, setOwners] = useState([])

    useEffect(() => {
        const getData = async () => {
            await ownerFacade.getAllOwners((data) => {
                setOwners(data)
            }, "Can't fetch all owners!")
        }
        getData()
    }, [])

    return (
        <div>
            <h1>BOAT OWNERS</h1>
                <table>
                    <thead>
                    <tr>
                        <th>USERNAME</th>
                        <th>NAME</th>
                        <th>PHONE</th>
                        <th>ADDRESS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {owners.map((data => {
                            return (
                                <tr key={data.ownerID}>
                                    <td>{data.user.userName}</td>
                                    <td>{data.ownerName}</td>
                                    <td>{data.ownerPhone}</td>
                                    <td>{data.ownerAddress}</td>
                                </tr>
                            )
                        })
                    )}
                    </tbody>
                </table>
        </div>
    );
}

export default OwnersOverview;