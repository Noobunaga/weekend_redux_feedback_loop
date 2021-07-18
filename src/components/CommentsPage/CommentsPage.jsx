import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';



function CommentsPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [comments, setComments] = useState('');

    

    const handleCommentsSubmit = (event) => {
        event.preventDefault();
        console.log('On to Submit Next');
        dispatch({
            type: 'ADD_NEW_COMMENTS',
            payload: comments,
        });
        history.push('/Submit');
        setComments('');
    }; 
 
    
    return (
        <form onSubmit={handleCommentsSubmit}>
            <p>Would you like to leave any comments today?</p>
            <input 
                type="text"
                onChange={(event) => setComments(event.target.value)} 
                placeholder="Comments"
                value={comments}
                />
            <button type="submit" >Next</button>
        </form>

    );
}

export default CommentsPage;