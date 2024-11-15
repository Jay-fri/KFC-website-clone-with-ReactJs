import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between w-[100%] h-[60px] bg-white/70 backdrop-blur-md p-[40px] items-center fixed z-[100] top-0">
      <div className="w-fit">
        <svg
          className="w-[150px] p-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 62 21"
        >
          <path
            fill="#E4002B"
            d="M61.81 2.114l-1.005 4.53a.47.47 0 01-.462.373h-1.429a.47.47 0 01-.469-.499v-.082c.067-1.475-.863-2.578-2.97-2.578-3.505 0-6.051 2.876-6.386 6.662-.342 3.905 2.382 6.17 6.156 6.17 1.935 0 3.468-.373 4.324-.648a.467.467 0 01.603.536l-.446 2.34a.543.543 0 01-.373.425c-.774.246-2.947.827-6.267.827-7.897 0-11.098-4.546-10.607-9.18C42.92 6.86 45.65.78 56.406.78c2.062 0 3.707.328 5.002.686a.54.54 0 01.402.648zm-44.892-.64l-.26 1.176c-.06.261.097.53.357.604.454.179.558.611.156.939l-6.61 5.5 1.132-5.18c.194-.797.826-1.125 1.22-1.251l.068-.023a.517.517 0 00.35-.38l.268-1.23a.464.464 0 00-.454-.566H4.629a.51.51 0 00-.499.403L3.855 2.71c-.06.253.09.507.335.589.052.015.082.03.082.03.536.208 1.154.678.893 1.922L3.14 14.566C2.612 17.107 1.75 17.63.93 17.718H.9a.507.507 0 00-.447.403l-.26 1.192a.491.491 0 00.484.596H9.63c.216 0 .41-.149.454-.365l.313-1.393a.475.475 0 00-.29-.544l-.06-.023c-.454-.186-1.072-.573-.916-1.319l1.043-4.762c3.565 6.52 4.748 8.406 9.021 8.406h3.863c.216 0 .41-.149.454-.365l.268-1.207a.495.495 0 00-.476-.611c-.968-.015-1.444-.239-2.404-1.476L15.936 9.53l6.446-5.366c.863-.678 1.92-.864 2.508-.946 0 0 .023 0 .06-.008a.468.468 0 00.417-.365l.26-1.192a.468.468 0 00-.461-.574h-7.749a.503.503 0 00-.499.395zm23.857 5.17h1.51c.224 0 .41-.156.462-.364l1.02-4.636a.471.471 0 00-.462-.573H27.451a.51.51 0 00-.499.402l-.275 1.237a.492.492 0 00.312.566c.015.008.038.015.052.023.521.201 1.251.708.93 1.952l-3.11 14.1a.47.47 0 00.454.573h7.13c.224 0 .41-.156.455-.365l.312-1.408a.451.451 0 00-.253-.507c-.022-.008-.045-.022-.067-.03-.454-.224-1.124-.73-.9-1.721.022-.135.7-3.19.7-3.19h6.066c.223 0 .409-.156.461-.372l.573-2.571a.468.468 0 00-.461-.574h-5.858l1.094-4.993 4.094-.007c1.325 0 1.727.693 1.652 1.87 0 0 0 .015-.007.06-.03.283.193.529.469.529z"
          ></path>
        </svg>
      </div>
      <div className="flex gap-[25px] w-fit font-poppins">
        <NavLink
          to="/"
          className="text-black text-[1.5rem] font-[700] transition-[0.4s] hover:text-red-500 "
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className="text-black text-[1.5rem] font-[700] transition-[0.4s] hover:text-red-500 "
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/contact"
          className="text-black text-[1.5rem] font-[700] transition-[0.4s] hover:text-red-500 "
        >
          CONTACT
        </NavLink>
      </div>
      <div className="w-fit relative ">
        <input
          className=" bg-transparent placeholder:text-black placeholder:font-[600] active:border-black w-[200px] border-[2px] border-black h-[50px] rounded-[25px] pl-[15px] pr-[41px] font-poppins text-[1rem] font-[500]"
          type="text"
          placeholder="Search"
        />
        <Link to={"/"}>
          <div className="w-[40px] absolute top-6 right-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search absolute transition top-1/2 transform -translate-y-1/2 right-2 text-black"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
