import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, useHistory, } from "react-router-dom";

// Import CSS
import './SubmitPage.css';


function SubmitPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const feelingsReducer = useSelector((store) => store.feelingsReducer);
    const understandingReducer = useSelector((store) => store.understandingReducer);
    const supportReducer = useSelector((store) => store.supportReducer);
    const commentsReducer = useSelector((store) => store.commentsReducer);

    
    // Function to handle submitting the feedback
    const handleSubmit = () => {
        event.preventDefault();

        const allFeedback = {
            feeling: feelingsReducer,
            understanding: understandingReducer,
            support: supportReducer,
            comments: commentsReducer,
        }

        // TODO: add axios POST to here
        axios({
            method: 'POST',
            url: '/feedback',
            data: allFeedback
        }).then((response) => {
            console.log(response);
            dispatch({
                type: 'CLEAR_FEEDBACK',
            })
            history.push('/thankyou');
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <main>
            <section>
                <h2>Feedback Review</h2>
                <p>Feeling: {feelingsReducer}</p>
                <p>Understanding: {understandingReducer}</p>
                <p>Support: {supportReducer}</p>
                <p>Comments: {commentsReducer}</p>
                <button type="submit" onClick={() => handleSubmit()} >Submit</button>
            </section>
        </main>
    );
}
export default SubmitPage;