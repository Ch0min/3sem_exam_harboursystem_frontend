import React, {useState} from 'react';
import APUpdateBoat from "../components/APUpdateBoat.jsx";
import APCreateBoat from "../components/APCreateBoat.jsx";
import APAssignBoatToHarbour from "../components/APAssignBoatToHarbour.jsx";

function AdminPanel() {
    const [refresh, setRefresh] = useState(false);

    return (
        <>
            <h1>ADMIN PANEL</h1>

            <div>
                {<APUpdateBoat refresh={refresh} setRefresh={setRefresh}/>}
            </div>

            <br/>
            <br/>

            <div>
                {<APCreateBoat setRefresh={setRefresh}/>}
            </div>

            <br/>
            <br/>

            <div>
                {<APAssignBoatToHarbour setRefresh={setRefresh}/>}
            </div>

            <br/>
            <br/>
        </>
    );
}

export default AdminPanel;
