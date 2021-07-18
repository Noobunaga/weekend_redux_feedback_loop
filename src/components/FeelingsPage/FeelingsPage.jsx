
import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';



function FeelingsPage() {

    // const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('On to Understanding Next');
    }; 
    
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
        <div className="App">
            <p>How are your feelings today?</p>
            <table>
                <thead>
                    <tr>
                        <td>Input</td>
                    </tr>
                </thead>
                {/* <StufftoADD/> */}
            </table>
            <section className="feelings-next">
                <button type="submit" onClick={handleSubmit} >Next</button>
            </section>
        </div>

    );
}

export default FeelingsPage;