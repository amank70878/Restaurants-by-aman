import React from "react";
import DeliveryLogo from "../assets/delivery.png";
import HeroBg from "../assets/heroBg.png";
import { heroData } from "../utils/data";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:h-[900px]">
      <div className="px-3 flex flex-col md:gap-5 lg:mt-10">
        <div className=" bg-orange-100 w-fit flex items-center px-3 py-1 rounded-full gap-3">
          <p className="text-base sm:text-xl font-semibold capitalize text-orange-500 tracking-wide">
            bike delivery
          </p>
          <div className="bg-white flex items-center justify-center drop-shadow-md rounded-full w-10 h-10">
            <img
              src={DeliveryLogo}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="py-5 flex flex-col gap-5 md:gap-10">
          <h3 className="text-gray-700 text-[2.7rem] sm:text-[3.5rem] lg:text-[4.5rem] 2xl:text-[5rem] font-bold">
            The Fastest Delivery in{" "}
            <span className="text-orange-500">Your City</span>
          </h3>

          <p className="text-gray-400 font-medium text-[15px] md:text-base lg:text-lg text-center md:text-left md:w-[85%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, quo! Lorem ipsum dolor sit amet consectetur
          </p>

          <motion.div
            whileTap={{ scale: 0.6 }}
            className="capitalize bg-orange-500 py-2 text-center text-lg rounded-lg font-medium tracking-wide md:w-fit px-5 cursor-pointer"
          >
            order now
          </motion.div>
        </div>
      </div>

      <div className="flex-1 relative mt-5 md:mt-0">
        <img
          src={HeroBg}
          alt=""
          className="ml-auto h-[600px] w-full lg:w-[80%] xl:w-[60%] lg:h-650"
        />

        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center sm:justify-between md:justify-center flex-wrap md:gap-0 lg:gap-4 lg:pt-4 2xl:px-28 gap-4 md:px-0 sm:px-24">
          {heroData &&
            heroData.map(({ id, name, decp, price, imageSrc }) => (
              <div
                key={id}
                className="bg-cardOverlay rounded-3xl px-5 py-4 xl:w-[225px] lg:w-[220px] lg:h-[270px] md:w-[95%] backdrop-blur-md flex lg:flex-col items-center justify-center flex-col md:flex-row w-[170px]"
              >
                <img
                  src={imageSrc}
                  alt=""
                  className="w-36 lg:w-44 object-contain md:mr-4 -mt-20 md:mt-0 lg:-mt-20"
                />
                <div className="md:mt-4 lg:mt-6 mt-3 flex flex-col md:flex-row lg:flex-col justify-center items-center gap-2 sm:gap-4">
                  <div className="flex flex-col justify-center items-center gap-2 sm:gap-4 md:px-2">
                    <h4 className="font-bold text-textColor md:text-xl lg:text-2xl">
                      {name}
                    </h4>
                    <p className="text-lighttextGray font-medium sm:font-semibold text-center text-[15px] sm:text-[15px] tracking-[.5px]">
                      {decp}
                    </p>
                  </div>
                  <span className="flex items-center justify-center gap-2 text-red-500 font-bold">
                    $
                    <p className="text-xs sm:text-sm font-bold text-headingColor">
                      {price}
                    </p>
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
