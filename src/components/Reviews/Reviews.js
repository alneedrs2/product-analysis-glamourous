import React from 'react';
import useReview from '../../hooks/useReview';
import AllReview from '../AllReview/AllReview';

const Reviews = () => {
    const [review , setReview] = useReview()
    return (
        <div>
            <h1 className='text-center text-red-400 text-5xl my-12'>What Our Customers Says</h1>
            <h3 className='my-5 text-3xl mx-10'>All Reviews : <span className='text-red-700'>{review.length}</span></h3>
            {
                review.map(item => <AllReview 
                key={item.id}
                item ={item}
                ></AllReview>)
            }
        </div>
    );
};

export default Reviews;