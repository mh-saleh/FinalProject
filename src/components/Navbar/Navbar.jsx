import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="max-w-Container mx-auto my-[50px] px-[1vw]">
      <div className="flex justify-between align-middle items-center flex-wrap">
        <div className="flex gap-x-12 flex-wrap">
          <h2 className="text-slate-800 text-[40px] font-semibold font-['Poppins']">
            <Link to={"/"}>Emprise</Link>
          </h2>
          <ul className="flex align-middle items-center gap-8">
            <Link to={"/"}>
              <div className=" text-slate-800 text-xl font-normal font-['Poppins'] leading-tight">
                Home
              </div>
            </Link>
            <Link to={"/shop"}>
              <div className=" text-slate-800 text-xl font-normal font-['Poppins'] leading-tight">
                Shop
              </div>
            </Link>
            <Link to={"/favourite"}>
              <div className=" text-slate-800 text-xl font-normal font-['Poppins'] leading-tight">
                Favourite
              </div>
            </Link>
            <button>
              <Link to={"/shop#inputSearch"}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.6322 21.591L18.1915 16.1503C19.5014 14.4065 20.2085 12.284 20.2061 10.103C20.2061 4.53226 15.6738 0 10.103 0C4.53226 0 0 4.53226 0 10.103C0 15.6738 4.53226 20.2061 10.103 20.2061C12.284 20.2085 14.4065 19.5014 16.1503 18.1915L21.591 23.6322C21.8664 23.8783 22.2256 24.0098 22.5948 23.9994C22.9641 23.9891 23.3154 23.8378 23.5766 23.5766C23.8378 23.3154 23.9891 22.9641 23.9994 22.5948C24.0098 22.2256 23.8783 21.8664 23.6322 21.591ZM2.88658 10.103C2.88658 8.67576 3.30982 7.28053 4.10277 6.09379C4.89573 4.90705 6.02279 3.9821 7.34142 3.4359C8.66006 2.88971 10.111 2.7468 11.5109 3.02525C12.9108 3.30369 14.1966 3.99099 15.2058 5.00023C16.2151 6.00947 16.9024 7.29532 17.1808 8.69518C17.4593 10.095 17.3164 11.546 16.7702 12.8647C16.224 14.1833 15.299 15.3103 14.1123 16.1033C12.9255 16.8963 11.5303 17.3195 10.103 17.3195C8.18982 17.3172 6.35562 16.5562 5.00277 15.2033C3.64992 13.8505 2.88888 12.0163 2.88658 10.103Z"
                    fill="#1D293F"
                  />
                </svg>
              </Link>
            </button>
          </ul>
        </div>
        <div>
          <button className="duration-500 text-slate-800 text-xl font-normal font-['Poppins'] leading-tight w-[104px] h-12 hover:bg-teal-500 rounded-[28px] mr-3">
            Login
          </button>
          <button className="duration-500 text-black text-xl font-normal font-['Poppins'] leading-tight w-[104px] h-12 hover:bg-teal-500  rounded-[28px]">
            {" "}
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
