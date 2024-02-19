import React from "react";

const Checkmark = () => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="12" height="8" fill="#E5E5E5" />
      <g id="Home" clipPath="url(#clip0_0_1)">
        <rect
          width="1920"
          height="8833"
          transform="translate(-818 -2417)"
          fill="white"
        />
        <rect
          id="Container"
          x="-818"
          y="-2417"
          width="1920"
          height="8833"
          fill="white"
        />
        <g id="Trending">
          <g id="Tour Cards">
            <g id="02">
              <g id="Container_2" filter="url(#filter0_d_0_1)">
                <rect
                  x="-35"
                  y="-568"
                  width="512"
                  height="614"
                  rx="20"
                  fill="white"
                />
              </g>
              <g id="Footer Text">
                <g id="Free Cancellation">
                  <path
                    id="Checkmark"
                    d="M1 3L5 7L11 1"
                    stroke="#28B0A6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_0_1"
          x="-39"
          y="-570"
          width="520"
          height="622"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.054902 0 0 0 0 0.337255 0 0 0 0 0.486275 0 0 0 0.16 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_0_1">
          <rect
            width="1920"
            height="8833"
            fill="white"
            transform="translate(-818 -2417)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Checkmark;
