import React, { useState } from 'react';
import './index.css';
import axios from 'axios';

const FeedbackForm = () => {
    const [usabilityRating, setUsabilityRating] = useState(0);
    const [statementRatings, setStatementRatings] = useState([0, 0, 0, 0, 0]);
    const [overallSatisfactionRating, setOverallSatisfactionRating] = useState(0);
    const [likesDislikes, setLikesDislikes] = useState('');
    const [otherComments, setOtherComments] = useState('');

    const handleUsabilityRating = (rating) => {
        setUsabilityRating(rating);
    };

    const handleStatementRating = (index, rating) => {
        const newRatings = [...statementRatings];
        newRatings[index] = rating;
        setStatementRatings(newRatings);
    };

    const handleOverallSatisfactionRating = (rating) => {
        setOverallSatisfactionRating(rating);
    };

    const handleLikesDislikesChange = (event) => {
        setLikesDislikes(event.target.value);
    };

    const handleOtherCommentsChange = (event) => {
        setOtherComments(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/feedback', {
                usabilityRating,
                statementRatings,
                overallSatisfactionRating,
                likesDislikes,
                otherComments,
            });

            console.log('Response from server:', response.data);
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };
    return (<div>
        <div className="feedback-form">
            <h1 className="heading">Feedback</h1>
            <p className="subheading">Please provide us with your valuable thoughts!</p>

            <div className="question">
                <p>Q1. On a scale of 1-5, how would you rate the usability of our website?</p>
                <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <span
                            key={value}
                            className={`star ${value <= usabilityRating ? 'selected' : ''}`}
                            onClick={() => handleUsabilityRating(value)}
                        >
                            ★
                        </span>
                    ))}

                </div>
            </div>

            <div className="question">
                <p>Q2. Please rate how strongly you agree or disagree with each of the statements related to TradEz:</p>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Totally Disagree</th>
                            <th>Disagree</th>
                            <th>No Opinion</th>
                            <th>Agree</th>
                            <th>Totally Agree</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            'I love the UI.',
                            'I love the concept of TradEz.',
                            'TradEz helped me make informed decisions about investing.',
                            'The user experience is good.',
                            'I find the website meaningful and the content relevant.',
                        ].map((statement, index) => (
                            <tr key={index}>
                                <td>{statement}</td>
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <td
                                        key={value}
                                        className={`rating ${statementRatings[index] === value ? 'selected' : ''}`}
                                        onClick={() => handleStatementRating(index, value)}
                                    >
                                        ◉
                                    </td>
                                ))}

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="question">
                <p>Q3. Overall, how satisfied are you with your experience on our website lately?</p>
                <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <span
                            key={value}
                            className={`star ${value <= overallSatisfactionRating ? 'selected' : ''}`}
                            onClick={() => handleOverallSatisfactionRating(value)}
                        >
                            ★
                        </span>
                    ))}

                </div>
            </div>

            <div className="question">
                <p>Q4. What do you like or dislike about our website?</p>
                <textarea
                    rows="4"
                    cols="50"
                    value={likesDislikes}
                    onChange={handleLikesDislikesChange}
                    placeholder="Type up to 200 words..."
                />
            </div>

            <div className="question">
                <p>Q5. Do you have any other suggestions or comments regarding our website?</p>
                <textarea
                    rows="4"
                    cols="50"
                    value={otherComments}
                    onChange={handleOtherCommentsChange}
                    placeholder="Type up to 200 words..."
                />
            </div>

            <div className="submit-button">
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    </div>
    );
};
export default FeedbackForm;