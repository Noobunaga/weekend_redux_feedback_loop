
import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';



function FeelingsPage() {

    // const dispatch = useDispatch();
    
    // axios GET all feelings
function getfeelings() {
    axios({
        method: 'GET',
        url: '/api/'
    })
    .then((response) => {
        console.log(response.data);
        dispatch({ type: 'GET_FEELINGS', payload: response.data,});
    })
    .catch((error) => {
        console.log('GET FEELINGS ERROR', error);
    });
}
 
    
    return (
        <div classname="App">
            <p>How are you feelings today?</p>
            <table>
                <th>
                    <tr>
                        <th>Input</th>
                    </tr>

                </th>
                {/* <StufftoADD/> */}
            </table>
        </div>

    );
}

export default FeelingsPage;