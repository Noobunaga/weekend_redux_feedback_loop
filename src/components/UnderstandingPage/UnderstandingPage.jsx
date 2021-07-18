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
            <p>How well did you understand today? 1=Lost - 5=I can now teach it!</p>
            <input type="radio" name="understandNumber" value="1" onChange={(event) => setUnderstanding(event.target.value)} />1
            <input type="radio" name="understandNumber" value="2" onChange={(event) => setUnderstanding(event.target.value)} />2
            <input type="radio" name="understandNumber" value="3" onChange={(event) => setUnderstanding(event.target.value)} />3
            <input type="radio" name="understandNumber" value="4" onChange={(event) => setUnderstanding(event.target.value)} />4
            <input type="radio" name="understandNumber" value="5" onChange={(event) => setUnderstanding(event.target.value)} />5
            <button type="submit" >Next</button>
        </form>

    );
}

export default UnderstandingPage;