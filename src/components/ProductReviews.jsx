import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function ProductReviews() {
  const reviews = [
    { user: "Helen M.", comment: "Excellent running shoes. It turns very sharply on the foot.", rating: 5 },
    { user: "Ann D.", comment: "Good shoes.", rating: 4 },
    { user: "Andrew G.", comment: "Is it suitable for running?", rating: 3 },
    { user: "Mark K.", comment: "Not very comfortable.", rating: 2 },
    { user: "Jess R.", comment: "Terrible quality.", rating: 1 },
  ];

  const ratingDistribution = [0, 0, 0, 0, 0];
  reviews.forEach((review) => ratingDistribution[review.rating - 1]++);

  const totalReviews = reviews.length;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, idx) =>
      idx < rating ? <FaStar key={idx} className="text-yellow-500" /> : <FaRegStar key={idx} className="text-yellow-500" />
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">Reviews</h3>

  
      <div className="mb-6">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500 mr-1" />
          ))}
          <span className="ml-2 text-lg font-semibold">4.8</span>
        </div>
        {ratingDistribution
          .slice()
          .reverse()
          .map((count, idx) => (
            <div key={5 - idx} className="flex items-center mb-1">
              <span className="w-6 text-sm font-semibold">{5 - idx}</span>
              <div className="w-full bg-gray-200 rounded-full h-3 mx-2">
                <div
                  className="bg-yellow-500 h-3 rounded-full"
                  style={{ width: `${(count / totalReviews) * 100}%` }}
                ></div>
              </div>
              <span className="w-6 text-sm">{count}</span>
            </div>
          ))}
      </div>

      {reviews.map((review, idx) => (
        <div key={idx} className="mb-4 border-b pb-4">
          <p className="font-semibold">{review.user}</p>
          <div className="flex items-center mb-1">{renderStars(review.rating)}</div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductReviews;
