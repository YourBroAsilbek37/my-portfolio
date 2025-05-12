import React from 'react'
import { bannerImg, mainimg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative" data-aos="fade-up">
      <img
        className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] z-10"
        src={'https://i.pinimg.com/736x/f3/fe/4d/f3fe4d0b949aa38c0a35f5e739e0b40b.jpg'}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner