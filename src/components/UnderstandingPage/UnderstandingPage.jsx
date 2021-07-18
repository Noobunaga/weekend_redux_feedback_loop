import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';



function UnderstandingPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState('');

    

    const handleUnderstandSubmit = (event) => {
        event.preventDefault();
        console.log('On to Support Next');
        dispatch({
            type: 'ADD_NEW_UNDERSTANDING',
            payload: understanding,
        });
        history.push('/support');
        setUnderstanding('');
    }; 
 
    
    return (
        <form onSubmit={handleUnderstandSubmit}>
            <p>How well did you understand today?</p>
            <input type="radio" name="understandNumber" value="1" onChange={(event) => setUnderstanding(event.target.value)} />
            <input type="radio" name="understandNumber" value="2" onChange={(event) => setUnderstanding(event.target.value)} />
            <input type="radio" name="understandNumber" value="3" onChange={(event) => setUnderstanding(event.target.value)} />
            <input type="radio" name="understandNumber" value="4" onChange={(event) => setUnderstanding(event.target.value)} />
            <input type="radio" name="understandNumber" value="5" onChange={(event) => setUnderstanding(event.target.value)} />
            <button type="submit" >Next</button>
        </form>

    );
}

export default UnderstandingPage;