import React from "react";
import firstlogo from "../assets/images/firstlogo.png";
import secondlogo from "../assets/images/second.png";
import thirdlogo from "../assets/images/thirdlogo.png";

const Home = () => {
  return (
    <div>
      <header className=" home-background mt-[100px]">
        <div className=" relative w-[100%] h-[100%] home-mask"></div>
        <div className="flex justify-between w-full p-[30px] absolute top-[250px] flex-wrap sm:gap-6">
          <div className="flex flex-col p-0 m-0 w-fit text-white items-center">
            <div className="text-[6.5rem] font-[600] p-0 m-0">30K+</div>
            <div className="p-0 mt-[-40px] text-[2rem] font-[600]">
              RESTAURANTS
            </div>
          </div>
          <div className=" hidden w-[3px] h-[195px] bg-white sm:block"></div>
          <div className="flex flex-col p-0 m-0 w-fit text-white items-center">
            <div className="text-[6.5rem] font-[600] p-0 m-0">1M</div>
            <div className="p-0 mt-[-30px] text-[2rem] font-[600] text-wrap w-[210px] text-center leading-[33px]">
              TEAM MEMBERS
            </div>
          </div>
          <div className="  hidden w-[3px] h-[195px] bg-white sm:block"></div>
          <div className="flex flex-col w-fit text-white items-center">
            <div className="text-[6.5rem] font-[600] p-0 m-0">150</div>
            <div className="p-0 mt-[-30px] text-[2rem] font-[600] text-wrap w-[210px] text-center leading-[33px]">
              COUNTRIES WITH KFC
            </div>
          </div>
          <div className="hidden w-[3px] h-[195px] bg-white sm:block"></div>
          <div className="flex flex-col w-fit text-white items-center">
            <div className="text-[6.5rem] font-[600] p-0 m-0">
              3.5 <span className="text-[2rem]">HOURS</span>
            </div>
            <div className="p-0 mt-[-30px] text-[2rem] font-[600] text-wrap w-[300px] text-center leading-[33px]">
              BEFORE NEXT KFC IS BUILT
            </div>
          </div>
        </div>
      </header>

      <section className="w-[100vw] bg-[#ff2929] flex items-center justify-center sm:justify-between p-[60px] flex-wrap gap-10">
        <div className="flex gap-[20px] items-center">
          <img src={firstlogo} alt="kfc logo" />
          <p className="text-white font-[500] text-[0.9rem] w-[350px]">
            KFC, a subsidiary of Yum! Brands, has been serving craveworthy,
            finger lickin' good food since 1952.
          </p>
        </div>
        <div className="flex gap-[20px] items-center">
          <img src={secondlogo} alt="" />
          <p className="text-white font-[500] text-[0.9rem] w-[350px]">
            It all started with our chef and expert tastemaker, Colonel Harland
            Sanders, who went on a relentless mission to crack and create our
            iconic taste.
          </p>
        </div>
        <div className="flex gap-[20px] items-center">
          <img src={thirdlogo} alt="" />
          <p className="text-white font-[500] text-[0.9rem] w-[350px]">
            Today, we have the widest global footprint of any quick service
            restaurant brand and are one of the world's fastest growing retail
            brands.
          </p>
        </div>
      </section>

      <section className="section2-bg w-full flex items-center">
        <div className="flex flex-col text-white w-fit ml-[200px]">
          <p className="text-[3rem] font-[600] w-[500px] m-0 p-0">
            SMOKY RICE BOWL{" "}
            <span className="text-[2rem] font-[600] mt-0 pt-0 ">INDIA</span>
          </p>
          <p className="w-[500px] font-[500] text-[1rem]">
            Our signature Smoky Chicken Leg served over buttery Yellow Rice and
            seasoned with Green Chili and Garlic, and topped with Rogini, an
            onion-tomato gravy.
          </p>
        </div>
      </section>

      <section className=" w-[100vw] h-[500px] flex text-white font-poppins">
        <div className="section3-bg1 relative">
          <div className="section3-mask w-[100%] h-[100%] "></div>
          <div className="flex flex-col gap-[20px] items-center justify-center absolute top-[170px]">
            <p className="font-[700] text-[2.5rem] m-0">COMPANY</p>
            <p className="font-[600] text-[1rem] w-[70%] text-center m-0">
              We're in the chicken business, but we're also in the people
              business.
            </p>
            <button className="bg-[#fd3232] p-[10px] rounded-[17px] font-[600] text-[0.9rem] hover:bg-[#c93636] transition-all">
              Learn More
            </button>
          </div>
        </div>
        <div className="section3-bg2 relative">
          <div className="section3-mask w-[100%] h-[100%]"></div>
          <div className="flex flex-col gap-[20px] items-center justify-center absolute top-[170px]">
            <p className="font-[700] text-[2.5rem] m-0">BRAND IMPACT</p>
            <p className="font-[600] text-[1rem] w-[70%] text-center m-0">
              From kitchens to communities, we're committed to doing things the
              right way.
            </p>
            <button className="bg-[#fd3232] p-[10px] rounded-[17px] font-[600] text-[0.9rem] hover:bg-[#c93636] transition-all">
              Learn More
            </button>
          </div>
        </div>
        <div className="section3-bg3 relative">
          <div className="section3-mask w-[100%] h-[100%]"></div>
          <div className="flex flex-col gap-[20px] items-center justify-center absolute top-[170px]">
            <p className="font-[700] text-[2.5rem] m-0">CAREERS</p>
            <p className="font-[600] text-[1rem] w-[70%] text-center m-0">
              Original recipe? Yes. Original careers? We've got those, too.
            </p>
            <button className="bg-[#fd3232] p-[10px] rounded-[17px] font-[600] text-[0.9rem] hover:bg-[#c93636] transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
