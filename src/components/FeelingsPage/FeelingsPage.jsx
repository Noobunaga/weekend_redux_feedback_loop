import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



function FeelingsPage() {
    const history = useHistory();
    const [feelings, setFeelings] = useState('');
    const dispatch = useDispatch();
    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('On to Understanding Next');
        dispatch:({
            type: 'ADD_NEW_FEELINGS',
            payload: feelings,
        });
        history.push('/understanding');
        setFeelings('');
    }; 
 
    
    return (
        <form onSubmit={handleFeelingSubmit}>
            <p>How are your feelings today?</p>
            <input type="radio" name="feelingsNumber" value="1" onChange={(event) => setFeelings(event.target.value)} />
            <button type="submit" onClick={handleSubmit} >Next</button>
        </form>

    );
}

export default FeelingsPage;