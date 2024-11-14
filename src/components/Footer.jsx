import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="w-[100vw] bg-black text-white flex flex-col gap-[20px] h-fit  pt-[100px] pl-[100px] pr-[100px] pb-[40px] items-center font-poppins">
        <div className="flex flex-wrap gap-[50px]">
          <div className="flex flex-col h-fit w-fit gap-[20px]">
            <p className="text-[1.5rem] font-[700] ">COMPANY</p>
            <div className="text-[0.9rem] font-[600]">
              <p>Our Ambitions</p>
              <p>Our Leadership</p>
              <p>Our History</p>
              <p>Where We Dish It Up</p>
            </div>
          </div>
          <div className="flex flex-col h-fit w-fit gap-[20px]">
            <p className="text-[1.5rem] font-[700] ">BRAND IMPACT</p>
            <div className="text-[0.9rem] font-[600]">
              <p>People & Communities</p>
              <p>Chicken & Nutrition</p>
              <p>Suppliers & Climate</p>
            </div>
          </div>
          <div className="flex flex-col h-fit w-fit gap-[20px]">
            <p className="text-[1.5rem] font-[700] ">CAREERS</p>
            <div className="text-[0.9rem] font-[600]">
              <p>Who We Are</p>
              <p>Working Here</p>
              <p>Job Search</p>
            </div>
          </div>
          <div className="flex flex-col h-fit w-fit gap-[20px]">
            <p className="text-[1.5rem] font-[700] ">NEWSROOM</p>
            <div className="text-[0.9rem] font-[600]">
              <p>Press Releases</p>
              <p>Blog</p>
              <p>Media Contacts</p>
              <p>Media Assets</p>
            </div>
          </div>
        </div>
        <Link to={""}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="55"
            fill="none"
            viewBox="0 0 56 55"
          >
            <ellipse
              cx="27.573"
              cy="27.5"
              fill="#fff"
              rx="27.573"
              ry="27.5"
            ></ellipse>
            <g clip-path="url(#clip0_8444_403)">
              <path
                fill="#000"
                d="M43.67 27.867c-.02-1.24-.19-2.498-.47-3.708-.504-2.175-1.785-3.764-4.036-4.388a9.208 9.208 0 00-2.4-.36c-.844-.01-2.645.114-3.849.753-1.023.545-1.83 1.32-2.51 2.266 0-.703-.017-1.407.008-2.109.012-.356-.11-.456-.465-.453-1.683.017-3.365.007-5.047.008-.516 0-.518 0-.518.5 0 6.23.004 12.459-.008 18.687 0 .393.122.504.509.5 1.747-.017 3.494-.006 5.241-.008.519 0 .52-.002.52-.503 0-3.134-.008-6.267.008-9.401a11.25 11.25 0 01.16-1.942c.241-1.325.859-2.395 2.294-2.748.431-.106.895-.126 1.342-.12 1.479.018 2.404.702 2.728 2.122.18.788.252 1.615.258 2.425.029 3.223.017 6.447.005 9.67-.002.385.119.51.51.505 1.747-.017 3.495-.016 5.242 0 .377.003.512-.09.51-.492-.016-3.735.028-7.47-.031-11.204zM20.177 19.87c-1.785.013-3.57.017-5.355-.003-.385-.004-.472.12-.47.48.013 3.12.007 6.24.007 9.36 0 3.132.004 6.265-.006 9.397-.001.318.067.461.423.458 1.81-.012 3.622-.01 5.433 0 .326.001.417-.122.417-.432-.007-6.277-.007-12.555.002-18.833 0-.346-.12-.43-.45-.427zm-2.683-9.741c-2.013-.001-3.605 1.579-3.603 3.576.001 1.973 1.593 3.542 3.594 3.543 2.002 0 3.606-1.57 3.61-3.532a3.58 3.58 0 00-3.6-3.587z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_8444_403">
                <path
                  fill="#fff"
                  d="M0 0H32.086V33H0z"
                  transform="translate(13.035 8)"
                ></path>
              </clipPath>
            </defs>
          </svg>
        </Link>
        <div className="flex gap-[2rem] text-[0.9rem] font-[600]">
          <p>Copyright © 2024 Yum! Ltd. All rights reserved.</p>
          <Link to={""} className="underline">
            Privacy Policy
          </Link>
          <Link to={""} className="underline">
            Terms of Use
          </Link>
          <Link to={""} className="underline">
            Sitemap
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
