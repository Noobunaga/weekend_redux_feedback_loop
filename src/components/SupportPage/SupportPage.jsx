import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';



function SupportPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [support, setSupport] = useState('');

    

    const handleSupportSubmit = (event) => {
        event.preventDefault();
        console.log('On to Support Next');
        dispatch({
            type: 'ADD_NEW_SUPPORT',
            payload: support,
        });
        history.push('/comments');
        setSupport('');
    }; 
 
    
    return (
        <form onSubmit={handleSupportSubmit}>
            <p>How well supported were you today?</p>
            <input type="radio" name="supportNumber" value="1" onChange={(event) => setSupport(event.target.value)} />
            <input type="radio" name="supportNumber" value="2" onChange={(event) => setSupport(event.target.value)} />
            <input type="radio" name="supportNumber" value="3" onChange={(event) => setSupport(event.target.value)} />
            <input type="radio" name="supportNumber" value="4" onChange={(event) => setSupport(event.target.value)} />
            <input type="radio" name="supportNumber" value="5" onChange={(event) => setSupport(event.target.value)} />
            <button type="submit" >Next</button>
        </form>

    );
}

export default SupportPage;