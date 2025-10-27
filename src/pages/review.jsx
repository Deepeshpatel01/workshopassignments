import React, { useState } from 'react';

const Review = () => {
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="review-page">
      <h2>Customer Review</h2>
      <textarea
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Review</button>
      {submitted && <p>Thank you for your feedback! 💬</p>}
    </div>
  );
};

export default Review;
