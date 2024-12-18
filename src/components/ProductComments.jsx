import React from "react";
import { FaStar, FaRegStar, FaThumbsUp, FaRegComment } from "react-icons/fa";

function ProductComments() {
  const reviews = [
    {
      user: "Helen M.",
      comment: "Excellent running shoes. It turns very sharply on the foot.",
      rating: 5,
      date: "Yesterday",
      likes: 42,
      replies: 0,
      profileImage: "https://i.pravatar.cc/40?img=1",
    },
    {
      user: "Ann D.",
      comment: "Good shoes",
      rating: 4,
      date: "2 days ago",
      likes: 35,
      replies: 2,
      profileImage: "https://i.pravatar.cc/40?img=2",
    },
    {
      user: "Andrew G.",
      comment: "Is it suitable for running?",
      rating: 3,
      date: "2 days ago",
      likes: 0,
      replies: 0,
      profileImage: "https://i.pravatar.cc/40?img=3",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, idx) =>
      idx < rating ? (
        <FaStar key={idx} className="text-yellow-500" />
      ) : (
        <FaRegStar key={idx} className="text-yellow-500" />
      )
    );
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <div className="flex border-b mb-4 pb-2 text-sm sm:text-base">
        <h3 className="font-bold mr-4 border-b-2 border-black cursor-pointer">
          Reviews
        </h3>
        <h3 className="text-gray-400 cursor-pointer hover:text-black">Details</h3>
        <h3 className="text-gray-400 ml-4 cursor-pointer hover:text-black">
          Discussion
        </h3>
      </div>

      <div className="mb-4">
        <select className="p-2 border rounded w-full sm:w-auto">
          <option value="newest">Newest</option>
          <option value="highest">Highest Rated</option>
          <option value="lowest">Lowest Rated</option>
        </select>
      </div>

      {reviews.map((review, idx) => (
        <div
          key={idx}
          className="border-t pt-4 pb-4 flex flex-col sm:flex-row sm:items-start"
        >
          <div className="flex-shrink-0 mb-3 sm:mb-0 sm:mr-4">
            <img
              src={review.profileImage}
              alt={review.user}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <div>
                <p className="font-semibold text-gray-800">{review.user}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
            <div className="flex items-center mb-2">{renderStars(review.rating)}</div>
            <p className="text-gray-700 mb-2 text-sm sm:text-base">
              {review.comment}
            </p>

            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <button className="flex items-center hover:text-blue-500">
                <FaThumbsUp className="mr-1" />
                <span>{review.likes}</span>
              </button>
              <button className="flex items-center hover:text-blue-500">
                <FaRegComment className="mr-1" />
                <span>{review.replies}</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductComments;
