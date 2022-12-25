import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import ReviwItem from './ReviwItem';

const Review = () => {
  const [reviews] = useReview([]);

  const randomReviewFunc = (allReview, number) => {
    const suffled = [...allReview].sort(()=> 0.5 - Math.random());
    return suffled.slice(0, number)
  }

  let randomReview = randomReviewFunc(reviews, 3);
  return (
    <div className='bg-gray-100'>
      <div className='container mx-auto py-20 bg-gray-100'>
        <h2 className='font-bold text-center text-4xl mb-10'>Customer Review</h2>
        <div className='grid grid-cols-3 gap-8 mb-16'>
          {randomReview.map(review => <ReviwItem key={review._id} review={review} />)}
        </div>
        <div className='text-center'>
          <Link to="/reviews" className='bg-red-400 px-8 py-4 rounded-sm text-white transition-all hover:bg-red-500'>View all reviews</Link>
        </div>
      </div>
    </div>
  );
};

export default Review;