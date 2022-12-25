import React from 'react';

const ReviwItem = (props) => {
  const {author, message, rating} = props.review;
  return (
    <div className='border p-4 rounded-md'>
      <h3 className='font-semibold text-xl mb-2'>{author}</h3>
      <p className='mb-2'>{message}</p>
      <p><span className='font-semibold'>Rating:</span> {rating}</p>
    </div>
  );
};

export default ReviwItem;