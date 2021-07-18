import axios from "axios";
import { useDispatch } from "react-redux";
import React from "react";
import { HashRouter as Router, Route, Link, useHistory, } from "react-router-dom";

import "./ThankYou.css";

function ThankYou() {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        event.preventDefault();
        history.push('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Thank You for the Feedback. Click to do another.</h2>
            <button type="submit">New Feedback</button>
        </form>
    );
}

export default ThankYou;