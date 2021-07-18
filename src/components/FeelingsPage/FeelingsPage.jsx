import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';



function FeelingsPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [feelings, setFeelings] = useState('');

    

    const handleFeelingSubmit = (event) => {
        event.preventDefault();
        console.log('On to Understanding Next');
        dispatch({
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
            <input type="radio" name="feelingsNumber" value="2" onChange={(event) => setFeelings(event.target.value)} />
            <input type="radio" name="feelingsNumber" value="3" onChange={(event) => setFeelings(event.target.value)} />
            <input type="radio" name="feelingsNumber" value="4" onChange={(event) => setFeelings(event.target.value)} />
            <input type="radio" name="feelingsNumber" value="5" onChange={(event) => setFeelings(event.target.value)} />
            <button type="submit" >Next</button>
        </form>

    );
}

export default FeelingsPage;