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
        <div>
            <form onSubmit={handleFeelingSubmit}>
                <p>How are your feelings today? 1=Super sad - 5=Too happy</p>
                <input type="radio" label="1" name="feelingsNumber" value="1" onChange={(event) => setFeelings(event.target.value)} />1
                <input type="radio" label="2" name="feelingsNumber" value="2" onChange={(event) => setFeelings(event.target.value)} />2
                <input type="radio" label="3" name="feelingsNumber" value="3" onChange={(event) => setFeelings(event.target.value)} />3
                <input type="radio" label="4" name="feelingsNumber" value="4" onChange={(event) => setFeelings(event.target.value)} />4
                <input type="radio" label="5" name="feelingsNumber" value="5" onChange={(event) => setFeelings(event.target.value)} />5
                <button type="submit" >Next</button>
            </form>
        </div>

    );
}

export default FeelingsPage;