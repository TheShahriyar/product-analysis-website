import React from 'react';
import useReview from '../../hooks/useReview';
import ReviwItem from '../Review/ReviwItem';

const ReviewPage = () => {
  const [reviews] = useReview([]);

  return (
    <div className='container mx-auto py-20'>
      <h2 className='font-bold text-center text-4xl mb-10'>Review Page</h2>
      <div className='grid grid-cols-3 gap-8'>
        {reviews.map(review => <ReviwItem key={review._id} review={review} />)}
      </div>
    </div>
  );
};

export default ReviewPage;