import React, { useState } from "react";
import Stars from "../../assets/svg/Stars";
import Duration from "../../assets/svg/Duration";
import Checkmark from "../../assets/svg/Checkmark";
import Items from "../../assets/ProductList/products";
import { useDispatch, useSelector } from "react-redux";
import ImageOne from "../../assets/images/productImage/One.png";

import { updateWishlist } from "../../Redux/slices/addToCart";
import { Link } from "react-router-dom";

export default function ProductCard({ Index }) {
  let dispatch = useDispatch();
  let item = useSelector((state) => state.Cart.cartItems[Index]);
  return (
    <div className=" pt-1 pr-1 w-[512px] h-[614px] relative  box-border">
      <img
        src={Items[Index].Details_Image.One}
        className="w-[480px] h-[256px] bg-[rgba(108,117,125,0.2)] bg-[url(../assets/images/101ec05d31c32841a596b7c1a9b0d755abacabcc.png)] bg-cover bg-no-repeat rounded-[20px] relative z-[23] mt-[16px] mr-0 mb-0 ml-[16px]"
      />
      <div className="w-[354px] h-[52px] relative z-[1] mt-[258px] mr-0 mb-0 ml-[32px]">
        <div className="w-[80px] h-[20px] relative z-[8] mt-0 mr-0 mb-0 ml-0">
          <Duration />
          <span className="flex h-[20px] justify-start items-start font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#546179] absolute top-0 left-[26px] text-left whitespace-nowrap z-[9]">
            7 Days
          </span>
          <div className="w-[18px] h-[18px] bg-[url(../assets/images/804e325e-af3d-42ba-8162-5aadfe4bbbfe.png)] bg-cover bg-no-repeat absolute top-px left-0 z-10" />
        </div>
        <div className="flex w-[350px] h-[24px] justify-between items-center relative z-[5] mt-[8px] mr-0 mb-0 ml-[4px]">
          <div className="w-[171px] h-[24px] shrink-0 relative z-[5]">
            <div className="mt-2">
              <Checkmark />
            </div>
            <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#546179] tracking-[0.5px] absolute top-0 left-[22px] text-left whitespace-nowrap z-[6]">
              Free Cancellation
            </span>
            <div className="w-[12px] h-[8px] bg-[url(../assets/images/3ab6d092-13ca-4d2c-92b8-8f7018990158.png)] bg-cover bg-no-repeat absolute top-[10px] left-[-1px] z-[7]" />
          </div>
          <div className="w-[155px] h-[24px] shrink-0 relative z-[2]">
            <div className="mt-2">
              <Checkmark />
            </div>

            <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#546179] tracking-[0.5px] absolute top-0 left-[22px] text-left whitespace-nowrap z-[3]">
              New on Entrada
            </span>
            <div className="w-[12px] h-[8px] bg-[url(../assets/images/ecfdd663-1c76-42b1-93ee-33a2768ef6a9.png)] bg-cover bg-no-repeat absolute top-[10px] left-[-1px] z-[4]" />
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-[#fff] rounded-[20px] absolute top-0 left-0 shadow-[0_2px_4px_0_rgba(14,86,124,0.16)]" />
      <div className="w-[48px] h-[48px] bg-[url(../assets/images/71ea2d3a-cd58-4259-8394-2bf6a93ccac9.png)] bg-cover bg-no-repeat absolute top-[304px] right-[32px] z-[19]" />
      <div className="w-[44.53%] h-[11.07%] text-[0px] absolute top-[49.51%] left-[6.25%] z-20 flex">
        <div>
          {" "}
          <span className="block h-[36px] font-['Poppins'] text-[24px] font-semibold leading-[36px] text-[#1d293f] tracking-[-0.38px] relative text-left whitespace-nowrap z-[21] mt-0 mr-0 mb-0 ml-0">
            <Link to={`/product${item.id}`}>{item.Name}</Link>
          </span>
          <span className="block h-[24px] font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#99a3ad] tracking-[0.5px] relative text-left whitespace-nowrap z-[22] mt-[8px] mr-0 mb-0 ml-0">
            Hiking Tour | Stoke on Trent
          </span>
        </div>
        <div class="heart ml-[180px] mt-2">
          <button onClick={() => dispatch(updateWishlist(Index))}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`w-10 h-10 duration-500 ${
                item.Wishlist ? "text-red-500" : "text-gray-300"
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
      <div className="w-[25.39%] h-[14.66%] text-[0px] absolute top-[65.15%] left-[6.25%] z-[14]">
        <span className="flex w-[34px] h-[21px] justify-center items-start font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#546179] relative text-center whitespace-nowrap z-[18] mt-0 mr-0 mb-0 ml-0">
          from
        </span>
        <span className="block h-[21px] font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#546179] relative text-left whitespace-nowrap z-[16] mt-[48px] mr-0 mb-0 ml-0">
          *Price varies
        </span>
        <span className="flex h-[48px] justify-start items-start font-['Poppins'] text-[32px] font-semibold leading-[48px] text-[#1d293f] tracking-[-0.48px] absolute top-[21px] left-0 text-left whitespace-nowrap z-[17]">
          $895.00
        </span>
        <div className="w-[129px] h-[7px] bg-[url(../assets/images/11ab2efc-770b-4673-94c2-6818ae5af62d.png)] bg-cover bg-no-repeat absolute top-[50px] left-px z-[15]" />
      </div>
      <div className="w-[76px] h-[46px] absolute top-[422px] left-[404px] z-[11]">
        <div className="w-[76px] h-[16px] bg-[url(../assets/images/21d170d8-2bfd-47e6-abb2-a571c328e420.png)] bg-cover bg-no-repeat relative z-[12] mt-0 mr-0 mb-0 ml-0" />
        <Stars />
        <span className="flex w-[58px] h-[21px] justify-end items-start font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#546179] relative text-right whitespace-nowrap z-[13] mt-[9px] mr-0 mb-0 ml-[18px]">
          4.7 (108)
        </span>
      </div>
    </div>
  );
}
