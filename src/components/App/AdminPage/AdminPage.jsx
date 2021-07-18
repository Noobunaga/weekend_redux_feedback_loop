// import CSS
import './AdminPage.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function AdminOrder() {
    
    // local state to store array of orders
    const [ feedbacks, setfeedbacks ] = useState([]);

    // axios GET request to retrieve all orders from database
    const fetchFeedback = () => {
        axios.get('/feedback')
            .then(response => {
                console.log('the response is:', response.data); // test
                setOrders(response.data)
            })
            .catch(err => {
                console.log('Error retrieving orders:', err);
            });
    }

    useEffect(() => {
        fetchFeedback();
    }, []);

    return (
        <div className="admin-component">
            <h4>Feedback Results</h4>
            <table>
                <thead>
                    <tr>
                        <th>Feelings</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.map((feeback) => (
                        <tr key={feedback.feeling}>
                            <td>{feedback.understanding}</td>
                            <td>{feedback.support}</td>
                            <td>{feedback.comments}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminOrder;