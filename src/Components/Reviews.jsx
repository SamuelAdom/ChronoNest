import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 w-full">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-serif text-gray-800">Share your experience</h1>
          <p className="text-2xl font-mono text-gray-600 mt-2">How will you rate us?</p>
        </div>

   
        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className="cursor-pointer transition duration-200"
            >
              {star <= (hover || rating) ? (
                <FaStar className="text-yellow-500 text-3xl" />
              ) : (
                <FaRegStar className="text-yellow-500 text-3xl" />
              )}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="review-text" className="text-lg font-semibold text-gray-700">
            Review
          </label>
          <textarea
            id="review-text"
            placeholder="Write your thoughts here..."
            className="w-full bg-gray-100 rounded-md border border-gray-300 text-gray-800 px-4 py-3 h-40 resize-none focus:outline-none "
            defaultValue={""}
          />
          <button className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition cursor-pointer">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
