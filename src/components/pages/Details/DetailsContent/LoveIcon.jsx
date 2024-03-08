import React, { useState } from "react";
const LoveIcon = () => {
  let [wishlist, setWishlist] = useState(false);
  return (
    <div>
      <div class="heart ">
        <button onClick={() => setWishlist(!wishlist)}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-10 h-10 duration-500 ${
              wishlist ? "text-red-500" : "text-gray-300"
            }`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 21.35l-1.14-1.04C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.86 11.81L12 21.35z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LoveIcon;
